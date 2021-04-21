import React, { FC, useState } from 'react'
import { View , Checkbox, CheckboxGroup } from '@tarojs/components'
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

const Shop: FC = () => {
  const [checkedMap, setCheckedMap] = useState<CheckedMap>({})
  const [all, setAll] = useState<boolean>(false)

  // 商品勾选
  const onCheckedChange = (cartItem, checked) => {
    const { id } = cartItem
    const newCheckedMap = Object.assign({}, checkedMap, {
      [id]: !Boolean(checked),
    })
    setCheckedMap(newCheckedMap)
    if (Object.values(newCheckedMap).filter(item=>item).length === list.length) {
      setAll(true)
    } else {
      setAll(false)
    }
  }

  // 商品总价
  const sumPrice = (cartItems: CartItem[]) => {
    return cartItems.reduce((sum, cur) => sum + cur.price, 0)
  }

  // 返回已选中的所有cartItems
  const filterChecked = () => {
    return (
      Object.entries(checkedMap)
        // 通过这个filter 筛选出所有checked状态为true的项
        .filter(entries => Boolean(entries[1]))
        // 再从cartData中根据id来map出选中列表
        .map(([checkedId]) => list.find(({ id }) => id === Number(checkedId)))
    )
  }

  const total = sumPrice(filterChecked())

  // 全部勾选
  const selectAll = () => {
    setAll(!all)
    const newCheckedMap: CheckedMap = {}
    if (!all) {
      list.forEach(cartItem => {
        newCheckedMap[cartItem.id] = true
      })
    }
    setCheckedMap(newCheckedMap)
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
          <Checkbox  value='all' checked={all}  />
        </CheckboxGroup>
        <View>总计: {total}元</View>
      </View>
    </View>
  )
}

export default Shop
