import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdeaComponent } from './pages/idea/idea.component';
import { IslandComponent } from './pages/island/island.component';
import { ShowComponent } from './pages/show/show.component';
import { DocumentaryComponent } from './pages/documentary/documentary.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoverComponent } from './pages/cover/cover.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ScWidgetComponent } from './components/sc-widget/sc-widget.component';
import { Y2016Component } from './pages/workshops/y2016/y2016.component';
import { Y2017Component } from './pages/workshops/y2017/y2017.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeaComponent,
    IslandComponent,
    ShowComponent,
    DocumentaryComponent,
    ContactComponent,
    CoverComponent,
    MenuComponent,
    LogoComponent,
    FooterComponent,
    AccordionComponent,
    Y2016Component,
    Y2017Component,
    ScWidgetComponent
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
