﻿import {ClassConstructorDefinition} from "./../definitions";
import {WriteFlags} from "./../WriteFlags";
import {ParametersWriter} from "./ParametersWriter";
import {BaseDefinitionWriter} from "./BaseDefinitionWriter";
import {FunctionBodyWriter} from "./FunctionBodyWriter";

export class ClassConstructorWriter extends BaseDefinitionWriter<ClassConstructorDefinition> {
    private parametersWriter = new ParametersWriter(this.writer);
    private functionBodyWriter = new FunctionBodyWriter(this.writer);

    protected writeDefault(def: ClassConstructorDefinition, flags: WriteFlags) {
        this.writer.write("constructor");
        this.parametersWriter.write(def.parameters, flags);
        this.functionBodyWriter.write(def, flags);
    }
}
