import { utils } from './libs/utils';
import { ConfigReturnType } from './config/create';
import { ConfigArgs } from './utils/zod/config';
import { APIs } from './api';
export declare class BasedAppsSDK {
    readonly core: ConfigReturnType;
    readonly api: ConfigReturnType['basedAppsAPI'] & APIs['bam'];
    readonly contracts: ConfigReturnType['contracts'];
    readonly utils: typeof utils;
    constructor(props: ConfigArgs | ConfigReturnType);
}
