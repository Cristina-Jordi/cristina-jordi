import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // title = 'cristinajordi.ch';
  images = ['berge.jpg', 'iglu.jpg', 'wald.jpg'];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(()=>{
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;  // % Restoperator: 3 Bilder : 3 = 0 ist der erste Index vom Bild also zählt er immer wieder von vorne 0,1,2...0,1,2 usw.
      this.showImage = false;

      setTimeout(()=>{
        this.showImage = true;
      }, 10);
    }, 8000);
  }
}
