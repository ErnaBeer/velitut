﻿import {ClassPropertyDefinition} from "./../../../definitions";
import {IBaseBinder} from "./../IBaseBinder";
import {BaseClassPropertyBinder} from "./base";

export abstract class ClassPropertyBinder implements IBaseBinder {
    constructor(private baseClassPropertyBinder: BaseClassPropertyBinder) {
    }

    abstract getIsAccessor(): boolean;
    abstract getIsReadonly(): boolean;
    abstract getIsConstructorParameter(): boolean;

    bind(def: ClassPropertyDefinition) {
        this.baseClassPropertyBinder.bind(def);
        def.isAccessor = this.getIsAccessor();
        def.isReadonly = this.getIsReadonly();
        def.isConstructorParameter = this.getIsConstructorParameter();
    }
}
