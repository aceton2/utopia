import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { GalleryCollection, GalleryItem } from '../directives/gallery.interface';
import Flickity from 'flickity';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

    @ViewChild('slider', {static: true}) sliderEl: ElementRef;

    @Input() gallery: any;
    @Input() images: Array<any>;

    slides: Array<any> = [];
    flkty: any;

    constructor(
        private galleryService: GalleryService,
    ) {}

    ngOnInit() {
        setTimeout( () => this.initGallery(), 0 );
    }

    initGallery() {
        this.addKeysToGallery();
        this.setSlides();

        this.flkty = new Flickity(this.sliderEl.nativeElement, {
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            prevNextButtons: false
        });

        this.slides.forEach( slide => this.flkty.append( this.createSlideElement(slide.src, slide.key) ) );
        this.flkty.on('staticClick', (e, p, cellElement) => this.showImage(cellElement) );
    }

    createSlideElement(src: string, key: string) {
        const div = document.createElement('div');
        const img = document.createElement('img');
        img.src = src;
        img.alt = key;
        div.appendChild(img);
        div.className = 'flkty-slide';

        return div;
    }

    setSlides() {
        this.slides = this.images.map( img => ({...this.gallery[img], key: img}) );
    }

    showImage(cellElement) {
        const pswpGallery = this.getPSWPGallery();
        const index = pswpGallery.findIndex(slide => slide.key === cellElement.firstElementChild.alt);
        this.galleryService.initGallery(index, this.getPSWPGallery());

    }

    getPSWPGallery(): Array<any> {
        return Object.values(this.gallery)
            .map((item: GalleryItem) => ({ ...item, src: item.srcHi || item.src }))
            .filter(item => item.src);
    }

    addKeysToGallery() {
        for (const key of Object.keys(this.gallery)) {
            this.gallery[key].key = key;
        }
    }
}
