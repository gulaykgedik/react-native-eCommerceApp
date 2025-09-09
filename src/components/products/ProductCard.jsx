import { Image, StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import AppStyles from '../../ui/appStyles'
import { Heart } from 'iconsax-react-nativejs'
import AppColors from '../../ui/appColors'
import { useNavigation } from '@react-navigation/native'
import AppRoutes from '../../navigation/routes'
import { addToFavorites } from '../../store/slices/favoriteSlice'
import { useDispatch, useSelector } from 'react-redux'

const ProductCard = ({item}) => {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {favorites} = useSelector(state => state.favorites);

  const hearted = favorites.some(fav => fav.id === item.id);
  
  return (
    <TouchableOpacity onPress={()=> navigation.navigate(AppRoutes.DETAIL, {product: item})} style={AppStyles.productCard}>
      {/* Image */}
      <Image source={{uri: item.images[0]}} style={AppStyles.productImage} />

      {/* Favarite Icon */}
      <TouchableOpacity style={[AppStyles.favoriteIcon, 
      {backgroundColor: hearted ? AppColors.primary : AppColors.gray}

      ]}
       onPress={()=> dispatch(addToFavorites(item))}>
        <Heart size="20" color={hearted ? AppColors.white : AppColors.black} />
      </TouchableOpacity>

      {/* Title */}
      <Text style={AppStyles.productTitle}>{item.title}</Text>

      {/* Brand */}
      <Text style={AppStyles.productBrand}>{item.brand}</Text>

      {/* Price */}
      <Text style={AppStyles.productPrice}>$ {item.price}</Text>
    </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({})
