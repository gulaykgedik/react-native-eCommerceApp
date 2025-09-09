import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import AppRoutes from "../../navigation/routes";


const ProfileScreen = ({navigation}) => {
  
  return (
    <ScrollView style={styles.container}>
      {/* Üstte profil bilgisi */}
      <View style={styles.header}>
        <Image
          source={require('../../components/images/avatar.png')}
          style={styles.avatar}
        />
        <Text style={styles.name}>Gülay</Text>
        <Text style={styles.email}>gulay@example.com</Text>
      </View>

      {/* Menü seçenekleri */}
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate(AppRoutes.ORDERS)}>
          <Text style={styles.menuText} >My Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuItem, { borderBottomWidth: 0 }]}>
          <Text style={[styles.menuText, { color: "red" }]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "#777",
  },
  menu: {
    marginTop: 20,
  },
  menuItem: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuText: {
    fontSize: 16,
    color: "#333",
  },
});

export default ProfileScreen;
