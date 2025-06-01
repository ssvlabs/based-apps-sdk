import { Address } from 'abitype';
export declare const hoodi: {
    blockExplorers?: {
        [key: string]: {
            name: string;
            url: string;
            apiUrl?: string | undefined;
        };
        default: {
            name: string;
            url: string;
            apiUrl?: string | undefined;
        };
    } | undefined | undefined;
    contracts?: {
        [x: string]: import('viem').ChainContract | {
            [sourceId: number]: import('viem').ChainContract | undefined;
        } | undefined;
        ensRegistry?: import('viem').ChainContract | undefined;
        ensUniversalResolver?: import('viem').ChainContract | undefined;
        multicall3?: import('viem').ChainContract | undefined;
        universalSignatureVerifier?: import('viem').ChainContract | undefined;
    } | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 560048;
    name: "Hoodi";
    nativeCurrency: {
        readonly name: "Hoodi Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.hoodi.ethpandaops.io"];
        };
    };
    sourceId?: number | undefined | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    fees?: import('viem').ChainFees<undefined> | undefined;
    formatters?: undefined;
    serializers?: import('viem').ChainSerializers<undefined, import('viem').TransactionSerializable> | undefined;
};
export declare const chains: {
    readonly hoodi: {
        blockExplorers?: {
            [key: string]: {
                name: string;
                url: string;
                apiUrl?: string | undefined;
            };
            default: {
                name: string;
                url: string;
                apiUrl?: string | undefined;
            };
        } | undefined | undefined;
        contracts?: {
            [x: string]: import('viem').ChainContract | {
                [sourceId: number]: import('viem').ChainContract | undefined;
            } | undefined;
            ensRegistry?: import('viem').ChainContract | undefined;
            ensUniversalResolver?: import('viem').ChainContract | undefined;
            multicall3?: import('viem').ChainContract | undefined;
            universalSignatureVerifier?: import('viem').ChainContract | undefined;
        } | undefined;
        ensTlds?: readonly string[] | undefined;
        id: 560048;
        name: "Hoodi";
        nativeCurrency: {
            readonly name: "Hoodi Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://rpc.hoodi.ethpandaops.io"];
            };
        };
        sourceId?: number | undefined | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        fees?: import('viem').ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import('viem').ChainSerializers<undefined, import('viem').TransactionSerializable> | undefined;
    };
};
export declare const chainIds: readonly [560048];
export type ChainId = (typeof chainIds)[number];
export declare const networks: readonly ["hoodi"];
export type Network = Lowercase<(typeof networks)[number]>;
export declare const bam_graph_endpoints: Record<ChainId, string>;
export declare const bam_paid_graph_endpoints: Record<ChainId, string>;
export type ContractAddresses = {
    bapp: Address;
};
export declare const contracts: Record<ChainId, ContractAddresses>;
