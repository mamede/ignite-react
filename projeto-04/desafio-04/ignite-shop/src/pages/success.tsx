import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import Head from "next/head";
import { stripe } from "../services/stripe";
import * as S from "../styles/pages/success";
import { useShoppingCart } from "use-shopping-cart"
import { useState } from "react";

interface SuccessProps {
  costumerName: string;
  products: {
    id: string
    name: string
    imageUrl: string;
  }[]
}

export default function Success({ costumerName, products }: SuccessProps) {
  const [successfulPurchase, setSuccessfulPurchase] = useState(true)
  const { clearCart } = useShoppingCart()

  if (successfulPurchase) {
    clearCart()
    setSuccessfulPurchase(false)
  }

  const productsAmount = products.length

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <S.SuccessContainer>
        <h1>Compra efetuada</h1>

        <S.ProductsContainer>
          {products.map((product) => {
            return (
              <S.ImageContainer key={product.id}>
                <Image
                  src={product.imageUrl}
                  alt=""
                  width={120}
                  height={110}
                />
              </S.ImageContainer>
            )
          })}
        </S.ProductsContainer>

        <p>
          Uhuul <strong>{costumerName}</strong>, {productsAmount === 1 ? 'sua' : 'suas'} <strong>{productsAmount}</strong>
          {productsAmount === 1 ? 'camiseta' : 'camisetas'} já {productsAmount === 1 ? 'está' : 'estão'} caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </S.SuccessContainer>
    </>

  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const costumerName = session.customer_details!.name;
  // @ts-ignore
  const products = session.line_items.data.map((item) => {
    const product = item.price!.product as Stripe.Product

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0]
    }
  })

  return {
    props: {
      costumerName,
      products,
    }
  }
}