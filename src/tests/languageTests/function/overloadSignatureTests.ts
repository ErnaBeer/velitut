﻿import {getInfoFromString} from "./../../../main";
import {runFileDefinitionTests} from "./../../testHelpers";

describe("function overload signature tests", () => {
    const code = `
function myFunction<T>(num: number, t: T): number;
function myFunction<T>(str: string, t: T): string;
function myFunction<T>(myStringOrNumber: string | number, t: T): string | number {
    return "str";
}
`;

    const def = getInfoFromString(code);

    runFileDefinitionTests(def, {
        functions: [{
            name: "myFunction",
            overloadSignatures: [{
                parameters: [{
                    name: "num",
                    typeExpression: { text: "number" }
                }, {
                    name: "t",
                    typeExpression: { text: "T" }
                }],
                typeParameters: [{
                    name: "T"
                }],
                returnTypeExpression: { text: "number" },
                minArgumentCount: 2
            }, {
                parameters: [{
                    name: "str",
                    typeExpression: { text: "string" }
                }, {
                    name: "t",
                    typeExpression: { text: "T" }
                }],
                typeParameters: [{
                    name: "T"
                }],
                returnTypeExpression: { text: "string" },
                minArgumentCount: 2
            }],
            parameters: [{
                name: "myStringOrNumber",
                typeExpression: { text: "string | number" }
            }, {
                name: "t",
                typeExpression: { text: "T" }
            }],
            typeParameters: [{
                name: "T"
            }],
            returnTypeExpression: { text: "string | number" }
        }]
    });
});
