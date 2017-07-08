

export class Guard {
    static throwIfTrue(isTrue : boolean, message: string) : void {
        if(isTrue) {
            throw new Error(message);
        }
    }
}