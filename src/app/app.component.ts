import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements OnInit {
  newFaceSnap!: FaceSnap;

  ngOnInit(): void {
    this.newFaceSnap = new FaceSnap(
      'Joli Teddy',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      "Mon meilleur ami d'enfance",
      new Date(),
      148
    );
  }
}