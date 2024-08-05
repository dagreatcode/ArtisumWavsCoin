import * as crypto from "crypto";

class Transaction {
    constructor(
        public amount: number,
        public payer: string,
        public payee: string
    ) {}
    // Method to call
    toString() {
        return JSON.stringify(this)
    }
}
// Container with multi transactions. Leger. 1mb of info. Like a Linked List without being manipulated. timestamp. Nunce Number only used once.
class Block {

    public numOnlyUsedOnce = Math.round(Math.random() * 999999999);

    constructor(
        public prevHash: string,
        public transaction: Transaction,
        public ts = Date.now()
    ) {}

    get hash() {
        const str = JSON.stringify(this);
        const hash = crypto.createHash('SHA256');
        hash.update(str).end();
        return hash.digest('hex')
    }
}

class Chain {

}

class Wallet {
    constructor() {

    }
}