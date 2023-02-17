import { Key, LoggerInstance } from './utils';
export { logjs, logjsText } from './utils';
export declare class Logger {
    timestamp: number;
    logger: LoggerInstance;
    constructor();
    base(message: string, type: Key): void;
    log(message: string, type?: Key): void;
    logSync(message: string, type?: Key): void;
}
