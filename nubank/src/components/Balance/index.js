import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'; 


export default function Balance() {
 return (
   <View style={styles.container}>
		<View style={styles.title}>
			<Text style={styles.itemTitle}>Conta</Text>
			<MaterialIcons style={styles.viewMore} name="arrow-forward-ios" size={18} color="gray" />
		</View>

		<View style={styles.balanceArea}>
			<Text style={styles.currencySymbol}>R$</Text>
			<Text style={styles.balance}>1.000,00</Text>
		</View>
	</View>
  );
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: '#fff',
	},
	itemTitle: {
		fontSize: 22,
		fontWeight: 'bold'
	},
	title: {
		flexDirection:'row',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	viewMore: {
		paddingEnd: 10
	},
	balanceArea: {
		paddingVertical: 10,
		flexDirection: 'row'
	},
	currencySymbol: {
		fontSize: 25,
		fontWeight: 'bold'
	},
	balance: {
		fontSize: 25,
		fontWeight: 'bold'
	}
})