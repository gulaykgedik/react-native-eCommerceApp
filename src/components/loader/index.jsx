import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'
import AppColors from '../../ui/appColors'
import AppStyles from '../../ui/appStyles'

const Loader = () => {
  return (
    <View style={AppStyles.centerContainer}>
      <ActivityIndicator size="large" color={AppColors.link} />
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({})