import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from './../store/productsSlice';
const ProductsScreen = ({ navigation }) => {


  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  return (

    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable onPress={() => {
            //  Update Selected  Product
            dispatch(productsSlice.actions.setSelectedProduct(item.id));

            navigation.navigate('Products Details')
          }}
            style={styles.itemsContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </Pressable>
        )}
        numColumns={2}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemsContainer: {
    width: "50%",
    padding: 1,
  }

});



export default ProductsScreen;
