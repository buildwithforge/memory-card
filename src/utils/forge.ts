import Forge from '@forgegames/sdk';

const forge = new Forge({
  username: import.meta.env.VITE_FORGE_CLIENT_ID,
  password: import.meta.env.VITE_FORGE_CLIENT_SECRET,
});

export function getItems() {
  return forge.items.list();
}
