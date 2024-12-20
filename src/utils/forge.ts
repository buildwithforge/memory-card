import { Buffer } from 'buffer';

const username = import.meta.env.VITE_FORGE_CLIENT_ID;
const password = import.meta.env.VITE_FORGE_CLIENT_SECRET;

const options = {
  method: 'GET',
  headers: {
    Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
  },
};

export function getItems() {
  return (
    fetch(
      'https://corsmirror.com/v1?url=https://forge-games.xyz/api/items',
      options,
    )
      .then((response) => response.json())
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err))
  );
}
