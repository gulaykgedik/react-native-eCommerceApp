import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppStyles from '../../ui/appStyles'
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeItem } from '../../store/slices/cartSlice'
import { Add, Minus, Trash } from 'iconsax-react-nativejs'


const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <View style={[AppStyles.cartItem, AppStyles.row]}>
      {/* Product Image */}
      <Image source={{ uri: product.images[0] }} style={AppStyles.cartImg} />

      {/* Product Info */}
      <View style={AppStyles.cartInfoContainer}>
        {/* Title */}
        <Text
          style={AppStyles.cartInfoTitle}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {product.title}
        </Text>

        {/* Category */}
        <Text style={[AppStyles.capitalize, AppStyles.cartInfoCategory]}>
          {product.category}
        </Text>

        {/* Quantity Controls */}
        <View style={[AppStyles.row, AppStyles.cartControls]}>
        <View style={[AppStyles.row, AppStyles.rowCenter, AppStyles.btnContainer]}>
          <TouchableOpacity
            style={AppStyles.decreaseQuantity}
            onPress={() => dispatch(decreaseQuantity(product.id))}
          >
          <Minus size="20" color="#000"  />
          </TouchableOpacity>

          <Text style={AppStyles.cartInfoQuantity}>{product.quantity}</Text>

          <TouchableOpacity
            style={AppStyles.increaseQuantity}
            onPress={() => dispatch(increaseQuantity(product.id))}
          >
            <Add size="20" color="#000"  />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={AppStyles.trashBtn} onPress={() => dispatch(removeItem(product.id))}>
          <Trash size="24" color="#ff3b30"  />
        </TouchableOpacity>


           {/* Price */}
        <Text style={AppStyles.cartInfoPrice}>
          ${(product.quantity * product.price).toFixed(2)}
        </Text>
        </View>

       
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
