# @jacobhumston/lib

Simple utility package created by Jacob Humston.

## Install

```
npm i @jacobhumston/lib
```

## Usage

```js
// CommonJs
const lib = await import('@jacobhumston/lib');

// ESM
import * as lib from '@jacobhumston/lib';

// Or if you are on the web using a CDN...
// Note: Change the version "latest" to the version you want to use.
import { wait, log } from 'https://cdn.jsdelivr.net/gh/jacobhumston/lib@latest/src/web.core.min.js';
```

## API Reference

### functions/validator (Node, Web)
*Functions used to validate things. (Such as function parameters.)*

**TYPE** *`stringType`* `"undefined" | "object" | "boolean" | "number" | "bigint" | "string" | "function"`

**FUNCTION** `param(type: stringType, value: any, name: string, optional?: boolean): void`
*Check if a parameter is the correct type. This function is not type checked on its own.*

**TYPE** *`typeObject`* `{ type: stringType, optional?: boolean }`

**FUNCTION** `paramObject(value: Object.<string, any>, object: Object.<string, typeObject>, name: string, optional?: boolean): void`
*Check if properties of an object are the correct type. Object (value) should be type checked before using this function. Not all params of this function are type checked.*

