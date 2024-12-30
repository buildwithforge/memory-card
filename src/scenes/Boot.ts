import Phaser from 'phaser';

import { Audio, Image, Scene } from '../constants';
import { getItems } from '../utils';

function asyncLoader(loaderPlugin: Phaser.Loader.LoaderPlugin) {
  return new Promise((resolve, reject) => {
    loaderPlugin.on('filecomplete', resolve).on('loaderror', reject);
    loaderPlugin.start();
  });
}

export class Boot extends Phaser.Scene {
  private asyncImages: Promise<unknown>[] = [];

  constructor() {
    super({ key: Scene.Boot });
  }

  preload() {
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

    (async () => {
      const items = await getItems();
      this.asyncImages = items.map(({ name, thumbnail }) =>
        asyncLoader(this.load.image(name, thumbnail!)),
      );
    })();
  }

  create() {
    (async () => {
      await Promise.all(this.asyncImages);
      this.scene.start(Scene.Main);
    })();
  }
}
