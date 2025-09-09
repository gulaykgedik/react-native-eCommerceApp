import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import AppStyles from '../../ui/appStyles'
import { Bag2 } from 'iconsax-react-nativejs'
import AppColors from '../../ui/appColors'
import AppRoutes from '../../navigation/routes'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { useSelector } from 'react-redux'

const CartIcon = () => {
    // Navigate kurulumu
    const navigation = useNavigation();

    const { items } = useSelector(state => state.cart);
  return (
    <TouchableOpacity
            onPress={() => navigation.navigate(AppRoutes.CART)}
            style={[AppStyles.icon, AppStyles.row]}
          >
            <Bag2 size="24" color={AppColors.textPrimary} />
            {items.length > 0 &&  <View style={AppStyles.badge}>
              <Text style={AppStyles.badgeText}>{items.length}</Text>
            </View> }
           
          </TouchableOpacity>
  )
}

export default CartIcon

const styles = StyleSheet.create({})