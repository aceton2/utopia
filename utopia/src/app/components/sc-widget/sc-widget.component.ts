import { Component, Input, ElementRef, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

const SC: any = window['SC'];
const scPlayerUrl = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/';

@Component({
  selector: 'app-sc-widget',
  templateUrl: './sc-widget.component.html',
  styleUrls: ['./sc-widget.component.scss']
})
export class ScWidgetComponent implements AfterViewInit, OnDestroy {

  @ViewChild('soundFrame', {static: false}) soundRef: ElementRef;
  @ViewChild('bar', {static: false}) bar: ElementRef;

  widget: any;  
  trackUrl: SafeUrl;
  showPlay = true;

  @Input() title: string;
  @Input() imageSrc: string;
  @Input() set trackId(id) {
    this.trackUrl = this.sanitizer.bypassSecurityTrustResourceUrl(scPlayerUrl + id);
  };

  constructor(private sanitizer: DomSanitizer) {}

  ngAfterViewInit() {
    this.widget = SC.Widget(this.soundRef.nativeElement);
    this.widget.bind(SC.Widget.Events.PLAY_PROGRESS, event => this.showProgress(event))
    this.widget.bind(SC.Widget.Events.PLAY, () => this.setPlay(false) )
    this.widget.bind(SC.Widget.Events.PAUSE, () => this.setPlay(true) )
  }

  ngOnDestroy() {
    this.widget.unbind(SC.Widget.Events.PLAY_PROGRESS);
  }

  toggle() {
    this.widget.isPaused(paused => paused ? this.play() : this.widget.pause() )
  }  

  setPlay(show: boolean) {
    this.showPlay = show;
  }

  play() {
    this.widget.seekTo(0);
    this.widget.play();
  }

  showProgress(event) {
    const width = (Math.round(100 * event.relativePosition * 100 ) / 100).toString() + '%';
    this.bar.nativeElement.style.setProperty('width', width);
  }
}
