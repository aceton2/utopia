import { Component } from '@angular/core';
import { TemplateGalleries } from 'src/app/services/gallery.interface';
import { show17Galleries } from './show17.galleries';

@Component({
  selector: 'app-show17',
  templateUrl: './show17.component.html',
  styleUrls: ['./show17.component.scss']
})
export class Show17Component {
    galls: TemplateGalleries = show17Galleries;
}
