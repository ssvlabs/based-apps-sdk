<p align="center">
  <img src="https://ssv.network/wp-content/uploads/2024/06/full_logo_white.svg" alt="SSV Network" width="300"/>
</p>

<h1 align="center">Based Apps SDK</h1>

<p align="center">
  <a href="https://codecov.io/gh/ssvlabs/ssv-sdk">
    <img src="https://codecov.io/gh/ssvlabs/ssv-sdk/graph/badge.svg?token=2j2HCF1fSb" alt="codecov"/>
  </a>
</p>

> **⚠️ Development Notice**: This SDK is currently under active development and testing. It is not recommended for production use at this time. For updates and documentation, please refer to our [official documentation](https://docs.ssv.network).

## Overview

The Based Apps SDK is a TypeScript library for managing Based Applications on the SSV Network.

## Core Modules

The SDK consists of three main modules:

- **BasedAppManager**: Register BApps, manage tokens, risk levels, created and edit strategies, delegations, deposits
- **API**: Access Based Apps data, query states, and retrieve operational information
- **Utils**: Helper functions for calculating Participants' Weights and other miscellaneous tasks

## Installation

```bash
# Using npm
npm i @ssv-labs/ba-sdk

# Using yarn
yarn add @ssv-labs/ba-sdk

# Using pnpm
pnpm install @ssv-labs/ba-sdk
```

## Quick Start

### Initialize the SDK

```typescript
import { BasedAppsSDK } from 'bam-sdk'

const sdk = new BasedAppsSDK({
  chain: 17000,
})
```

### API Examples

```typescript
// get validator balance of a given account
const response = await sdk.api.bam.getValidatorsBalance({
  account: '0x77fc6e8b24a623725d935bc88057098d0bca6eb3',
})

console.log('response:', response)
```

### Calculate Participants Weights

```ts
const strategiesWeights = await sdk.utils.getParticipantWeights({
  bAppId: '0x64714cf5db177398729e37627be0fc08f43b17a6',
})

console.log('response:', response)
```

## Documentation

For detailed documentation and examples, visit our [official documentation](https://docs.ssv.network).
