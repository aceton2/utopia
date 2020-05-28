import { Component } from '@angular/core';
import { TemplateGalleries } from 'src/app/services/gallery.interface';
import { islandGalleries } from './island.galleries';

@Component({
  selector: 'app-island',
  templateUrl: './island.component.html',
  styleUrls: ['./island.component.scss']
})
export class IslandComponent {
    galls: TemplateGalleries = islandGalleries;
}
