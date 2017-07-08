import { WorkerMessage, WorkerMessageType } from "./worker-message";
import { SocketsController } from "../socket-controllers/socket-controller";
import { SocketMessageBrokerInterface } from "./socket-message-broker.interface";

declare let WebWorkerContext: Worker;

export class SocketMessageBroker implements SocketMessageBrokerInterface {

    private readonly socketsController : SocketsController = new SocketsController();
    get messageType() : any {
        return WorkerMessageType;
    }
    onMessage(message: WorkerMessage) : void {
        switch(message.type.toUpperCase()) {
            case WorkerMessageType.SOCKET_CONNECT:
                this.socketsController.connect(message.payload);
                break;
            case WorkerMessageType.SOCKET_SUBSCRIBE:
                this.socketsController.subscribe(message.payload);
                break;
            case WorkerMessageType.SOCKET_PUBLISH:
                this.socketsController.publish(message.payload);
                break;
            case WorkerMessageType.SOCKET_TOPIC_UNSUBSCRIBE:
                this.socketsController.unsubscribe(message.payload);
                break;
            case WorkerMessageType.SOCKET_PUBLISH:
                this.socketsController.publish(message.payload);
                break;
            case WorkerMessageType.SOCKET_DISCONNECT:
                this.socketsController.disconnect(message.payload);
                break;
            case WorkerMessageType.SOCKET_DISCONNECT_ALL:
                this.socketsController.dispose();
                break;
        }
    }
}