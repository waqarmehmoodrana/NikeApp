import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';
// import products from './src/data/products';
// import ProductsScreen from './src/screens/ProductsScreen';
// import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
// import ShoppingCart from './src/screens/ShoppingCart';


import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <StatusBar style="auto" />
    </Provider>
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
