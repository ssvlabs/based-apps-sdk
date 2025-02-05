import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  generates: {
    // First Graph (existing SSV Network)
    './src/graphql/dvt/': {
      schema: 'https://api.studio.thegraph.com/query/71118/ssv-network-ethereum/version/latest',
      documents: ['src/**/*.dvt.graphql'],
      preset: 'client',
      config: {
        scalars: {
          BigInt: 'string', // or 'string' if you prefer string representation
          BigDecimal: 'string',
          Bytes: 'Address',
          Account: 'Address',
        },
        additionalImports: ['import { type Address } from "viem"'],
        skipTypename: true,
      },
      plugins: [
        {
          add: {
            content: "import { type Address } from 'viem';",
          },
        },
      ],
      //   plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
    },
    // Second Graph (new one)
    './src/graphql/bam/': {
      schema: 'https://api.studio.thegraph.com/query/53804/ssv-bapps-subgraph/version/latest',
      documents: ['src/**/*.bam.graphql'],
      preset: 'client',
      config: {
        scalars: {
          BigInt: 'string', // or 'string' if you prefer string representation
          BigDecimal: 'string',
          Bytes: 'Address',
          Account: 'Address',
        },
        additionalImports: ['import { type Address } from "viem"'],
        skipTypename: true,
      },
      plugins: [
        {
          add: {
            content: "import { type Address } from 'viem';",
          },
        },
      ],
      //   plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
    },
    './schema.dvt.graphql': {
      schema: 'https://api.studio.thegraph.com/query/71118/ssv-network-ethereum/version/latest',
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
      },
    },
    './schema.bam.graphql': {
      schema: 'https://api.studio.thegraph.com/query/53804/ssv-bapps-subgraph/version/latest',
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true,
      },
    },
  },
}

export default config
