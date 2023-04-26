import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Menu from "@/components/menu/Menu"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <Menu />
    </div>
  )
}
