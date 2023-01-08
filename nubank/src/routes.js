import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import Home from './pages/Home'
import TrackYourMoney from './pages/TrackYourMoney';
import Shopping from './pages/Shopping';

const Tab = createBottomTabNavigator();

export default function Routes() {
	return(
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: '#820ad1',
				style: {
					backgroundColor: '#fff',
					borderTopColor: 'transparent',
				},
				tabBarStyle: [{
					paddingTop: 10,
				}],
			}}
		>
			<Tab.Screen 
				name="inicio"
				component={Home}
				options={{
					tabBarIcon: ({size, color}) => (
						<MaterialCommunityIcons name="swap-vertical-bold" size={size} color={color} />
					),
					tabBarLabel:'',
				}}
			></Tab.Screen>

			<Tab.Screen 
				name="Acompanhe seu dinheiro" 
				component={TrackYourMoney}
				options={{
					tabBarIcon: ({size, color}) => (
						<MaterialIcons name="attach-money" size={28} color={color}/>
					),
					tabBarLabel: '',
				}}
			></Tab.Screen>
			<Tab.Screen 
				name="Compras" 
				component={Shopping}
				options={{
					tabBarIcon: ({size, color}) => (
						<Feather name="shopping-bag" size={24} color={color} />
					),
					tabBarLabel: '',
				}}
			></Tab.Screen>

		</Tab.Navigator>
	)
};
