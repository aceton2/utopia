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
  { path: 'cover', component: CoverComponent, data: {animation: 'Page1'} },
  { path: 'contact', component: ContactComponent, data: {animation: 'Page2'}},
  { path: 'documentary', component: DocumentaryComponent, data: {animation: 'Page3'}},
  { path: 'idea', component: IdeaComponent, data: {animation: 'Page4'} },
  { path: 'island', component: IslandComponent, data: {animation: 'Page5'} },
  { path: 'show', component: ShowComponent, data: {animation: 'Page6'} },
  { path: 'workshops', component: WorkshopsComponent, data: {animation: 'Page7'} },
  { path: '**', redirectTo: 'cover'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
