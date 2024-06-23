import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,FaceSnapComponent],
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