import { Injectable, ElementRef } from '@angular/core';
import * as PhotoSwipe from 'photoswipe';
import * as PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';
import { GalleryCollection, PhotoswipeItem, ImgSize } from './gallery.interface';
import * as ImageDims from './imageDims.json';

@Injectable({
    providedIn: 'root'
})
export class GalleryService {

    pswpElement: ElementRef;
    // tslint:disable-next-line: no-string-literal
    imageDims = ImageDims['default'];

    constructor() {}

    setGalleryRef(pswpElement: ElementRef) {
        this.pswpElement = pswpElement;
    }

    initGallery(src: string, gallery: GalleryCollection) {
        const options = {
            index: this.getIndex(src, gallery)
        };

        const pswpGallery = new PhotoSwipe(
            this.pswpElement.nativeElement,
            PhotoSwipeUI_Default,
            this.getPSWPGallery(gallery),
            options
        );

        pswpGallery.init();
    }

    getIndex(src: string, gallery: GalleryCollection): number {
        return Object.values(gallery).indexOf(src);
    }

    getPSWPGallery(gallery: GalleryCollection): Array<PhotoswipeItem> {
        return Object.values(gallery)
            .map((src: string) => this.parseSrc(src) );
    }

    // Parsing

    parseSrc(src: string): PhotoswipeItem {
        const targetSrc = this.getDesiredSizes()
            .map(size => this.parseSrcName(src, size))
            .filter(sizedSrc => this.imageDims[ sizedSrc ])
            [0];

        return {
            src: targetSrc,
            w: this.imageDims[targetSrc].w,
            h: this.imageDims[targetSrc].h,
        };
    }

    /**
     *  Return the sizes we would like to show based on device type. Starting with most desirable
     */
    getDesiredSizes(): Array<ImgSize> {
        return [ImgSize.lg, ImgSize.md, ImgSize.sm]; // for now pick highest available
    }

    parseSrcName(src, quality: ImgSize) {
        return (quality === ImgSize.sm) ? src :
            src.slice(0, src.indexOf('.')) +
            '-' + quality +
            src.slice(src.indexOf('.'));
    }
}
