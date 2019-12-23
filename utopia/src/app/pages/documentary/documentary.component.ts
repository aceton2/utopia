import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Player from '@vimeo/player';

@Component({
  selector: 'app-documentary',
  templateUrl: './documentary.component.html',
  styleUrls: ['./documentary.component.scss']
})
export class DocumentaryComponent implements OnInit {

  @ViewChild('vimeo', {static: true}) vimeoRef: ElementRef;

  ngOnInit() {
    new Player(this.vimeoRef.nativeElement, {id: "262172747"});
  }
}
