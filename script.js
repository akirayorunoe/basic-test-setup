/** Broadcast channel */
// const bc = new BroadcastChannel('test');
// let count = 0;
// document.querySelector('#btn').addEventListener('click', function () {
//     bc.postMessage(++count);
//     console.log(count)
// });
// bc.onmessage = function (e) {
//     count = e.data; //should update the count or value it will seperate for each tab
//     const p = document.createElement('p')
//     p.innerHTML = e.data;
//     document.body.appendChild(p);
// }

/** Worker */
const worker = new Worker('./worker.js');

worker.postMessage('Hello World');
worker.onmessage = function (e) {
    alert(e.data);
}

/** Shared worker */
// const sharedWorker = new SharedWorker('./worker.js');
// sharedWorker.port.start();

// document.querySelector('#btn').addEventListener('click', function () {
//     sharedWorker.port.postMessage({ type: 'increase' });
// });
// sharedWorker.port.onmessage = function (e) {
//     const p = document.createElement('p')
//     p.innerHTML = e.data;
//     document.body.appendChild(p);
// }

