import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const orders = [
  {
    id: "#12345",
    product: "Essence Mascara Lash Princess",
    price: 9.99,
    status: "Delivered",
    date: "09 Sep 2025",
    image: "https://witcdn.dermoeczanem.com/essence-lash-princess-false-lash-effect-maskara-essence-192656-82-B.png",
  },
  {
    id: "#12346",
    product: "Eyeshadow Palette with Mirror",
    price: 19.99,
    status: "Shipped",
    date: "07 Sep 2025",
    image: "https://atlas-content-cdn.pixelsquid.com/assets_v2/284/2840705855769285730/jpeg-600/G03.jpg?modifiedAt=1",
  },
  {
    id: "#12347",
    product: "Red Lipstick",
    price: 12.49,
    status: "Processing",
    date: "05 Sep 2025",
    image: "https://atlas-content-cdn.pixelsquid.com/stock-images/red-lipstick-qvVaLJ7-600.jpg",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Delivered":
      return "green";
    case "Shipped":
      return "orange";
    case "Processing":
      return "red";
    default:
      return "gray";
  }
};

const OrdersScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.product}>{item.product}</Text>
        <Text style={styles.text}>Order ID: {item.id}</Text>
        <Text style={styles.text}>Date: {item.date}</Text>
        <Text style={[styles.status, { color: getStatusColor(item.status) }]}>
          {item.status}
        </Text>
      </View>
      <Text style={styles.price}>${item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Orders</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: "center",
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  product: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  text: {
    fontSize: 13,
    color: "#555",
  },
  status: {
    marginTop: 4,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});

export default OrdersScreen;
