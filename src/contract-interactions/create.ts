/* eslint-disable @typescript-eslint/no-explicit-any */
import { TestnetV4GetterABI } from '@/abi/testnet/v4/getter'
import { MainnetV4SetterABI } from '@/abi/mainnet/v4/setter'
import { TokenABI } from '@/abi/token'
import { paramsToArray } from '@/types/contract-interactions'
import { tryCatch } from '@/utils'
import type { AbiFunction, WriteContractParameters } from 'viem'
import { decodeEventLog } from 'viem'
import type {
  ContractNames,
  Contracts,
  ReadProps,
  ReaderFunctions,
  SupportedAbis,
  WriteProps,
  WriterFunctions,
} from './types'

const ABIS = [TokenABI, MainnetV4SetterABI, TestnetV4GetterABI]

export const createWriter = <T extends ContractNames>({
  abi,
  publicClient,
  walletClient,
  contractAddress,
}: WriteProps): WriterFunctions<T> => {
  const writeFnsMainnet = abi.filter(
    (item) =>
      item.type === 'function' &&
      (item.stateMutability === 'nonpayable' || item.stateMutability === 'payable'),
  ) as AbiFunction[]

  return Object.fromEntries(
    writeFnsMainnet.map((fn) => {
      const simulate = async (options: any) =>
        publicClient.simulateContract({
          ...options,
          address: contractAddress,
          abi,
          functionName: fn.name,
          args: paramsToArray({ params: options.args, abiFunction: fn }),
          account: walletClient.account!,
        })

      const func = async (options: any) => {
        const { request } = await simulate(options)

        const hash = await walletClient.writeContract(request as WriteContractParameters)
        return {
          hash,
          wait: () =>
            publicClient.waitForTransactionReceipt({ hash }).then((receipt) => ({
              ...receipt,
              events: receipt.logs.reduce(
                (acc, log) => {
                  try {
                    const event = decodeEventLog({
                      abi: abi,
                      data: log.data,
                      topics: log.topics,
                    }) as unknown as Contracts[T]['events']
                    acc.push(event)
                  } catch {
                    for (const eventAbi of ABIS) {
                      tryCatch(() => {
                        const event = decodeEventLog({
                          abi: eventAbi,
                          data: log.data,
                          topics: log.topics,
                        })
                        acc.push(event)
                      })
                    }
                  }

                  return acc
                },
                [] as Contracts[T]['events'][],
              ),
            })),
        }
      }
      func.simulate = simulate
      return [fn.name, func]
    }),
  ) as any
}

export const createReader = <T extends ContractNames>({
  abi,
  publicClient,
  contractAddress,
}: ReadProps): ReaderFunctions<T> => {
  const readFnsMainnet = (abi as SupportedAbis).filter(
    (item) =>
      item.type === 'function' &&
      (item.stateMutability === 'view' || item.stateMutability === 'pure'),
  ) as AbiFunction[]

  return Object.fromEntries(
    readFnsMainnet.map((fn) => {
      const func = async (args: any) => {
        return await publicClient.readContract({
          abi,
          address: contractAddress,
          functionName: fn.name,
          args: paramsToArray({ params: args, abiFunction: fn }),
        } as any)
      }
      return [fn.name, func]
    }),
  ) as any
}
