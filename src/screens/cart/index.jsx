import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import AppStyles from '../../ui/appStyles';
import { ArrowLeft2 } from 'iconsax-react-nativejs';
import CartItem from '../../components/cart/cartItem';
import EmptyCart from '../../components/cart/emptyCart';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const cart = useSelector(state => state.cart.items);
  const navigation = useNavigation();
  return (
    <View style={AppStyles.container}>
      {/* Header */}
      <View style={[AppStyles.row, AppStyles.rowBetween, AppStyles.cartHeader]}>
        {/* Back Icon */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft2 size="24" color="black" style={AppStyles.backIcon}/>
        </TouchableOpacity>


        {/* Title */}
        <Text style={AppStyles.cartHeaderTitle}>My Cart</Text>


        {/* Empty view */}
        <View style={{width: 24}}></View>
      </View>

      {/* Cards List */}
      <View style={AppStyles.cartWrapper}>
        {cart.length === 0 ? <EmptyCart /> : <FlatList data={cart} renderItem={(product)=>
           <CartItem product={product.item}/>}/>}
      </View>

       {cart.length > 0 &&   
        <View style={AppStyles.orderComplete}>
        <TouchableOpacity style={AppStyles.checkoutBtn} onPress={() => alert('Checkout pressed!')}>
          <Text style={AppStyles.checkoutBtnText}>Complete Order</Text>
        </TouchableOpacity>
      </View>}
   
     
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})