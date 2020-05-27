import { Component } from '@angular/core';
import { TemplateGalleries } from 'src/app/services/gallery.interface';
import { work17Galleries } from './work17.galleries';

@Component({
  selector: 'app-work17',
  templateUrl: './work17.component.html',
  styleUrls: ['./work17.component.scss']
})
export class Work17Component {
    galls: TemplateGalleries = work17Galleries;
}
