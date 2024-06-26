﻿import * as assert from "assert";
import {VariableDefinition} from "./../../../definitions";
import {getInfoFromString} from "./../../../main";

const code = `
import myDefaultImport from "./test";
import * as myStarImport from "./test";
import {myFirstNamedImport, mySecondNamedImport} from "./test";
import myDefaultImport2, {myAlias} from "./test";
import myDefaultImport3, * as myStarImport2 from "./test";
import "./test";

export * from "./test";
export {myExport1, myAlias} from "./test";

var myVariable: string;
namespace MyNamespace {
}
module MyModule {
}
interface MyInterface {
}
class MyClass {
}
enum MyEnum {
}
function myFunction() {
}

export default MyEnum;
`;

describe("FileDefinition", () => {
    const file = getInfoFromString(code);

    // give the import and re-export more information for testing writing "defName as alias"
    const varDef = new VariableDefinition();
    varDef.name = "MyActualName";
    file.getImport(i => i.defaultImport != null && i.defaultImport.importName === "myDefaultImport2").namedImports[0].definitions.push(varDef);
    file.getReExport(e => e.namedExports.length > 0).namedExports[1].definitions.push(varDef);

    describe("write()", () => {
        it("should contain the file written out", () => {
            const expected =
`import myDefaultImport from "./test";
import * as myStarImport from "./test";
import {myFirstNamedImport, mySecondNamedImport} from "./test";
import myDefaultImport2, {MyActualName as myAlias} from "./test";
import myDefaultImport3, * as myStarImport2 from "./test";
import "./test";

export * from "./test";
export {myExport1, MyActualName as myAlias} from "./test";

var myVariable: string;

namespace MyNamespace {
}

module MyModule {
}

interface MyInterface {
}

class MyClass {
}

enum MyEnum {
}

function myFunction() {
}

export default MyEnum;
`;
            assert.equal(file.write(), expected);
        });
    });
});
