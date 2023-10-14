import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import * as S from './styles'
import Image from 'next/image'
import axios from "axios";

import { useShoppingCart } from 'use-shopping-cart'
import { Product as IProduct } from "use-shopping-cart/core"
import { toast } from 'react-hot-toast';

export default function ShoppingBag() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)
  const { cartDetails, removeItem, cartCount, formattedTotalPrice } = useShoppingCart()
  const cart = Object.values(cartDetails ?? {}).map((cartItem: IProduct) => cartItem)
  const isCartEmpty = cartCount === 0

  function handleRemoveItem(id: string) {
    removeItem(id)
    toast.success("Camiseta removida com sucesso!")
  }

  async function handleBuyProducts() {
    const productsToCheckout = cart.map((cartItem) => {
      return {
        price: cartItem.price_id,
        quantity: cartItem.quantity,
      }
    })

    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        products: productsToCheckout
      })

      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout')
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay />
      <S.Content>
        <S.Close>
          <X size={24} />
        </S.Close>
        <S.Title>Sacola de compras</S.Title>
        <S.ItemsContainer>
          {cart.map(cartItem => (
            <S.Item key={cartItem.id}>
              <S.ImageContainer>
                <Image
                  src={cartItem.imageUrl}
                  alt=""
                  width={95}
                  height={95}
                />
              </S.ImageContainer>
              <div>
                <h4>{cartItem.name}</h4>
                <strong>
                  {
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(cartItem.price / 100)
                  }
                </strong>
                <button onClick={() => handleRemoveItem(cartItem.id)}>Remover</button>
              </div>
            </S.Item>
          ))}
        </S.ItemsContainer>
        <footer>
          <div>
            <span>Quantidade</span>
            <span>{cartCount} {cartCount && cartCount > 1 ? 'itens' : 'item'}</span>
          </div>
          <div>
            <span>Valor total</span>
            <strong>{formattedTotalPrice}</strong>
          </div>

          <button
            disabled={isCreatingCheckoutSession || isCartEmpty}
            onClick={handleBuyProducts}
          >
            Finalizar compra
          </button>
        </footer>
      </S.Content>
    </Dialog.Portal>
  )
}