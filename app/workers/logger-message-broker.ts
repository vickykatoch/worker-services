import { SocketMessageBrokerInterface } from "./socket-message-broker.interface";
import { WorkerMessageType, WorkerMessage } from "./index";

export class LoggerMessageBroker implements SocketMessageBrokerInterface {
    get messageType() : any {
        return WorkerMessageType;
    }
    onMessage(message: WorkerMessage): void {
        console.log(message.payload);
    }
}