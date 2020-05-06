import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdeaComponent } from './pages/idea/idea.component';
import { IslandComponent } from './pages/island/island.component';
import { DocumentaryComponent } from './pages/documentary/documentary.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoverComponent } from './pages/cover/cover.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ScWidgetComponent } from './components/sc-widget/sc-widget.component';
import { Show17Component } from './pages/show/show17/show17.component';
import { Show16Component } from './pages/show/show16/show16.component';
import { Work17Component } from './pages/workshops/work17/work17.component';
import { Work16Component } from './pages/workshops/work16/work16.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { FloatMenuComponent } from './components/float-menu/float-menu.component';
import { Show18Component } from './pages/show/show18/show18.component';
import { Work18Component } from './pages/workshops/work18/work18.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { OpenGalleryDirective } from './components/directives/open-gallery.directive';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeaComponent,
    IslandComponent,
    DocumentaryComponent,
    ContactComponent,
    CoverComponent,
    MenuComponent,
    LogoComponent,
    FooterComponent,
    AccordionComponent,
    ScWidgetComponent,
    Show17Component,
    Show16Component,
    Work17Component,
    Work16Component,
    TabsComponent,
    HeaderBarComponent,
    FloatMenuComponent,
    Show18Component,
    Work18Component,
    GalleryComponent,
    OpenGalleryDirective,
    SliderComponent,
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
