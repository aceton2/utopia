import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements AfterViewInit {

    @ViewChild('pswp', {static: false}) pswp: ElementRef;

    constructor(
        private galleryService: GalleryService,
    ) { }

    ngAfterViewInit() {
        this.galleryService.setGalleryRef(this.pswp);
    }
}
