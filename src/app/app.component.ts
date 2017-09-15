import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Image } from './image.model';
import { ImagesService } from './images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  imagesList: Image[] = [];
  image: Image;

  constructor(private ImagesService: ImagesService) { }

  getImagesList() {
    this.ImagesService.getImagesList()
    .subscribe(Image => this.imagesList = Image);
  }

  getImageInfo(id: number) {
    this.ImagesService.getImage(id)
    .subscribe(image => this.image = image);
  }

  ngOnInit() {
    this.getImagesList();
  }
}
