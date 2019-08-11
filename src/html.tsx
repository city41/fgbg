import React from "react";

interface HTMLProps {
    htmlAttributes: Record<string, string>;
    headComponents: React.ReactNode[];
    bodyAttributes: Record<string, string>;
    preBodyComponents: React.ReactNode[];
    postBodyComponents: React.ReactNode[];
    body: string;
}

const HTML: React.FunctionComponent<HTMLProps> = props => {
    return (
        <html {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                {props.headComponents}
                <title>FGBG</title>
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
                {props.postBodyComponents}
            </body>
        </html>
    );
};

export default HTML;
