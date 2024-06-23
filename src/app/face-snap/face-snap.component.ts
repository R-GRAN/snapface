import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle, NgClass, UpperCasePipe, DatePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  textButton!: string;
  alreadySnapped!: boolean;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.textButton = 'Oh Snap That !';
    this.alreadySnapped = false;
  }
  onSnap(): void {
    !this.alreadySnapped ? this.snap() : this.unSnap();
  }

  snap(): void {
    this.faceSnapsService.snapById(this.faceSnap.id,"snap");
    this.textButton = ' Oups, UnSnap ! ';
    this.alreadySnapped = true;
  }
  unSnap(): void {
    this.faceSnapsService.snapById(this.faceSnap.id,"unsnap");
    this.textButton = 'Oh Snap That ! ';
    this.alreadySnapped = false;
  }
}
