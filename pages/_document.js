import { Html, Head, Main, NextScript } from 'next/document'
import NavigationBar from './NavigationBar'
//
//
import Footer from './Footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <NavigationBar/>
        <Main />
        <Footer/>
        <NextScript />
      </body>
    </Html>
  )
}
