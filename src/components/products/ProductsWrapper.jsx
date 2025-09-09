import {  StyleSheet, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../loader'
import Error from '../error'
import ProductCard from './ProductCard'
import AppStyles from '../../ui/appStyles'


const ProductsWrapper = () => {
  const {products,error,loading} =  useSelector(state => state.products);
  return (
    <View>
        {loading ? <Loader/> : error ? <Error message="Veriler yüklenirken bir hata oluştu." onretry/> : 
       <View style={AppStyles.productsWrapper}>
       { products.map(item => <ProductCard key={item.id} item={item}/>)}
        </View>}
    
    </View>
  )
}

export default ProductsWrapper

const styles = StyleSheet.create({})