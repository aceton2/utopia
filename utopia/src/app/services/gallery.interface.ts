
export enum ImgSize {
    sm = 'sm',
    md = 'md',
    lg = 'lg'
}

export interface GalleryCollection {
    [name: string]: string;
}

export interface TemplateGalleries {
   [key: string]: GalleryCollection;
}

export interface PhotoswipeItem {
    src: string;
    w: number;
    h: number;
}
