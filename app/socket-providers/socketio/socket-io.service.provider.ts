import { SocketConnectionOptions, SocketSubscribeOptions, SocketPublishOptions } from "../../socket-core/socket-options";
import { SocketInterface } from "../../socket-core/socket.interface";

const MODULE_NAME = 'SocketIOServiceProvider';


export class SocketIOServiceProvider implements SocketInterface {
    private topics : {[key: string] : SocketSubscribeOptions } = {};

    constructor(private options: SocketConnectionOptions) {
    }

    connect(): Promise<SocketInterface> {
        return new Promise<SocketInterface>((resolve,reject)=> {
            // resolve(this);
        });
    }
    subscribe(options: SocketSubscribeOptions): void {
        if(!(options.topic in this.topics)) {
            console.log(`[${MODULE_NAME}]=>Subscribed to ${options.topic}`);
        }
    }
    unsubscribe(options: SocketSubscribeOptions): void {
        if(!(options.topic in this.topics)) {
            console.log(`[${MODULE_NAME}]=>Unsubscribed from ${options.topic}`);
            delete this.topics[options.topic];
        }
        
    }
    publish(options: SocketPublishOptions): void {
        console.log(`[${MODULE_NAME}]=>Published to ${options.topic}`);
    }
}