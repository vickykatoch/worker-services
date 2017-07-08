import { ConnectionStatusCallback, SocketSubscribeOptions, SocketPublishOptions } from "./socket-options";

export interface SocketInterface {
    connect() : Promise<SocketInterface>;
    subscribe(options: SocketSubscribeOptions) : void;
    unsubscribe(options: SocketSubscribeOptions) : void;
    publish(options: SocketPublishOptions) : void;
}