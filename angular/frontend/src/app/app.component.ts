import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Pokemon-Base';

  private playAudio() {
    const audio = new Audio();
    audio.src = 'assets/audio/pokemon.mp3';
    audio.load();
    audio.play();
  }

  ngOnInit() {
    // this.playAudio();
  }
}
