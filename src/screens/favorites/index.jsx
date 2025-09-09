import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import AppStyles from '../../ui/appStyles';
import { ArrowLeft2 } from 'iconsax-react-nativejs';
import { useNavigation } from '@react-navigation/native';
import FavoritesEmpty from '../../components/favorites/favoritesEmpty';
import FavoriteItem from '../../components/favorites/favoriteItem';

const CartScreen = () => {
  const {favorites} = useSelector(state => state.favorites);
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
        <Text style={AppStyles.cartHeaderTitle}>My Favorites</Text>


        {/* Empty view */}
        <View style={{width: 24}}></View>
      </View>

      {/* Cards List */}
      <View style={AppStyles.cartWrapper}>
        {favorites.length === 0 ? <FavoritesEmpty /> : <FlatList 
        data={favorites} 
        renderItem={(product)=>
           <FavoriteItem product={product.item}/>}/>}
      </View>
     
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})