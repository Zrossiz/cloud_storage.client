import { LayoutProps } from "./Layout.props"
import Head from "next/head"

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>Cloud storage</title>
                <link rel="icon" type='image/x-icon' href="/Logo.png" />
            </Head> 
            {children}
        </>
    )
}