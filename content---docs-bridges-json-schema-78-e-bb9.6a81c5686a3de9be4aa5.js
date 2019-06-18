(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{51:function(n,e,r){"use strict";r.r(e),r.d(e,"frontMatter",function(){return i}),r.d(e,"rightToc",function(){return s}),r.d(e,"default",function(){return m});r(0);var t=r(105);function o(){return(o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n}).apply(this,arguments)}function a(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var i={id:"bridges-json-schema",title:"JSON Schema"},s=[],c={rightToc:s},l="wrapper";function m(n){var e=n.components,r=a(n,["components"]);return Object(t.b)(l,o({},c,r,{components:e,mdxType:"MDXLayout"}),Object(t.b)("pre",null,Object(t.b)("code",o({parentName:"pre"},{className:"language-js"}),"import Ajv from 'ajv';\nimport {JSONSchemaBridge} from 'uniforms-bridge-json-schema';\n\nconst schema = {\n  title: 'Person',\n  type: 'object',\n  properties: {\n    firstName: {\n      type: 'string'\n    },\n    lastName: {\n      type: 'string'\n    },\n    age: {\n      description: 'Age in years',\n      type: 'integer',\n      minimum: 0\n    }\n  },\n  required: ['firstName', 'lastName']\n};\n\nconst validator = new Ajv({allErrors: true, useDefaults: true}).compile(schema);\n\nconst schemaValidator = model => {\n  validator(model);\n\n  if (validator.errors && validator.errors.length) {\n    throw {details: validator.errors};\n  }\n};\n\nconst bridge = new JSONSchemaBridge(schema, schemaValidator);\n\n// Later...\n\n<ValidatedForm schema={bridge} />;\n")))}m.isMDXComponent=!0}}]);