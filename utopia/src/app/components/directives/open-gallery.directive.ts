import { Directive, HostListener, Input, ElementRef } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { GalleryCollection, GalleryItem } from './gallery.interface';

@Directive({
    selector: '[openGallery]'
})
export class OpenGalleryDirective {

    gallery: GalleryCollection;
    image: GalleryItem;

    @Input('openGallery') set main(val: [GalleryCollection, string]) {
        this.gallery = val[0];
        this.image = this.gallery[val[1]];
        this.el.nativeElement.src = this.image.src;
    }

    @HostListener('click', ['$event.target'])
        openGallery() {
            this.galleryService.initGallery(this.getIndex(), this.getPSWPGallery());
    }

    constructor(
        private galleryService: GalleryService,
        private el: ElementRef
    ) {}

    getIndex(): number {
        return Object.values(this.gallery).indexOf(this.image);
    }

    getPSWPGallery() {
        return Object.values(this.gallery)
            .map((item: GalleryItem) => ({ ...item, src: item.srcHi || item.src }))
            .filter(item => item.src);
    }
}
