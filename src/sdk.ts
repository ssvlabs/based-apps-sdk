import type { ConfigReturnType } from './config/create'
import { createConfig, isConfig } from './config/create'
import type { ConfigArgs } from './utils/zod/config'

export class BasedAppsSDK {
  readonly core: ConfigReturnType
  readonly api: ConfigReturnType['basedAppsAPI']

  constructor(props: ConfigArgs | ConfigReturnType) {
    this.core = isConfig(props) ? props : createConfig(props)
    this.api = this.core.basedAppsAPI
  }
}
