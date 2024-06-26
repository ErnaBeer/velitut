﻿import {getInfoFromString} from "./../../../main";
import {runFileDefinitionTests} from "./../../testHelpers";

describe("interface extends interface tests", () => {
    const code = `
interface MyBaseInterface {
    name: string;
}

interface MyChildInterface extends MyBaseInterface {
    name2: string;
}

interface MyExtendingNonExistent extends MyNonExistentInterface {
}
`;

    const def = getInfoFromString(code);

    runFileDefinitionTests(def, {
        interfaces: [{
            name: "MyBaseInterface",
            properties: [{
                name: "name",
                typeExpression: { text: "string" }
            }]
        }, {
            name: "MyChildInterface",
            extendsTypeExpressions: [{
                text: "MyBaseInterface"
            }],
            properties: [{
                name: "name2",
                typeExpression: { text: "string" }
            }]
        }, {
            name: "MyExtendingNonExistent",
            extendsTypeExpressions: [{ text: "MyNonExistentInterface" }]
        }]
    });
});
