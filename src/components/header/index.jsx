

import React from 'react';
import { View, Text, Image } from 'react-native';
import AppStyles from '../../ui/appStyles';
import { useNavigation } from '@react-navigation/native';
import CartIcon from '../cart/cartIcon';



const Header = () => {
  // Navigate kurulumu
  const navigation = useNavigation();

  return (
    <View style={AppStyles.wrapper}>
      {/* Profile */}
      <View style={[AppStyles.row, AppStyles.rowBetween]}>
        <View style={[AppStyles.row, AppStyles.profileContainer]}>
          {/* Profile Image */}
          <Image
            style={AppStyles.avatar}
            source={require('../images/avatar.png')}
          />

          {/* Profile Info */}
          <View>
            <Text style={AppStyles.title}>Hi, Gülay</Text>
            <Text style={AppStyles.subtitle}>Let's go shopping</Text>
          </View>
        </View>
        <View style={AppStyles.row}>
          {/* Cart Icon */}
         <CartIcon />
        </View>
      </View>
    </View>
  );
};


export default Header;
