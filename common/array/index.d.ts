export declare function getKeys<T>(obj: T): (keyof T)[];
export declare function arrayObject<T extends string | number | Record<string | number, any>, K extends keyof T>(arr: T[], key?: K): T extends string | number ? Record<string, true> : Record<string, T>;
export declare function arrayUnique<T>(arr: T[]): T[];
export declare function arrayUnion<T>(...arr: T[][]): T[];
export declare function arrayIntersect<T extends number | string>(...arr: T[][]): T[];
export declare function arrayDiff<T extends number | string>(...arr: T[][]): T[];
