import { ModuleWithProviders } from '@angular/core';
import { Configuration } from './configuration';
export declare class ApiModule {
    static forConfig(configurationFactory: () => Configuration): ModuleWithProviders;
}
