import Phaser from 'phaser';

import { Audio, Image, Scene } from '../constants';

export class Preload extends Phaser.Scene {
  private assets: { name: string; thumbnail: string }[] = [];

  constructor() {
    super({ key: Scene.Preload });
  }

  init(assets: typeof this.assets) {
    this.assets = assets;
  }

  preload() {
    this.assets.forEach(({ name, thumbnail }) => {
      this.load.image(name, thumbnail);
    });

    this.load.setPath('assets/');

    this.load.audio(Audio.CardFlip, 'audio/card-flip.mp3');
    this.load.audio(Audio.CardMatch, 'audio/card-match.mp3');
    this.load.audio(Audio.CardMismatch, 'audio/card-mismatch.mp3');
    this.load.audio(Audio.CardSlide, 'audio/card-slide.mp3');
    this.load.audio(Audio.ThemeSong, 'audio/fat-caps-audionatix.mp3');
    this.load.audio(Audio.Victory, 'audio/victory.mp3');
    this.load.audio(Audio.Whoosh, 'audio/whoosh.mp3');

    this.load.image(Image.Background, 'background.png');
    this.load.image(Image.CardBack, 'cards/card-back.png');
    this.load.image(Image.Heart, 'ui/heart.png');
    this.load.image(Image.VolumeIcon, 'ui/volume-icon.png');
    this.load.image(Image.VolumeIconOff, 'ui/volume-icon_off.png');
  }

  create() {
    this.scene.start(Scene.Main);
  }
}
