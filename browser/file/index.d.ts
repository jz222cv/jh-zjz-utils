export declare const fileToDataURL: (file: Blob) => Promise<any>;
export declare const dataURLToImage: (dataURL: string) => Promise<HTMLImageElement>;
export declare const canvastoFile: (canvas: HTMLCanvasElement, type: string, quality: number) => Promise<Blob | null>;
export declare const compressImage: (file: File, options?: {
    type?: string;
    quality?: number;
    width?: number;
    height?: number;
}) => Promise<File>;
export declare function downloadFile(blob: Blob, filename: string): void;
