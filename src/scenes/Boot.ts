import Phaser from 'phaser';

import { Scene } from '../constants';
import { getItems } from '../utils';

export class Boot extends Phaser.Scene {
  private items = getItems();

  constructor() {
    super({ key: Scene.Boot });
  }

  create() {
    this.items.then((items) => {
      this.scene.start(Scene.Preload, items);
    });
  }
}
