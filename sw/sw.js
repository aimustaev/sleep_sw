/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */

const CACHE_NAME = 'PACKAGE_NAME-vPACKAGE_VERSION';
const STATIC_CACHE_NAME = `s-${CACHE_NAME}`;
const DYNAMIC_CACHE_NAME = `d-${CACHE_NAME}`;

this.addEventListener('install', (event) => {
  console.log('Установлен');
});

this.addEventListener('activate', (event) => {
  clients.claim();
  console.log('Активирован');
});

this.addEventListener('fetch', (event) => {
  console.log('Происходит запрос на сервер');
});

this.addEventListener('message', (event) => {
  console.log('message:', event);
  this.clients
    .matchAll({
      includeUncontrolled: true,
      type: 'window',
    })
    .then((clients) => {
      clients.forEach((client, index) => {
        client.postMessage({
          type: 'sw:reply',
          data: index,
        });
      });
    });
});
