import { MessageApiClient } from "../lib/MessageApiClient";
import { expect } from "chai";
import "mocha";

describe("MessageApiClient", () => {

    it("should be able to initiate the api", () => {
        const yourProductToken = "abcd";
        const myMessageApi = new MessageApiClient(yourProductToken);
        expect(myMessageApi).to.be.an.instanceof(MessageApiClient);
    });

});