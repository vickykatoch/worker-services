import { WorkerMessage, WorkerMessageType } from "./worker-message";

export interface SocketMessageBrokerInterface {
    messageType() : any;
    onMessage(message: WorkerMessage) : void;
}