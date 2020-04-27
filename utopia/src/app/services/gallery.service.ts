import { Injectable, ElementRef } from '@angular/core';
import * as PhotoSwipe from 'photoswipe';
import * as PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';

@Injectable({
    providedIn: 'root'
})
export class GalleryService {

    pswpElement: ElementRef;

    constructor() { }

    setGalleryRef(pswpElement: ElementRef) {
        this.pswpElement = pswpElement;
    }

    initGallery(index = 0, items) {
        const options = {
            index
        };

        const gallery = new PhotoSwipe(this.pswpElement.nativeElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    }
}
