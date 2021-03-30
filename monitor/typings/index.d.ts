
declare type EffectiveConnectionType = "2g" | "3g" | "4g" | "5g" | "slow-2g" | "lte";

declare interface IAnalyticsTrackerOptions {
    metricName: string;
    data: IUploadData;
    eventProperties: object;
    navigatorInformation: INavigatorInfo;
    vitalsScore: IVitalsScore;
}

declare interface IInitOptions {
    captureError?: boolean;
    resourceTiming?: boolean;
    elementTiming?: boolean;
    analyticsTracker?: (options: IAnalyticsTrackerOptions) => void;
    maxMeasureTime?: number;
    logUrl?: string;
}

declare interface INavigationTiming {
    fetchTime?: number;
    workerTime?: number;
    totalTime?: number;
    downloadTime?: number;
    timeToFirstByte?: number;
    headerSize?: number;
    dnsLookupTime?: number;
    tcpTime?: number;
    whiteTime?: number;
    domTime?: number;
    loadTime?: number;
    parseDomTime?: number;
}

declare interface INavigatorInfo {
    deviceMemory?: number;
    hardwareConcurrency?: number;
    isLowEndDevice?: boolean;
    isLowEndExperience?: boolean;
    serviceWorkerStatus?: "controlled" | "supported" | "unsupported";
}

declare interface INetworkInformation {
    downlink?: number;
    effectiveType?: EffectiveConnectionType;
    onchange?: () => void;
    rtt?: number;
    saveData?: boolean;
}

declare type IUploadData = number | INavigationTiming | INetworkInformation;

declare type IVitalsScore = "good" | "needsImprovement" | "poor" | null;

declare class WebMonitor {
    private reportClient;
    private handleHttpError;
    constructor(options?: IInitOptions);
}
export default WebMonitor;

export { }
