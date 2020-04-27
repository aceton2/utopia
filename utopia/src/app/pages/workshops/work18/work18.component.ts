import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';

const gallery1 = [
    {
        src: 'assets/imgs/island/tal1.gif',
        w: 600,
        h: 400
    },
    {
        src: 'assets/imgs/island/tal1.gif',
        w: 1200,
        h: 900
    }
];

@Component({
  selector: 'app-work18',
  templateUrl: './work18.component.html',
  styleUrls: ['./work18.component.scss']
})
export class Work18Component {

    constructor(
        private galleryService: GalleryService
    ) { }


    openGallery() {
        this.galleryService.initGallery(0, gallery1);
    }
}
