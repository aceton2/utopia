import { Component } from '@angular/core';
import { TemplateGalleries } from 'src/app/services/gallery.interface';
import { ideaGalleries } from './idea.galleries';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent {
    galls: TemplateGalleries = ideaGalleries;
}
