﻿// STOP! DO NOT change these numbers because they need to be maintained for serialization
export const enum DefinitionType {
    File = 1,
    Import = 2,
    ReExport = 3,
    ImportPart = 4,
    ReExportPart = 5,
    Class = 100,
    ClassConstructor = 101,
    ClassConstructorParameter = 102,
    ClassMethod = 103,
    ClassMethodParameter = 104,
    ClassStaticMethod = 105,
    ClassStaticMethodParameter = 106,
    ClassProperty = 107,
    ClassStaticProperty = 108,
    Interface = 200,
    InterfaceMethod = 201,
    InterfaceMethodParameter = 202,
    InterfaceProperty = 203,
    Namespace = 300,
    Function = 400,
    FunctionParameter = 401,
    Variable = 500,
    Enum = 600,
    EnumMember = 601,
    CallSignature = 700,
    CallSignatureParameter = 701,
    Decorator = 800,
    TypeAlias = 900,
    TypeParameter = 1000,
    TypeProperty = 1100,
    Expression = 1200,
    IndexSignature = 1300
}
