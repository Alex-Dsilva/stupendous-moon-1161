import { Button, CloseButton, Flex, Link, Select, useColorModeValue } from '@chakra-ui/react'
import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import { addCart, delCart } from '../../redux/Cart/CartAction'
import { useDispatch } from 'react-redux'
const QuantitySelect = (props) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  )
}

export const CartItem = (props) => {
    console.log(props.qty)
  const {
    isGiftWrapping,
    Name,
    LabelText,
    qty,
    PicturePath,
    SalePrice,
    onChangeQuantity,
    onClickDelete,
    currency
  } = props

  const dispatch=useDispatch()
  return (
    <Flex
      direction={{
        base: 'column',
        md: 'row',
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={Name}
        description={LabelText}
        image={PicturePath}
        isGiftWrapping={isGiftWrapping}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: 'none',
          md: 'flex',
        }}
      >
        <Button
              onClick={() => dispatch(delCart(props))}
            >-
            </Button>
            <Button>{qty}</Button>
            <Button
              onClick={() => dispatch(addCart(props))}
            >+
            </Button>
        <PriceTag price={SalePrice} currency={currency} />
        <CloseButton aria-label={`Delete ${Name} from cart`} onClick={onClickDelete} />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: 'flex',
          md: 'none',
        }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <Button
              onClick={() => dispatch(delCart(props))}
            >-
            </Button>
            <Button>{qty}</Button>
            <Button
              onClick={() => dispatch(addCart(props))}
            >+
            </Button>
        <PriceTag price={SalePrice} currency={currency} />
      </Flex>
    </Flex>
  )
}