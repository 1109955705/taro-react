import React, { FC, useState } from 'react'
import { View , Checkbox, CheckboxGroup } from '@tarojs/components'
import { useChecked } from './use-checked'
import './index.scss'

const list = [
  {
    id: 3,
    name: '商品1',
    price: 10
  },
  {
    id: 4,
    name: '商品2',
    price: 20
  },
  {
    id: 5,
    name: '商品3',
    price: 30
  },
  {
    id: 6,
    name: '商品4',
    price: 40
  }
]
type CheckedMap = {
  [id: number]: boolean
}

interface CartItem {
  id: number
  name: string
  price: number
}

const Shop1: FC = () => {
  // const [checkedMap, setCheckedMap] = useState<CheckedMap>({})
  const [all, setAll] = useState<boolean>(false)
  const {
    checkedAll,
    checkedMap,
    onCheckedAllChange,
    onCheckedChange,
    filterChecked,
  } = useChecked(list)

  // 商品总价
  const sumPrice = (cartItems: CartItem[]) => {
    return cartItems.reduce((sum, cur) => sum + cur.price, 0)
  }

  const total = sumPrice(filterChecked())

  const selectAll = () => {
    console.log('xxxx', all)
    setAll(!all)
    onCheckedAllChange(all)
  }

  const cardList = () => {
    return (list.map(item =>{
      const checked = checkedMap[item.id]
      return  <View className='item' key={item.id}>
                <CheckboxGroup onChange={()=>onCheckedChange(item, checkedMap[item.id])}>
                  <Checkbox className='check-box' value={item.id} checked={checkedMap[item.id]} />
                </CheckboxGroup>
                <View className='item-deatil'>
                  <View>{item.name}</View>
                  <View>{item.price}</View>
                </View>
              </View>
      }
    ))
  }
  return (
    <View className='main'>
      <View>{ list ? cardList() : ''}</View>
      <View className='footer'>
        <CheckboxGroup onChange={()=>selectAll()}>
          <Checkbox  value='all' checked={checkedAll}  />
        </CheckboxGroup>
        <View>总计: {total}元</View>
      </View>
    </View>
  )
}

export default Shop1
