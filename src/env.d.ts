/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BAM_GRAPH_ENDPOINT: string
  // Add other env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 