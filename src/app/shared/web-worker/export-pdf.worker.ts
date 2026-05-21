/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `worker response to Listener ${data}`;
  postMessage(response);
});
