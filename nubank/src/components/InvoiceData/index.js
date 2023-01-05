import React, { useState } from 'react';
import { 
	View, 
	StyleSheet, 
	Text, 
	StatusBar, 
	TouchableOpacity,
	ScrollView
} from "react-native";

import DebitOption from '../DebitOption';

export default function InvoiceData() {
	const [showvalue, setShowvalue] = useState(false)

 	return (
	<View style={styles.container}>
		<Text style={styles.invoiceLabel}>Fatura atual</Text>
		<View style={styles.invoiceArea}>
			{ showvalue ? (
				<TouchableOpacity onPress={()=> setShowvalue(!showvalue)}>
					<View style={styles.invoiceValueArea}>
						<Text style={styles.currencySymbol}>R$ </Text>
						<Text style={styles.balance}>382,75</Text>
					</View>
				</TouchableOpacity>
			) : (
				<TouchableOpacity onPress={()=> setShowvalue(!showvalue)}>
					<View style={styles.invoiceValueArea}>
						<Text style={styles.currencySymbol}>R$</Text>
						<Text style={styles.hiddenBar}></Text>
					</View>
				</TouchableOpacity>
			)}
		</View>
		<DebitOption></DebitOption>
	</View>
  );
}

const styles = StyleSheet.create({
	invoiceLabel: {
		fontWeight: 'bold',
		fontSize: 16,
		color: '#7a797b'
	},
	container: {
		flexDirection: 'column',
		paddingTop: 5,
		paddingBottom: 20,
		paddingHorizontal: 20,
		backgroundColor: '#fff',
	},
	invoiceArea: {
		paddingVertical: 10,
		paddingTop: 8,
		flexDirection: 'row'
	},
	currencySymbol: {
		fontSize: 25,
		fontWeight: 'bold'
	},
	invoiceValue: {
		fontSize: 25,
		fontWeight: 'bold'
	},
	invoiceInfos: {
		flexDirection: 'row'
	},
	invoiceValueArea: {
		flexDirection: 'row'
	},
	currencySymbol: {
		fontSize: 25,
		fontWeight: 'bold'
	},
	balance: {
		fontSize: 25,
		fontWeight: 'bold'
	},
	hiddenBar: {
		backgroundColor: '#dadada',
		width: 100,
		height: 10,
		marginTop: 12,
		marginHorizontal: 10
	}
})