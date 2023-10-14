import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import Header from "../components/Header"
import { Container } from "../styles/pages/app"
import { CartProvider } from 'use-shopping-cart'

globalStyles()
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={process.env.SECRET_KEY_STRIPE!}
      currency="BRL"
      language="pt-BR"
      loading={<p>Loading</p>}
      shouldPersist={true}
    >
      <Container>
        <Header />

        <Component {...pageProps} />
      </Container>
      <Toaster
        position='top-right'
        toastOptions={{
          duration: 3000,
          style: {
            padding: '16px 20px',
            background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
            boxShadow: '0px 0px 48px rgba(0, 0, 0, 0.9)',
            color: '#000',
          },
        }}
      />
    </CartProvider>
  )
}
