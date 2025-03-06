import { utils } from '@/libs/utils'
import type { ConfigReturnType } from './config/create'
import { createConfig, isConfig } from './config/create'
import type { ConfigArgs } from './utils/zod/config'
import type { APIs } from '@/api'

export class BasedAppsSDK {
  readonly core: ConfigReturnType
  readonly api: ConfigReturnType['basedAppsAPI'] & APIs['bam']
  readonly utils: typeof utils

  constructor(props: ConfigArgs | ConfigReturnType) {
    this.core = isConfig(props) ? props : createConfig(props)
    this.api = {
      ...this.core.basedAppsAPI,
      ...this.core.apis.bam,
    } as ConfigReturnType['basedAppsAPI'] & APIs['bam']
    this.utils = utils
  }
}
