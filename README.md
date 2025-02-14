<p align="center">
  <img src="https://ssv.network/wp-content/uploads/2024/06/full_logo_white.svg" alt="SSV Network" width="300"/>
</p>

<h1 align="center">Based Apps SDK</h1>

<p align="center">
  <a href="https://codecov.io/gh/ssvlabs/ssv-sdk">
    <img src="https://codecov.io/gh/ssvlabs/ssv-sdk/graph/badge.svg?token=2j2HCF1fSb" alt="codecov"/>
  </a>
</p>

> **⚠️ Development Notice**: This SDK is currently under active development and testing. It is not recommended for production use at this time. For updates and documentation, please refer to our [official documentation](https://docs.ssv.network/based-applications/developers/BA-SDK/).

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
npm i @ssv-labs/bapps-sdk

# Using yarn
yarn add @ssv-labs/bapps-sdk

# Using pnpm
pnpm install @ssv-labs/bapps-sdk
```

## Quick Start

### Initialize the SDK

```typescript
import { BasedAppsSDK } from "@ssv-labs/bapps-sdk";

const sdk = new BasedAppsSDK({
  chain: 17000,
})
```

### API Examples

```typescript
// get validator balance of a given account
const validatorBalance = await sdk.api.getValidatorsBalance({
    account: '0x77fc6e8b24a623725d935bc88057098d0bca6eb3',
});

console.log('response:', validatorBalance)
```

### Calculate Strategy Weights

```ts
// calculate strategy-token weights via the SDK
  const strategyTokenWeights = await sdk.api.calculateParticipantWeights({
    bAppId: "0xaA184b86B4cdb747F4A3BF6e6FCd5e27c1d92c5c",
  });

console.log('response:', strategyTokenWeights)
```

## Documentation

For detailed documentation and examples, visit our [official documentation](https://docs.ssv.network/based-applications/developers/BA-SDK/).
