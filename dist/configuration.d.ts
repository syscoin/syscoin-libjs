export interface ConfigurationParameters {
    apiKeys?: {
        [key: string]: string;
    };
    username?: string;
    password?: string;
    accessToken?: string | (() => string);
    basePath?: string;
    withCredentials?: boolean;
}
export declare class Configuration {
    apiKeys?: {
        [key: string]: string;
    };
    username?: string;
    password?: string;
    accessToken?: string | (() => string);
    basePath?: string;
    withCredentials?: boolean;
    constructor(configurationParameters?: ConfigurationParameters);
}
