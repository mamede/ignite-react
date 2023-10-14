import logoImg from "../../assets/logo.svg"
import * as S from "./styles"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import * as Dialog from '@radix-ui/react-dialog'
import ShoppingBag from "../ShoppingBag"
import { useShoppingCart } from "use-shopping-cart"
import Link from "next/link"

export default function Header() {
  const { cartCount } = useShoppingCart()

  return (
    <S.HeaderContainer>
      <Link href="/">
        <Image src={logoImg.src} alt="" width={130} height={52} />
      </Link>
      <Dialog.Root>
        <S.BagContainer>
          <ShoppingCart
            size={24}
            color={cartCount ? '#FFF' : '#8D8D99'}
          />
          {cartCount && cartCount > 0 && <span>{cartCount}</span>}
        </S.BagContainer>

        <ShoppingBag />
      </Dialog.Root>
    </S.HeaderContainer>
  )
}