import '~/styles/globals.css'
import localFont from 'next/font/local'
import Nav from '~/components/Nav';

const jbMono = localFont({ src: '../fonts/JetBrainsMono[wght].ttf', variable: '--font-jb-mono' });


export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`${jbMono.className} font-mono h-full overflow-hidden relative`}>
        <Nav />
        <Component {...pageProps} />
      </main>
    </>

  )
}
