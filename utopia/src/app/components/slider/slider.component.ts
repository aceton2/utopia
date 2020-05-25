import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { GalleryCollection } from '../../services/gallery.interface';
import Flickity from 'flickity';
import { GalleryService } from 'src/app/services/gallery.service';

interface SlideItem {
    src: string;
    key: string;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

    @ViewChild('slider', {static: true}) sliderEl: ElementRef;

    @Input() gallery: GalleryCollection;
    @Input() keys: Array<string>;

    slides: Array<SlideItem> = [];
    flkty: any;

    constructor(
        private galleryService: GalleryService,
    ) {}

    ngOnInit() {
        this.initSlider();
    }

    initSlider() {
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

    // Setup Slides

    setSlides() {
        this.slides = this.keys.map( key => ({
            src: this.gallery[key],
            key
        }) );
    }

    // Open Gallery

    showImage(cellElement) {
        const rawSrc = cellElement.firstElementChild.src;
        const src = rawSrc.substring(rawSrc.indexOf('assets'));
        this.galleryService.initGallery(
            src,
            this.gallery
        );
    }
}
