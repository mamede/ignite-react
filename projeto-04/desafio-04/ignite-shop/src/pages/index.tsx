import Image from "next/image"
import Head from 'next/head'
import { GetStaticProps } from "next"
import { useShoppingCart } from "use-shopping-cart"
import { stripe } from "../services/stripe"
import { ShoppingCart } from "lucide-react"
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import * as S from "../styles/pages/home"
import Link from "next/link"
import Stripe from "stripe"
import { Product as IProduct } from "use-shopping-cart/core"
import { toast } from 'react-hot-toast';

interface Product {
  id: string
  name: string
  imageUrl: string
  price: number
  defaultPriceId: string
  priceInCents: number
  currency: "BRL"
}

interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  });

  const { addItem, cartDetails } = useShoppingCart()
  const cart = Object.values(cartDetails ?? {}).map((cartItem: IProduct) => cartItem)

  async function handleAddProductToCart(product: Product) {
    const { id, name, imageUrl, priceInCents, defaultPriceId, currency } = product
    try {
      if (cart.find(item => item.id === product.id)) {
        return toast.error(`A ${name} já está no carrinho!`)
      }

      addItem({
        id,
        name,
        imageUrl,
        price: priceInCents,
        price_id: defaultPriceId,
        currency
      })

      toast.success(`${name} adicionada ao carrinho`)

    } catch (error) {
      toast.error(`Não foi possível adicionar ao carrinho, tente novamente!`)
    }
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <S.HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (

            <S.Product key={product.id} className="keen-slider__slide">
              <Link href={`/product/${product.id}`} prefetch={false}>
                <Image src={product.imageUrl} width={520} height={480} alt="" />
              </Link>
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <button
                  onClick={() => handleAddProductToCart(product)}
                >
                  <ShoppingCart size={32} />
                </button>
              </footer>
            </S.Product>
          )
        })}
      </S.HomeContainer>
    </>

  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
    active: true,
  });


  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
        // @ts-ignore
      }).format(price.unit_amount / 100),
      priceInCents: price.unit_amount,
      defaultPriceId: price.id
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours,
  }
}