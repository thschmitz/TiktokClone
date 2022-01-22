import {ThemeProvider} from "styled-components"
import GlobalStyle from "../styles/global"
import Theme from "../styles/theme"

export default function App({Component, pageProps}) {
    return(
        <>
        <GlobalStyle/>
        <ThemeProvider theme={Theme}>
            <Component {...pageProps} />
        </ThemeProvider>        
        </>
    )
}