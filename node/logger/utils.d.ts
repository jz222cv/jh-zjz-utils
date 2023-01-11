export type Key = 'log' | 'info' | 'complete' | 'debug' | 'success' | 'error' | 'warn' | 'star' | 'start' | 'await';
export type LoggerInstance = Record<Key, (...items: any[]) => void>;
export declare function getLog(msg: string, type: Key): string;
export declare function logjs(type?: 'error' | 'info'): LoggerInstance;
export declare function logjsText(color?: boolean): {};
