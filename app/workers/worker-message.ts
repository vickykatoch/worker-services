export interface WorkerMessage {
    type: string;
    payload : any;
}

export const WorkerMessageType = Object.freeze({
    INIT_WORKER                             : 'INIT_WORKER',
    WORKER_INITIALIZED                      : 'WORKER_INITIALIZED',
    SOCKET_CONNECT                          : 'SOCKET_CONNECT',    
    SOCKET_SUBSCRIBE                        : 'SOCKET_SUBSCRIBE',
    SOCKET_PUBLISH                          : 'SOCKET_PUBLISH',
    SOCKET_UNSUBSCRIBE                      : 'SOCKET_UNSUBSCRIBE',
    SOCKET_TOPIC_UNSUBSCRIBE                : 'SOCKET_TOPIC_UNSUBSCRIBE',
    SOCKET_DISCONNECT                       : 'SOCKET_DISCONNECT',
    SOCKET_DISCONNECT_ALL                   : 'SOCKET_DISCONNECT',
    REGISTER_FUNCTION                       : 'REGISTER_FUNCTION'  
});