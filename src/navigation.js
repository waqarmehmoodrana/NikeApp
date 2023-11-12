import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';


import ProductsScreen from './screens/ProductsScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ShoppingCart from './screens/ShoppingCart';
import { Pressable, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { selectNumberOfItems } from './store/cartSlice';


const Stack = createStackNavigator();

const Navigation = () => {
    const numberOfItems = useSelector(selectNumberOfItems);


    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ contentStyle: { backgroundColor: 'white' } }}
            >
                <Stack.Screen
                    name='Products'
                    component={ProductsScreen}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <Pressable
                                onPress={() => navigation.navigate('Cart')}
                                style={{ flexDirection: 'row' }}
                            >
                                <FontAwesome5 name="shopping-cart" size={18} color="gray" />
                                <Text style={{ marginLeft: 5, marginRight: 15, fontWeight: '500' }}>
                                    {numberOfItems}
                                </Text>
                            </Pressable>
                        ),
                    })}
                />

                <Stack.Screen
                    name='Products Details'
                    component={ProductDetailsScreen}
                    options={{ presentation: 'modal' }}
                />

                <Stack.Screen
                    name='Cart'
                    component={ShoppingCart}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
