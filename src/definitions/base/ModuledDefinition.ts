﻿import {ExportableDefinitions} from "./../../definitions";
import {StructureFactory} from "./../../factories";
import {ClassStructure, EnumStructure, FunctionStructure, InterfaceStructure, NamespaceStructure, TypeAliasStructure, VariableStructure} from "./../../structures";
import {DefinitionUtils} from "./../../utils";
import {EnumDefinition} from "./../enum";
import {ClassDefinition} from "./../class";
import {FunctionDefinition} from "./../function";
import {InterfaceDefinition} from "./../interface";
import {NamespaceDefinition} from "./../namespace";
import {VariableDefinition} from "./../variable";
import {TypeAliasDefinition} from "./../general";

export abstract class ModuledDefinition {
    namespaces: NamespaceDefinition[] = [];
    classes: ClassDefinition[] = [];
    interfaces: InterfaceDefinition[] = [];
    enums: EnumDefinition[] = [];
    functions: FunctionDefinition[] = [];
    variables: VariableDefinition[] = [];
    typeAliases: TypeAliasDefinition[] = [];

    addClasses(...classes: ClassStructure[]) {
        const factory = new StructureFactory();
        this.classes.push(...classes.map(c => factory.getClass(c)));
        return this;
    }

    addEnums(...enums: EnumStructure[]) {
        const factory = new StructureFactory();
        this.enums.push(...enums.map(e => factory.getEnum(e)));
        return this;
    }

    addFunctions(...functions: FunctionStructure[]) {
        const factory = new StructureFactory();
        this.functions.push(...functions.map(f => factory.getFunction(f)));
        return this;
    }

    addInterfaces(...interfaces: InterfaceStructure[]) {
        const factory = new StructureFactory();
        this.interfaces.push(...interfaces.map(i => factory.getInterface(i)));
        return this;
    }

    addNamespaces(...namespaces: NamespaceStructure[]) {
        const factory = new StructureFactory();
        this.namespaces.push(...namespaces.map(n => factory.getNamespace(n)));
        return this;
    }

    addTypeAliases(...typeAliases: TypeAliasStructure[]) {
        const factory = new StructureFactory();
        this.typeAliases.push(...typeAliases.map(t => factory.getTypeAlias(t)));
        return this;
    }

    addVariables(...variables: VariableStructure[]) {
        const factory = new StructureFactory();
        this.variables.push(...variables.map(v => factory.getVariable(v)));
        return this;
    }

    getClass(nameOrSearchFunction: string | ((classDef: ClassDefinition) => boolean)) {
        return DefinitionUtils.getDefinitionFromListByStrOrFunc(this.classes, nameOrSearchFunction);
    }

    getEnum(nameOrSearchFunction: string | ((enumDef: EnumDefinition) => boolean)) {
        return DefinitionUtils.getDefinitionFromListByStrOrFunc(this.enums, nameOrSearchFunction);
    }

    getFunction(nameOrSearchFunction: string | ((functionDef: FunctionDefinition) => boolean)) {
        return DefinitionUtils.getDefinitionFromListByStrOrFunc(this.functions, nameOrSearchFunction);
    }

    getInterface(nameOrSearchFunction: string | ((interfaceDef: InterfaceDefinition) => boolean)) {
        return DefinitionUtils.getDefinitionFromListByStrOrFunc(this.interfaces, nameOrSearchFunction);
    }

    getNamespace(nameOrSearchFunction: string | ((namespaceDef: NamespaceDefinition) => boolean)) {
        return DefinitionUtils.getDefinitionFromListByStrOrFunc(this.namespaces, nameOrSearchFunction);
    }

    getTypeAlias(nameOrSearchFunction: string | ((typeAliasDef: TypeAliasDefinition) => boolean)) {
        return DefinitionUtils.getDefinitionFromListByStrOrFunc(this.typeAliases, nameOrSearchFunction);
    }

    getVariable(nameOrSearchFunction: string | ((variableDef: VariableDefinition) => boolean)) {
        return DefinitionUtils.getDefinitionFromListByStrOrFunc(this.variables, nameOrSearchFunction);
    }

    getExports() {
        const exports: ExportableDefinitions[] = [];
        const addExportedToExports = (e: ExportableDefinitions) => {
            if (e.isExported && !e.isDefaultExportOfFile) {
                exports.push(e);
            }
        };

        this.namespaces.forEach(addExportedToExports);
        this.classes.forEach(addExportedToExports);
        this.interfaces.forEach(addExportedToExports);
        this.enums.forEach(addExportedToExports);
        this.functions.forEach(addExportedToExports);
        this.variables.forEach(addExportedToExports);
        this.typeAliases.forEach(addExportedToExports);

        return exports;
    }
}
