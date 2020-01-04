import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

const backgroundSrcs = [
  "assets/imgs/cover/transcultural-art-lab-juist-design-your-utopia-01.jpg",
  "assets/imgs/cover/transcultural-art-lab-juist-design-your-utopia-02.jpg",
  "assets/imgs/cover/transcultural-art-lab-juist-design-your-utopia-03.jpg",
  "assets/imgs/cover/transcultural-art-lab-juist-design-your-utopia-04.jpg"
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
    const imgSrc = backgroundSrcs[Math.floor(Math.random() * 4)];
    this.renderer.setStyle(this.bgDiv.nativeElement, 'background-image', `url("${imgSrc}")`);
  }

  updateLabel(label: string) {
    this.label = label;
  }
}
