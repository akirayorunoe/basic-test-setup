self.addEventListener('message', function (e) {
    var data = e.data;
    setTimeout(function () {
        self.postMessage(data);
    }, 5000);
});

/** Shared worker */
// let count = 0;
// let ports = []

// self.addEventListener('connect', function (e) {
//     console.log('connected', e)
//     var port = e.ports[0];
//     ports.push(port);
//     port.onmessage = function (e) {
//         if (e.data.type === 'increase') {
//             //port.postMessage(++count); //send only to the current tab
//             count++;
//             ports.forEach(function (p) {
//                 p.postMessage(count);
//             });
//         }
//     }
// });