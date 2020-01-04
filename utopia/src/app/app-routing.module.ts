import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './pages/contact/contact.component';
import { IslandComponent } from './pages/island/island.component';
import { IdeaComponent } from './pages/idea/idea.component';
import { CoverComponent } from './pages/cover/cover.component';
import { DocumentaryComponent } from './pages/documentary/documentary.component';
import { Show17Component } from './pages/show/show17/show17.component';
import { Show16Component } from './pages/show/show16/show16.component';
import { Work16Component } from './pages/workshops/work16/work16.component';
import { Work17Component } from './pages/workshops/work17/work17.component';


const routes: Routes = [
  { path: '', component: CoverComponent, data: {animation: 'cover'} },
  { path: 'contact', component: ContactComponent, data: {animation: 'Page2'}},
  { path: 'documentary', component: DocumentaryComponent, data: {animation: 'Page3'}},
  { path: 'idea', component: IdeaComponent, data: {animation: 'Page4'} },
  { path: 'island', component: IslandComponent, data: {animation: 'Page5'} },
  { path: 'show', redirectTo: 'show/2017', data: {animation: 'Page10'} },
  { path: 'show/2017', component: Show17Component, data: {animation: 'Page6'} },
  { path: 'show/2016', component: Show16Component, data: {animation: 'Page11'} },
  { path: 'workshops', redirectTo: 'workshops/2017', data: {animation: 'Page7'} },
  { path: 'workshops/2017', component: Work17Component, data: {animation: 'Page9'} },
  { path: 'workshops/2016', component: Work16Component, data: {animation: 'Page8'} },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
