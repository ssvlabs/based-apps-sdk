import { Address } from 'abitype';
export declare const chains: {
    readonly holesky: {
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://holesky.etherscan.io";
                readonly apiUrl: "https://api-holesky.etherscan.io/api";
            };
        };
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 77;
            };
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
                readonly blockCreated: 801613;
            };
            readonly ensUniversalResolver: {
                readonly address: "0xa6AC935D4971E3CD133b950aE053bECD16fE7f3b";
                readonly blockCreated: 973484;
            };
        };
        id: 17000;
        name: "Holesky";
        nativeCurrency: {
            readonly name: "Holesky Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://ethereum-holesky-rpc.publicnode.com"];
            };
        };
        sourceId?: number | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        fees?: import('viem').ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import('viem').ChainSerializers<undefined, import('viem').TransactionSerializable<bigint, number>> | undefined;
    };
};
export declare const chainIds: readonly [17000];
export type ChainId = (typeof chainIds)[number];
export declare const networks: readonly ["holesky"];
export type Network = Lowercase<(typeof networks)[number]>;
export declare const bam_graph_endpoints: Record<ChainId, string>;
export type ContractAddresses = {
    bapp: Address;
};
export declare const contracts: Record<ChainId, ContractAddresses>;
