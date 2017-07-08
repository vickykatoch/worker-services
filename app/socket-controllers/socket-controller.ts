import { SocketConnectionOptions, SocketSubscribeOptions, SocketPublishOptions } from "../socket-core/socket-options";
import { SocketFactory } from "./socket-factory";

export class SocketsController {
    private socketConnections : {[key: string] : SocketConnectionOptions} = {};

    /**
     * Connects to socket
     * @param options : 
     */
    connect(options: SocketConnectionOptions | SocketConnectionOptions[]) {
        try {
            if(Array.isArray(options)) {

            } else {
                const socket = SocketFactory.createSocket(options);
                // socket.connect().then(x=> x.subscribe(options.topic));
            }
        } catch(err) {
            console.error(err);
        }
    }
    
    /**
     * Subscribe to one or multiple topic(s)
     * @param options 
     */
    subscribe(options: SocketSubscribeOptions | SocketSubscribeOptions[]) {
        try {
            

        } catch(error) {

        }
    }
    unsubscribe(options: SocketSubscribeOptions | SocketSubscribeOptions[]) : void {
        try {
            

        } catch(error) {

        }
    }
    /**
     * Publishes message on a topic
     * @param options 
     */
    publish(options: SocketPublishOptions) {
        
    }
    /**
     * Disconnects a socket
     * @param options 
     */
    disconnect(options: SocketConnectionOptions | SocketConnectionOptions[]) : void {
    }
    /**
     * Disposes socket object and disconnect all connections
     */
    dispose() : void {

    }
}