import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { use } from 'react'
import AppStyles from '../../ui/appStyles'
import { useNavigation } from '@react-navigation/native';


const FavoritesEmpty = () => {
  const navigation = useNavigation();
  return (
    <View style={AppStyles.emptyWrapper}>
      <Text style={AppStyles.emptyTitle}>No favorites</Text>
      <Text style={AppStyles.emptyDescription}>
        You have no favorite products yet. Go to home page to add your favorites
        </Text>
      <TouchableOpacity onPress={()=>navigation.goBack()}  style={AppStyles.emptyButton}>
        <Text style={AppStyles.emptyButtonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FavoritesEmpty

const styles = StyleSheet.create({})