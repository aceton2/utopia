import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

const backgroundSrcs = [
  "assets/imgs/cover/Startseite_1.jpg",
  "assets/imgs/cover/Startseite_2.jpg",
  "assets/imgs/cover/Startseite_3.jpg",
  "assets/imgs/cover/Startseite_4.jpg",
  "assets/imgs/cover/Startseite_5.jpg",
  "assets/imgs/cover/Startseite_6.jpg",
  "assets/imgs/cover/Startseite_7.jpg",
  "assets/imgs/cover/Startseite_8.jpg"
];

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {

  label: string = '';

  @ViewChild('background', {static: true}) bgDiv: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const imgSrc = backgroundSrcs[Math.floor(Math.random() * 8)];
    this.renderer.setStyle(this.bgDiv.nativeElement, 'background-image', `url("${imgSrc}")`);
  }

  updateLabel(label: string) {
    this.label = label;
  }
}
