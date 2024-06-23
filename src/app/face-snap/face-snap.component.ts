import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  textButton!: string;
  alreadySnapped!: boolean;
  ngOnInit(): void {
    this.textButton = 'Oh Snap That !';
    this.alreadySnapped = false;
  }
  onSnap(): void {
    !this.alreadySnapped ? this.snap() : this.unSnap();
  }

  snap(): void {
    this.faceSnap.addSnap();
    this.textButton = ' Oups, UnSnap ! ';
    this.alreadySnapped = true;
  }
  unSnap(): void {
    this.faceSnap.removeSnap();
    this.textButton = 'Oh Snap That ! ';
    this.alreadySnapped = false;
  }
}
