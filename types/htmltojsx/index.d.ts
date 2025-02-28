// Type definitions for htmltojsx
// Project: https://www.npmjs.com/package/htmltojsx
// Definitions by: Basarat Ali Syed <https://github.com/basarat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class HTMLtoJSX {
    constructor(options?: {
        createClass?: boolean | undefined;
        outputClassName?: string | undefined;
        /** as a string e.g. '    ' or '\t' */
        indent?: string | undefined;
    });
    convert(html: string): string;
}
export = HTMLtoJSX;
