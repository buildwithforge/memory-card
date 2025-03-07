import Phaser from 'phaser';

import * as scenes from './scenes';

new Phaser.Game({
  title: 'Memory Card',
  width: 549,
  height: 480,
  backgroundColor: '#192a56',
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [scenes.Boot, scenes.Preload, scenes.Main],
  disableContextMenu: import.meta.env.PROD,
});
