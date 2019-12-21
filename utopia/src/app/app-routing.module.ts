import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './pages/contact/contact.component';
import { ShowComponent } from './pages/show/show.component';
import { IslandComponent } from './pages/island/island.component';
import { IdeaComponent } from './pages/idea/idea.component';
import { CoverComponent } from './pages/cover/cover.component';
import { DocumentaryComponent } from './pages/documentary/documentary.component';
import { WorkshopsComponent } from './pages/workshops/workshops.component';


const routes: Routes = [
  { path: 'cover', component: CoverComponent, data: {animation: 'HomePage'} },
  { path: 'contact', component: ContactComponent, data: {animation: 'AboutPage'} },
  { path: 'documentary', component: DocumentaryComponent, data: {animation: 'FilterPage'} },
  { path: 'idea', component: IdeaComponent },
  { path: 'island', component: IslandComponent },
  { path: 'show', component: ShowComponent },
  { path: 'workshops', component: WorkshopsComponent },
  { path: '**', redirectTo: 'cover'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
