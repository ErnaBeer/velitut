﻿import {StructureFactory} from "./../../../factories";
import {IndexSignatureStructure} from "./../../../structures";
import {IndexSignatureBinder} from "./../../base";
import {StructureBaseDefinitionBinder, StructureReturnTypedBinder} from "./../base";

export class StructureIndexSignatureBinder extends IndexSignatureBinder {
    constructor(private factory: StructureFactory, private structure: IndexSignatureStructure) {
        super(
            new StructureBaseDefinitionBinder(structure),
            new StructureReturnTypedBinder(factory, structure)
        );
    }

    getKeyName() {
        return this.structure.keyName || "";
    }

    getKeyTypeExpression() {
        // default to string for the key type
        return this.factory.getTypeExpressionFromText(this.structure.keyType || "string");
    }
}
