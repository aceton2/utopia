import { Component } from '@angular/core';
import { TemplateGalleries } from 'src/app/services/gallery.interface';
import { networkGalleries } from './network.galleries';

@Component({
  selector: 'app-documentary',
  templateUrl: './documentary.component.html',
  styleUrls: ['./documentary.component.scss']
})
export class DocumentaryComponent {
    galls: TemplateGalleries = networkGalleries;
}
