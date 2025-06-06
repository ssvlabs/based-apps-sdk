import { MainnetV4GetterABI } from '../abi/mainnet/v4/getter';
import { MainnetV4SetterABI } from '../abi/mainnet/v4/setter';
import { BAppABI } from '../abi/b-app';
import { TokenABI } from '../abi/token';
import { AbiInputsToParams } from '../types/contract-interactions';
import { Prettify } from '../types/utils';
import { Abi, Address, ExtractAbiFunctions } from 'abitype';
import { ContractFunctionArgs, ContractFunctionName, DecodeEventLogReturnType, Hash, PublicClient, ReadContractReturnType, SimulateContractParameters, SimulateContractReturnType, WaitForTransactionReceiptReturnType, WalletClient } from 'viem';
export type SupportedAbis = typeof TokenABI | typeof MainnetV4GetterABI | typeof MainnetV4SetterABI | typeof BAppABI;
export type TokenEvents = DecodeEventLogReturnType<typeof TokenABI>;
export type MainnetEvents = DecodeEventLogReturnType<typeof MainnetV4SetterABI>;
export type SupportedEvents = TokenEvents | MainnetEvents;
export type Contracts = {
    setter: {
        events: MainnetEvents | TokenEvents;
        abi: typeof MainnetV4SetterABI;
        writeFnNames: ContractFunctionName<typeof MainnetV4SetterABI, 'nonpayable' | 'payable'>;
        writeFunctions: ExtractAbiFunctions<typeof MainnetV4SetterABI, 'nonpayable' | 'payable'>;
        readFnNames: ContractFunctionName<typeof MainnetV4SetterABI, 'view' | 'pure'>;
        readFunctions: ExtractAbiFunctions<typeof MainnetV4SetterABI, 'view' | 'pure'>;
    };
    getter: {
        events: MainnetEvents | TokenEvents;
        abi: typeof MainnetV4GetterABI;
        writeFnNames: ContractFunctionName<typeof MainnetV4GetterABI, 'view' | 'pure'>;
        writeFunctions: ExtractAbiFunctions<typeof MainnetV4GetterABI, 'nonpayable' | 'payable'>;
        readFnNames: ContractFunctionName<typeof MainnetV4GetterABI, 'view' | 'pure'>;
        readFunctions: ExtractAbiFunctions<typeof MainnetV4GetterABI, 'view' | 'pure'>;
    };
    token: {
        events: TokenEvents;
        abi: typeof TokenABI;
        writeFnNames: ContractFunctionName<typeof TokenABI, 'nonpayable' | 'payable'>;
        writeFunctions: ExtractAbiFunctions<typeof TokenABI, 'nonpayable' | 'payable'>;
        readFnNames: ContractFunctionName<typeof TokenABI, 'view' | 'pure'>;
        readFunctions: ExtractAbiFunctions<typeof TokenABI, 'view' | 'pure'>;
    };
    bapp: {
        events: MainnetEvents | TokenEvents;
        abi: typeof BAppABI;
        writeFnNames: ContractFunctionName<typeof BAppABI, 'nonpayable' | 'payable'>;
        writeFunctions: ExtractAbiFunctions<typeof BAppABI, 'nonpayable' | 'payable'>;
        readFnNames: ContractFunctionName<typeof BAppABI, 'view' | 'pure'>;
        readFunctions: ExtractAbiFunctions<typeof BAppABI, 'view' | 'pure'>;
    };
};
export type WriteFns = Contracts[keyof Contracts]['writeFunctions'];
export type WriteFnNames = Contracts[keyof Contracts]['writeFnNames'];
export type WriteReturnType<T extends SupportedEvents> = Promise<{
    hash: Hash;
    wait: () => Promise<WaitForTransactionReceiptReturnType & {
        events: T[];
    }>;
}>;
export type WriteOptions<K extends WriteFns> = Omit<SimulateContractParameters<SupportedAbis, K['name']>, 'chain' | 'args' | 'value' | 'abi' | 'functionName' | 'address' | 'account' | 'value'>;
export type SmartFnWriteOptions<K extends Record<string, unknown>> = Omit<SimulateContractParameters, 'chain' | 'args' | 'value' | 'abi' | 'functionName' | 'address' | 'account' | 'value'> & {
    args: K;
};
export type WriteProps = {
    abi: Abi;
    publicClient: PublicClient;
    walletClient: WalletClient;
    contractAddress: Address;
};
export type ReadProps = {
    abi: SupportedAbis;
    publicClient: PublicClient;
    contractAddress: Address;
};
export type ContractNames = Prettify<keyof Contracts>;
export type WriterFunctions<ContractName extends ContractNames, Fns extends Contracts[ContractName]['writeFunctions'] = Contracts[ContractName]['writeFunctions']> = {
    [K in Fns as K['name']]: K['inputs'] extends readonly [] ? {
        (props?: Prettify<(K['stateMutability'] extends 'payable' ? {
            value?: bigint;
        } : object) & WriteOptions<K>>): WriteReturnType<Contracts[ContractName]['events']>;
        simulate: (props?: Prettify<(K['stateMutability'] extends 'payable' ? {
            value?: bigint;
        } : object) & WriteOptions<K>>) => SimulateContractReturnType<SupportedAbis, K['name']>;
    } : {
        (props: Prettify<((K['stateMutability'] extends 'payable' ? {
            value?: bigint;
        } : object) & (K['inputs'] extends readonly [] ? object : {
            args: Prettify<AbiInputsToParams<K['inputs']>>;
        })) & WriteOptions<K>>): WriteReturnType<Contracts[ContractName]['events']>;
        simulate: (props: Prettify<((K['stateMutability'] extends 'payable' ? {
            value?: bigint;
        } : object) & (K['inputs'] extends readonly [] ? object : {
            args: Prettify<AbiInputsToParams<K['inputs']>>;
        })) & WriteOptions<K>>) => SimulateContractReturnType<SupportedAbis, K['name']>;
    };
};
export type ReaderFunctions<ContractName extends keyof Contracts, Fns extends Contracts[ContractName]['readFunctions'] = Contracts[ContractName]['readFunctions']> = {
    [K in Fns as K['name']]: K['inputs'] extends readonly [] ? () => Promise<ReadContractReturnType<[
        Fns
    ], K['name'], ContractFunctionArgs<[Fns], 'pure' | 'view', K['name']>>> : (args: Prettify<AbiInputsToParams<K['inputs']>>) => Promise<ReadContractReturnType<[
        Fns
    ], K['name'], ContractFunctionArgs<[Fns], 'pure' | 'view', K['name']>>>;
};
export type ContractInteractions<ContractName extends ContractNames> = {
    write: WriterFunctions<ContractName>;
    read: ReaderFunctions<ContractName>;
    address: Address;
};
