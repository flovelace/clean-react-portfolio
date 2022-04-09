import Document, { Head, Html, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link
                        rel='apple-touch-icon'
                        sizes='180x180'
                        href='/static/favicon/apple-touch-icon.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='32x32'
                        href='/static/favicon/favicon-32x32.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='16x16'
                        href='/stat/favicon/favicon-16x16.png'
                    />    
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}