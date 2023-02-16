import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  // title = 'cristinajordi.ch';
  images = ['berge.jpg', 'iglu.jpg', 'wald.jpg'];
  headlines = ['Bring Engineering to the next Level!', 'Born to Code!', 'Graduated to Code'];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  // Zählt Bild für Bild durch und blendet es immer wieder in 8s ein
  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;  // % Restoperator: 3 Bilder : 3 = 0 ist der erste Index vom Bild also zählt er immer wieder von vorne 0,1,2...0,1,2 usw.
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }
}


