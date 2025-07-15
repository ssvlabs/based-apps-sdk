/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BAM_GRAPH_ENDPOINT: string
  // Add other env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'ssv-keys' {
  export interface KeySharesItem {
    data: {
      publicKey: string
      operators: Array<{
        id: number
        operatorKey: string
      }>
    }
    payload: {
      operatorIds: number[]
    }
    error: Error | null
  }
}
