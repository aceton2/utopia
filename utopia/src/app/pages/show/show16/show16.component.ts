import { Component } from '@angular/core';
import { TemplateGalleries } from 'src/app/services/gallery.interface';
import { show16Galleries } from './show16.galleries';

@Component({
  selector: 'app-show16',
  templateUrl: './show16.component.html',
  styleUrls: ['./show16.component.scss']
})
export class Show16Component {
    galls: TemplateGalleries = show16Galleries;
}
