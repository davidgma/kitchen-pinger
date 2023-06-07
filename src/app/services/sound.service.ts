import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private audio = new Audio('../../../assets/love-boat.mp3');
  constructor() { }

  playAlarm() {
    this.audio.play();
  }

  cancelAlarm() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
}
