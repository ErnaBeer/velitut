﻿import {TypeAliasTestStructure} from "./../../testStructures";
import {TypeAliasDefinition} from "./../../../../definitions";
import {runBaseDefinitionTests, runNamedDefinitionTests, runExportableDefinitionTests, runTypeExpressionedDefinitionTests,
        runTypeParameteredDefinitionTests, runAmbientableDefinitionTests} from "./../base";
import {ensureNotNull} from "./../../ensureNotNull";

export function runTypeAliasDefinitionTests(definition: TypeAliasDefinition, structure: TypeAliasTestStructure) {
    describe(`type expression ${structure.name}`, () => {
        ensureNotNull(definition, () => {
            structure.isAmbient = structure.isAmbient == null ? true : structure.isAmbient;
            if (structure.typeExpression == null) {
                // default always to expect a string (for simplicity)
                structure.typeExpression = { text: "string" };
            }

            runBaseDefinitionTests(definition, structure);
            runNamedDefinitionTests(definition, structure);
            runExportableDefinitionTests(definition, structure);
            runTypeExpressionedDefinitionTests(definition, structure);
            runAmbientableDefinitionTests(definition, structure);
            runTypeParameteredDefinitionTests(definition, structure);
        });
    });
}
