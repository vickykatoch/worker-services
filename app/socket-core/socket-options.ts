export const SocketType = Object.freeze({
   AMPS : 0 ,
   SOCKET_IO : 1
});

export interface SocketConnectionOptions {
    refId : string;
    type : number,
    url : string;    
}
export interface SocketSubscribeOptions {
    socketRefId: string;
    topic : string;
    processFunc : string;
}
export interface SocketPublishOptions {
    socketRefId             : string;
    topic                   : string;
    payload                 : string;
}

export type ConnectionStatusCallback =  (isSuccess: boolean, error?: any) => void;
export type DataReceivedCallback =  (payload: any, error?: any) => void;