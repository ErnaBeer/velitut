import * as assert from "assert";
import {FunctionTestStructure, ParameterTestStructures} from "./../../testStructures";
import {BaseFunctionDefinitions, ParameterDefinitions} from "./../../../../definitions";
import {runCallSignatureDefinitionTests} from "./../general";
import {runBaseDefinitionTests} from "./runBaseDefinitionTests";
import {runNamedDefinitionTests} from "./runNamedDefinitionTests";
import {runReturnTypedDefinitionTests} from "./runReturnTypedDefinitionTests";
import {runParameteredDefinitionTests} from "./runParameteredDefinitionTests";

export function runBaseFunctionDefinitionTests(
    runParameterDefinitionTests: (definition: ParameterDefinitions, structure: ParameterTestStructures) => void,
    definition: BaseFunctionDefinitions,
    structure: FunctionTestStructure
) {
    structure.overloadSignatures = structure.overloadSignatures || [];

    runBaseDefinitionTests(definition, structure);
    runNamedDefinitionTests(definition, structure);
    runReturnTypedDefinitionTests(definition, structure);
    runParameteredDefinitionTests(runParameterDefinitionTests, definition, structure);

    it("should have the same number of overload signatures", () => {
        assert.equal(definition.overloadSignatures.length, structure.overloadSignatures.length);
    });

    structure.overloadSignatures.forEach((overloadSignatureStructure, i) => {
        runCallSignatureDefinitionTests(definition.overloadSignatures[i], overloadSignatureStructure);
    });
}
