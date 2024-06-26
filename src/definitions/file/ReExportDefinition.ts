﻿import CodeBlockWriter from "code-block-writer";
import {ReExportWriter} from "./../../writers";
import {WriteFlags} from "./../../WriteFlags";
import {ExportableDefinitions} from "./../../definitions";
import {BaseDefinition, DefinitionType} from "./../base";
import {ReExportPartDefinition} from "./ReExportPartDefinition";

export class ReExportDefinition extends BaseDefinition {
    fileName: string;
    moduleSpecifier: string;
    starExports: ReExportPartDefinition[] = [];
    namedExports: ReExportPartDefinition[] = [];

    constructor() {
        super(DefinitionType.ReExport);
    }

    getExports() {
        const exports: ExportableDefinitions[] = [];
        const handleDefinition = (definition: ExportableDefinitions) => exports.push(definition);

        this.starExports.forEach(e => e.definitions.forEach(handleDefinition));
        this.namedExports.forEach(e => e.definitions.forEach(handleDefinition));

        return exports;
    }

    write() {
        const writer = new CodeBlockWriter();
        const exportWriter = new ReExportWriter(writer);
        exportWriter.write(this, WriteFlags.Default);
        return writer.toString();
    }
}
