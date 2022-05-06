import React from 'react';
import { startServiceWorker } from '../sw/start_sw';

export const App = () => {
  const handleClick = () => {
    console.log('click');
    navigator.serviceWorker.controller?.postMessage({
      type: 'app:click',
      data: 'hello',
    });
  };

  navigator.serviceWorker.onmessage = (event) => console.log('app:', event);

  return (
    <div>
      <h1>App</h1>
      <button onClick={handleClick}>Send</button>
    </div>
  );
};

startServiceWorker();
