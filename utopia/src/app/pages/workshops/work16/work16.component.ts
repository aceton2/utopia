import { Component } from '@angular/core';
import { TemplateGalleries } from 'src/app/services/gallery.interface';
import { work16Galleries } from './work16.galleries';

@Component({
  selector: 'app-work16',
  templateUrl: './work16.component.html',
  styleUrls: ['./work16.component.scss']
})
export class Work16Component {
    galls: TemplateGalleries = work16Galleries;
}
