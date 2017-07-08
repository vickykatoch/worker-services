importScripts('../node_modules/systemjs/dist/system.js');

SystemJS.config({
    baseURL : '.',
    paths: {
        app: '.'
    },
    packages : {
        app : {
            defaultExtension: 'js'
        }
    }
    });
const WebWorkerContext = this;
let messageBroker = null;
WebWorkerContext.addEventListener('message', function(e) {
    if(e.data && e.data.type) {
        if(e.data.type === 'INIT_WORKER') {
            SystemJS.import('./workers/socket-message-broker.js').then(function(value) {
                messageBroker = new value.SocketMessageBroker();
                WebWorkerContext.postMessage({type: messageBroker.messageType.WORKER_INITIALIZED});
                console.log('Socket worker with all dependencies loaded successfully');
            }).catch(function(error) {
                console.error('Error occurred while import socket-broker script file', error);
                // Treminate the current worker as it's of no use if functional part can't be loaded.
                WebWorkerContext.terminate();
            });
        } else {
            messageBroker.onMessage(e.data);
        }
    }
    
});