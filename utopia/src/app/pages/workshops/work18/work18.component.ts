import { Component } from '@angular/core';
import { TemplateGalleries } from 'src/app/services/gallery.interface';
import { work18Galleries } from './work18.galleries';

@Component({
  selector: 'app-work18',
  templateUrl: './work18.component.html',
  styleUrls: ['./work18.component.scss']
})
export class Work18Component {
    galls: TemplateGalleries = work18Galleries;
}
