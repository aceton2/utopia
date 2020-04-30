
export interface GalleryItem {
    src: string;
    srcHi?: string;
    w: number;
    h: number;
}

export interface GalleryCollection {
    [name: string]: GalleryItem;
}

export interface TemplateGalleries {
   [key: string]: GalleryCollection;
}
