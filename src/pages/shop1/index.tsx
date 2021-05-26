import React, { FC } from 'react'
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

const Shop1: FC = () => {

  const {
    checkedAll,
    checkedMap,
    onCheckedAllChange,
    onCheckedChange,
    total,
  } = useChecked(list)

  // const selectAll = () => {
  //   console.log('xxxx', all)
  //   setAll(!all)
  //   onCheckedAllChange(all)
  // }

  const cardList = () => {
    return (list.map(item =>{
      return  <View className='item' key={item.id}>
                <CheckboxGroup onChange={()=>onCheckedChange(item, checkedMap[item.id])}>
                  <Checkbox className='check-box' value={''+item.id} checked={checkedMap[item.id]} />
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
        <CheckboxGroup onChange={()=>onCheckedAllChange()}>
          <Checkbox  value='all' checked={checkedAll}  />
        </CheckboxGroup>
        <View>总计: {total}元</View>
      </View>
    </View>
  )
}

export default Shop1
