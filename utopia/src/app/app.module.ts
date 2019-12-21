import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdeaComponent } from './pages/idea/idea.component';
import { IslandComponent } from './pages/island/island.component';
import { WorkshopsComponent } from './pages/workshops/workshops.component';
import { ShowComponent } from './pages/show/show.component';
import { DocumentaryComponent } from './pages/documentary/documentary.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoverComponent } from './pages/cover/cover.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeaComponent,
    IslandComponent,
    WorkshopsComponent,
    ShowComponent,
    DocumentaryComponent,
    ContactComponent,
    CoverComponent,
    MenuComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
