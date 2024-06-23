import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';
@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Joli Teddy',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      "Mon meilleur ami d'enfance",
      new Date(),
      148
    ),
    new FaceSnap(
      'Rémy',
      'https://cdn.pixabay.com/photo/2018/02/16/14/38/portrait-3157821_1280.jpg',
      'un développeur curieux',
      new Date(),
      199
    ),
    new FaceSnap(
      'Votre prochain succès',
      'https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_1280.jpg',
      'Rien de mieux que de réussir',
      new Date(),
      381
    ),
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  snapById(id: string, snapType: SnapType): void {
    let foundFaceSnap = this.faceSnaps.find((faceSnap) => faceSnap.id === id);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found !');
    }
    foundFaceSnap.snap(snapType);
  }
}
