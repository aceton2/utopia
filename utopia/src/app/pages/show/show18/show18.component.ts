import { Component } from '@angular/core';
import { TemplateGalleries } from 'src/app/services/gallery.interface';
import { show18Galleries } from './show18.galleries';

@Component({
  selector: 'app-show18',
  templateUrl: './show18.component.html',
  styleUrls: ['./show18.component.scss']
})
export class Show18Component {
    galls: TemplateGalleries = show18Galleries;
}
