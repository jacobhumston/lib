## Functions

<dl>
<dt><a href="#stop">stop()</a></dt>
<dd><p>Stops the cache&#39;s sweeper.</p>
</dd>
<dt><a href="#start">start(itemExpire)</a></dt>
<dd><p>Start the cache&#39;s sweeper.
This will stop the sweeper and start it again if it&#39;s currently running.</p>
</dd>
<dt><a href="#get">get(name)</a> ⇒ <code>any</code> | <code>null</code></dt>
<dd><p>Get an item from the cache.</p>
</dd>
<dt><a href="#set">set(name, item)</a> ⇒ <code>void</code></dt>
<dd><p>Set the value of an item in cache.
This <em>will</em> reset the item&#39;s expire time.</p>
</dd>
<dt><a href="#delete">delete(name)</a> ⇒ <code>void</code></dt>
<dd><p>Delete an item in the cache.</p>
</dd>
<dt><a href="#clear">clear()</a> ⇒ <code>void</code></dt>
<dd><p>Delete all items in the cache.</p>
</dd>
<dt><a href="#add">add(time)</a> ⇒ <code>void</code></dt>
<dd><p>Add time.</p>
</dd>
<dt><a href="#subtract">subtract(time)</a> ⇒ <code>void</code></dt>
<dd><p>Subtract time.</p>
</dd>
<dt><a href="#convert">convert()</a> ⇒ <code><a href="#timeObjectNormal">timeObjectNormal</a></code></dt>
<dd><p>Create a timeObject.</p>
</dd>
<dt><a href="#roundedConvert">roundedConvert()</a> ⇒ <code><a href="#timeObjectNormal">timeObjectNormal</a></code></dt>
<dd><p>Create a timeObject with a rounded result.</p>
</dd>
<dt><a href="#getColor">getColor(name)</a> ⇒ <code>string</code></dt>
<dd><p>Returns an ANSI Color Escape Sequence.
It&#39;s important to note that colors can be visually different per terminal.</p>
</dd>
<dt><a href="#log">log(type, message, [noColor])</a> ⇒ <code>void</code></dt>
<dd><p>Log to the console in a neat format.</p>
</dd>
<dt><a href="#createFileTree">createFileTree(path)</a> ⇒ <code><a href="#fileTreeResult">fileTreeResult</a></code></dt>
<dd><p>Create a file tree array from a directory.</p>
</dd>
<dt><a href="#duplicateFile">duplicateFile(file, [outputPath])</a> ⇒ <code>string</code></dt>
<dd><p>Duplicate a file.
The new file will be included with &quot;(number)&quot; in it&#39;s name if a file in the directory already exists.</p>
</dd>
<dt><a href="#quickServer">quickServer(port, message)</a> ⇒ <code>http.Server</code></dt>
<dd><p>Create a quick http server that responds with a plain text message.</p>
</dd>
<dt><a href="#quickRedirectServer">quickRedirectServer(port, location)</a> ⇒ <code>http.Server</code></dt>
<dd><p>Create a quick http server that redirects all requests to another location.</p>
</dd>
<dt><a href="#wait">wait(time)</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd><p>Returns a promise that resolves after the time provided.</p>
</dd>
<dt><a href="#waitLoop">waitLoop(callback, amount, [time])</a> ⇒ <code>Promise.&lt;Array.&lt;any&gt;&gt;</code></dt>
<dd><p>Returns a promise that resolves once <em>callback</em> is called  <em>amount</em> of times.</p>
</dd>
<dt><a href="#param">param(type, [value], name, [optional])</a> ⇒ <code>void</code></dt>
<dd><p>Check if a parameter is the correct type.
This function is not type checked on its own.</p>
</dd>
<dt><a href="#paramObject">paramObject([value], object, name, [optional])</a> ⇒ <code>void</code></dt>
<dd><p>Check if properties of an object are the correct type.
Object (value) should be type checked before using this function.
Not all params of this function are type checked.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#cacheItem">cacheItem</a> : <code>object</code></dt>
<dd><p>An item in the cache.</p>
</dd>
<dt><a href="#timeObject">timeObject</a> : <code>object</code></dt>
<dd><p>Time object.</p>
</dd>
<dt><a href="#timeObjectNormal">timeObjectNormal</a> : <code>object</code></dt>
<dd><p>Time object.</p>
</dd>
<dt><a href="#ANSIColorCode">ANSIColorCode</a> : <code>&quot;Black&quot;</code> | <code>&quot;Red&quot;</code> | <code>&quot;Green&quot;</code> | <code>&quot;Yellow&quot;</code> | <code>&quot;Blue&quot;</code> | <code>&quot;Purple&quot;</code> | <code>&quot;Cyan&quot;</code> | <code>&quot;White&quot;</code> | <code>&quot;BackgroundBlack&quot;</code> | <code>&quot;BackgroundRed&quot;</code> | <code>&quot;BackgroundGreen&quot;</code> | <code>&quot;BackgroundYellow&quot;</code> | <code>&quot;BackgroundBlue&quot;</code> | <code>&quot;BackgroundPurple&quot;</code> | <code>&quot;BackgroundCyan&quot;</code> | <code>&quot;BackgroundWhite&quot;</code> | <code>&quot;Reset&quot;</code></dt>
<dd></dd>
<dt><a href="#fileTreeObject">fileTreeObject</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#fileTreeResult">fileTreeResult</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#stringType">stringType</a> : <code>&quot;undefined&quot;</code> | <code>&quot;object&quot;</code> | <code>&quot;boolean&quot;</code> | <code>&quot;number&quot;</code> | <code>&quot;bigint&quot;</code> | <code>&quot;string&quot;</code> | <code>&quot;function&quot;</code></dt>
<dd><p>Possible results of <em>typeof</em>.</p>
</dd>
<dt><a href="#typeObject">typeObject</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="stop"></a>

## stop()
Stops the cache's sweeper.

**Kind**: global function  
<a name="start"></a>

## start(itemExpire)
Start the cache's sweeper.This will stop the sweeper and start it again if it's currently running.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| itemExpire | <code>number</code> | The amount of time (in seconds) that an item will be removed after it is added. |

<a name="get"></a>

## get(name) ⇒ <code>any</code> \| <code>null</code>
Get an item from the cache.

**Kind**: global function  
**Returns**: <code>any</code> \| <code>null</code> - The item, or null if it doesn't exist.  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the item. |

<a name="set"></a>

## set(name, item) ⇒ <code>void</code>
Set the value of an item in cache.This *will* reset the item's expire time.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the item to set the value of. |
| item | <code>any</code> | The item. |

<a name="delete"></a>

## delete(name) ⇒ <code>void</code>
Delete an item in the cache.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the item to delete. |

<a name="clear"></a>

## clear() ⇒ <code>void</code>
Delete all items in the cache.

**Kind**: global function  
<a name="add"></a>

## add(time) ⇒ <code>void</code>
Add time.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| time | [<code>timeObject</code>](#timeObject) | Time object to add. |

<a name="subtract"></a>

## subtract(time) ⇒ <code>void</code>
Subtract time.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| time | [<code>timeObject</code>](#timeObject) | Time object to subtract. |

<a name="convert"></a>

## convert() ⇒ [<code>timeObjectNormal</code>](#timeObjectNormal)
Create a timeObject.

**Kind**: global function  
<a name="roundedConvert"></a>

## roundedConvert() ⇒ [<code>timeObjectNormal</code>](#timeObjectNormal)
Create a timeObject with a rounded result.

**Kind**: global function  
<a name="getColor"></a>

## getColor(name) ⇒ <code>string</code>
Returns an ANSI Color Escape Sequence.It's important to note that colors can be visually different per terminal.

**Kind**: global function  
**Returns**: <code>string</code> - ANSI Color Escape Sequence  

| Param | Type | Description |
| --- | --- | --- |
| name | [<code>ANSIColorCode</code>](#ANSIColorCode) | Of the ANSI Color Escape Sequence. |

<a name="log"></a>

## log(type, message, [noColor]) ⇒ <code>void</code>
Log to the console in a neat format.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| type | <code>&quot;Log&quot;</code> \| <code>&quot;Success&quot;</code> \| <code>&quot;Error&quot;</code> \| <code>&quot;Warn&quot;</code> \| <code>&quot;Debug&quot;</code> |  | Type of log. |
| message | <code>string</code> |  | Message to log. |
| [noColor] | <code>boolean</code> | <code>false</code> | If true, no color will be used. (default: false) |

<a name="log..fixStringLength"></a>

### log~fixStringLength(string, length) ⇒ <code>string</code>
Adds spaces to the end of a sting to make it match a certain length.

**Kind**: inner method of [<code>log</code>](#log)  

| Param | Type |
| --- | --- |
| string | <code>string</code> | 
| length | <code>number</code> | 

<a name="createFileTree"></a>

## createFileTree(path) ⇒ [<code>fileTreeResult</code>](#fileTreeResult)
Create a file tree array from a directory.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Path to the directory to create a file tree array from. |

<a name="createFileTree..dir"></a>

### createFileTree~dir([array])
**Kind**: inner method of [<code>createFileTree</code>](#createFileTree)  

| Param | Type |
| --- | --- |
| [array] | <code>Array.&lt;any&gt;</code> | 

<a name="duplicateFile"></a>

## duplicateFile(file, [outputPath]) ⇒ <code>string</code>
Duplicate a file.The new file will be included with "(number)" in it's name if a file in the directory already exists.

**Kind**: global function  
**Returns**: <code>string</code> - The path of the new file.  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>string</code> | Path of the file to duplicate. |
| [outputPath] | <code>string</code> | Path to place the new file. If undefined, the output path will be the file's path. |

<a name="quickServer"></a>

## quickServer(port, message) ⇒ <code>http.Server</code>
Create a quick http server that responds with a plain text message.

**Kind**: global function  
**Returns**: <code>http.Server</code> - The created server.  

| Param | Type | Description |
| --- | --- | --- |
| port | <code>number</code> | Port to listen to. |
| message | <code>string</code> | Message to send. |

<a name="quickRedirectServer"></a>

## quickRedirectServer(port, location) ⇒ <code>http.Server</code>
Create a quick http server that redirects all requests to another location.

**Kind**: global function  
**Returns**: <code>http.Server</code> - The created server.  

| Param | Type | Description |
| --- | --- | --- |
| port | <code>number</code> | Port to listen to. |
| location | <code>string</code> | Location to redirect to. |

<a name="wait"></a>

## wait(time) ⇒ <code>Promise.&lt;void&gt;</code>
Returns a promise that resolves after the time provided.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| time | <code>number</code> | The amount of time (in milliseconds) to wait. |

<a name="waitLoop"></a>

## waitLoop(callback, amount, [time]) ⇒ <code>Promise.&lt;Array.&lt;any&gt;&gt;</code>
Returns a promise that resolves once *callback* is called  *amount* of times.

**Kind**: global function  
**Returns**: <code>Promise.&lt;Array.&lt;any&gt;&gt;</code> - An array of results of each iteration.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| callback | <code>function</code> |  | Function to execute. |
| amount | <code>number</code> |  | Amount of times to execute the function. |
| [time] | <code>number</code> | <code>0</code> | Time (in milliseconds) to wait between each iteration. (default: 0ms) |

<a name="param"></a>

## param(type, [value], name, [optional]) ⇒ <code>void</code>
Check if a parameter is the correct type.This function is not type checked on its own.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| type | [<code>stringType</code>](#stringType) | Type to check. |
| [value] | <code>any</code> | Value to check. |
| name | <code>string</code> | Name of the parameter. |
| [optional] | <code>boolean</code> | If the parameter is optional. (default: false) |

<a name="paramObject"></a>

## paramObject([value], object, name, [optional]) ⇒ <code>void</code>
Check if properties of an object are the correct type.Object (value) should be type checked before using this function.Not all params of this function are type checked.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [value] | <code>Object.&lt;string, any&gt;</code> | Value to check. |
| object | <code>Object.&lt;string, typeObject&gt;</code> | Object of types to check. |
| name | <code>string</code> | Name of the parameter. |
| [optional] | <code>boolean</code> | If the parameter is optional. (default: false) |

<a name="cacheItem"></a>

## cacheItem : <code>object</code>
An item in the cache.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| item | <code>any</code> | The cached item. |
| stamp | <code>number</code> | The timestamp of when this item was created. |

<a name="timeObject"></a>

## timeObject : <code>object</code>
Time object.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [milliseconds] | <code>number</code> | Number of milliseconds. |
| [seconds] | <code>number</code> | Number of seconds. |
| [minutes] | <code>number</code> | Number of minutes. |
| [hours] | <code>number</code> | Number of hours. |
| [days] | <code>number</code> | Number of days. |
| [weeks] | <code>number</code> | Number of weeks. |
| [months] | <code>number</code> | Number of months. |
| [years] | <code>number</code> | Number of years. |

<a name="timeObjectNormal"></a>

## timeObjectNormal : <code>object</code>
Time object.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| milliseconds | <code>number</code> | Number of milliseconds. |
| seconds | <code>number</code> | Number of seconds. |
| minutes | <code>number</code> | Number of minutes. |
| hours | <code>number</code> | Number of hours. |
| days | <code>number</code> | Number of days. |
| weeks | <code>number</code> | Number of weeks. |
| months | <code>number</code> | Number of months. |
| years | <code>number</code> | Number of years. |

<a name="ANSIColorCode"></a>

## ANSIColorCode : <code>&quot;Black&quot;</code> \| <code>&quot;Red&quot;</code> \| <code>&quot;Green&quot;</code> \| <code>&quot;Yellow&quot;</code> \| <code>&quot;Blue&quot;</code> \| <code>&quot;Purple&quot;</code> \| <code>&quot;Cyan&quot;</code> \| <code>&quot;White&quot;</code> \| <code>&quot;BackgroundBlack&quot;</code> \| <code>&quot;BackgroundRed&quot;</code> \| <code>&quot;BackgroundGreen&quot;</code> \| <code>&quot;BackgroundYellow&quot;</code> \| <code>&quot;BackgroundBlue&quot;</code> \| <code>&quot;BackgroundPurple&quot;</code> \| <code>&quot;BackgroundCyan&quot;</code> \| <code>&quot;BackgroundWhite&quot;</code> \| <code>&quot;Reset&quot;</code>
**Kind**: global typedef  
<a name="fileTreeObject"></a>

## fileTreeObject : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the file. |
| path | <code>string</code> | Path of the file. |
| isDirectory | <code>boolean</code> | If the file is a directory or not. |
| files | [<code>Array.&lt;fileTreeObject&gt;</code>](#fileTreeObject) \| <code>null</code> | Files of this directory. (Null if not a directory.) |

<a name="fileTreeResult"></a>

## fileTreeResult : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| result | [<code>Array.&lt;fileTreeObject&gt;</code>](#fileTreeObject) | The resulting file tree object. |
| failed | <code>number</code> | Number of files which were not added due to an error. (Likely permission error, or private files.) |
| fileCount | <code>number</code> | Number of files in this tree. (Does NOT include directories.) |

<a name="stringType"></a>

## stringType : <code>&quot;undefined&quot;</code> \| <code>&quot;object&quot;</code> \| <code>&quot;boolean&quot;</code> \| <code>&quot;number&quot;</code> \| <code>&quot;bigint&quot;</code> \| <code>&quot;string&quot;</code> \| <code>&quot;function&quot;</code>
Possible results of *typeof*.

**Kind**: global typedef  
<a name="typeObject"></a>

## typeObject : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| type | [<code>stringType</code>](#stringType) | 
| [optional] | <code>boolean</code> | 

