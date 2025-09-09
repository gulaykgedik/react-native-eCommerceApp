import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppStyles from '../../ui/appStyles'
import { useDispatch } from 'react-redux'
import { Trash } from 'iconsax-react-nativejs'
import { removeFromFavorites } from '../../store/slices/favoriteSlice'

const FavoriteItem = ({ product }) => {
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


        <TouchableOpacity style={[AppStyles.trashBtn, {marginBottom: -15}]}
         onPress={() => dispatch(removeFromFavorites(product.id))}>
          <Trash size="24" color="#ff3b30"  />
        </TouchableOpacity>


           {/* Price */}
        <Text style={AppStyles.cartInfoPrice}>
          ${(product.price).toFixed(2)}
        </Text>
        </View>

       
      </View>
 
  );
};

export default FavoriteItem;

const styles = StyleSheet.create({});
