import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AppNavigator from './src/navigation/AppNavigator';
import AppStyles from './src/ui/appStyles';
import { Provider, useDispatch } from 'react-redux';
import store from './src/store';
import { fetchProducts } from './src/store/slices/productSlice';
import { setCartItems } from './src/store/slices/cartSlice';
import { setFavoriteItems } from './src/store/slices/favoriteSlice';

const AppContent = () => {

  const dispach = useDispatch();

  const loadCart = async () => {
    const cartJSON = (await AsyncStorage.getItem('cart')) || '[]';
    
    const cartItems = JSON.parse(cartJSON)

    dispach(setCartItems(cartItems));
  }

  const loadFavorites = async () => {
    const favoriteJSON = (await AsyncStorage.getItem('favorites')) || '[]';
    
    const favoriteItems = JSON.parse(favoriteJSON)

    dispach(setFavoriteItems(favoriteItems));
  }

  useEffect(() => {
    dispach(fetchProducts());

    loadCart();
    loadFavorites();
    
  },[]) 
  return (
     <SafeAreaView style={AppStyles.container}>
        <AppNavigator/>
    </SafeAreaView>
  )
}

const App = () => {
  return (

      <Provider store={store}>
        <AppContent/>
      </Provider>

    
  )
}

export default App

const styles = StyleSheet.create({})