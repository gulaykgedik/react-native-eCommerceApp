import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AddCircle, ArrowLeft2, Bag2, MinusCirlce, Star1 } from 'iconsax-react-nativejs';
import AppStyles from '../../ui/appStyles';
import AppColors from '../../ui/appColors';
import { productsColor } from '../../constants';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import CartIcon from '../../components/cart/cartIcon';

const ProductDetail = () => {

  const {params} = useRoute();

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const product = params?.product;

  const [selectedColor, setSelectedColor] = useState(productsColor[0]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  }


  return (
    <ScrollView >
      {/* Header */}
      <View style={[AppStyles.row, AppStyles.rowBetween, AppStyles.detailHeader]}>

        {/* Back Icon */}        
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft2 size="24" color="black" style={AppStyles.backIcon}/>
        </TouchableOpacity>

        {/* Title */}
        <Text style={AppStyles.detailHeaderTitle}>{product?.title}</Text>

        {/* Cart Icon */}
         <CartIcon />
      </View>

      {/* Product Image */}
      <Image source={{uri: product?.images[0]}} style={AppStyles.detailImage}/>

      {/* Product Info */}
      <View style={AppStyles.detailCard}>
        {/* Top */}
        <View style={[AppStyles.row, AppStyles.rowBetween, AppStyles.productTop ]}>
          <Text style={AppStyles.productDetailTitle}>{product?.title}</Text>

          <View style={[AppStyles.row, AppStyles.buttonsWrapper]}>
            <MinusCirlce size="32" color={AppColors.primary} style={{marginRight:5}}/>
            <Text style={AppStyles.quantity}>5</Text>
            <AddCircle size="32" color={AppColors.primary} style={{marginLeft:5}}/>
          </View>
        </View>


        {/* Raiting and stock */}
        <View style={[AppStyles.row, AppStyles.rowBetween, AppStyles.ratingContanier]}>
          <View style={[AppStyles.row, AppStyles.raitingWrapper]}>
            <Star1 size="20" color={AppColors.star} style={AppStyles.star}/>
            <Text style={AppStyles.reviews}> {product.rating} </Text>
            <Text style={AppStyles.reviewsCount}> ({product.reviews.length} Reviews) </Text>
          </View>
            <Text style={AppStyles.stock}>Avalible Stock</Text>
          </View>

        {/* Colors */}

        <View style={[AppStyles.row, AppStyles.colorsWrapper]}>
          {
            productsColor.map((color, index )=> (<TouchableOpacity 
            key={index} 
            style={[AppStyles.colorCircle,
             {backgroundColor: color, borderWidth: selectedColor === color ? 3 : 0, borderColor: AppColors.textSecondary}]}
             onPress={()=> setSelectedColor(color)}
             >
            </TouchableOpacity>))
          }
        </View>
     

        {/* Description */}
        <Text style={AppStyles.descriptionTitle}> Description</Text>
        <Text style={AppStyles.descriptionText}>{product?.description}</Text>

        

        {/* Button */}
       <View style={[AppStyles.row, AppStyles.rowBetween, AppStyles.detailButton]}>
        <Text style={AppStyles.productDetailPrice}>
          <Text style={AppStyles.price}>$ </Text>
          {product.price}</Text>

        <TouchableOpacity onPress={handleAddToCart} style={AppStyles.productCart}>
          <Bag2 size="24" variant='Bold' color={AppColors.white} />
          <Text style={AppStyles.productCartText} >Add to Cart</Text>
        </TouchableOpacity>
       </View>
      </View>
     
    </ScrollView>
  )
}

export default ProductDetail

const styles = StyleSheet.create({})