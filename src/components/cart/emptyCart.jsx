import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { use } from 'react'
import AppStyles from '../../ui/appStyles'
import { useNavigation } from '@react-navigation/native';


const EmptyCart = () => {
  const navigation = useNavigation();
  return (
    <View style={AppStyles.emptyWrapper}>
      <Text style={AppStyles.emptyTitle}>Cart empty</Text>
      <Text style={AppStyles.emptyDescription}>Go to home page to add products your cart</Text>

      <TouchableOpacity onPress={()=>navigation.goBack()}  style={AppStyles.emptyButton}>
        <Text style={AppStyles.emptyButtonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default EmptyCart

const styles = StyleSheet.create({})