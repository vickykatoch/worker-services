import { SocketConnectionOptions, SocketType } from "../socket-core/socket-options";
import { Guard } from "../utils/guard";
import { SocketInterface } from "../socket-core/socket.interface";
import { AmpsSocketServiceProvider } from "../socket-providers/amps/amps-socket.service.provider";
import { SocketIOServiceProvider } from "../socket-providers/socketio/socket-io.service.provider";

export class SocketFactory {
    static createSocket(options: SocketConnectionOptions) : SocketInterface {
        SocketFactory.validateSocketParams(options);
        let socket : SocketInterface;
        switch(options.type) {
            case SocketType.AMPS:
                socket = new AmpsSocketServiceProvider(options);
                break;
            case SocketType.SOCKET_IO :
                socket = new SocketIOServiceProvider(options);
        }
        return socket;
    }

    private static validateSocketParams(options: SocketConnectionOptions) : void {
        // Guard.throwIfTrue()   
    }
}