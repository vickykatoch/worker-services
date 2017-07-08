import { SocketSubscribeOptions } from "../../socket-core/socket-options";

export interface AmpsSocketOptions extends SocketSubscribeOptions {
    options : string;
    command : string;
    filter: string;
}