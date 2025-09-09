import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppStyles from '../../ui/appStyles'

const Error = ({message, onretry}) => {
  return (
    <View style={AppStyles.centerContainer}>
      <Text style={AppStyles.errorText}>{message}</Text>

      {onretry &&
      <TouchableOpacity>
        <Text style={AppStyles.reytyButton}>Tekrar Dene</Text>
      </TouchableOpacity>
   }
      
    </View>
  )
}

export default Error

const styles = StyleSheet.create({})