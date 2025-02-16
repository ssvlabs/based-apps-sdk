import { utils } from '@/libs/utils'
import type { ConfigReturnType } from './config/create'
import { createConfig } from './config/create'
import type { ConfigArgs } from './utils/zod/config'

export class BasedAppsSDK {
  readonly core: ConfigReturnType
  readonly api: ConfigReturnType['basedAppsAPI']
  readonly utils: typeof utils

  constructor(props: ConfigArgs) {
    this.core = createConfig(props)
    this.api = this.core.basedAppsAPI
    this.utils = utils
  }
}
