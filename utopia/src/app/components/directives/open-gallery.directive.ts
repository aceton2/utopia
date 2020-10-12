import { Directive, HostListener, Input, ElementRef, HostBinding } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { GalleryCollection } from '../../services/gallery.interface';

@Directive({
    selector: '[openGallery]'
})
export class OpenGalleryDirective {

    gallery: GalleryCollection;
    imageSrc: string;

    @Input('openGallery') set main(val: [GalleryCollection, string]) {
        this.gallery = val[0];
        this.imageSrc = this.gallery[val[1]];
        this.el.nativeElement.src = this.imageSrc;
    }

    @HostBinding('class.cursor-as-pointer') true;

    @HostListener('click')
        openGallery() {
            this.galleryService.initGallery(this.imageSrc, this.gallery);
    }

    constructor(
        private galleryService: GalleryService,
        private el: ElementRef
    ) {}
}
