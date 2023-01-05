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
 	return (
	<View style={styles.container}>
		<Text style={styles.invoiceLabel}>Fatura atual</Text>
		<View style={styles.invoiceArea}>
			<Text style={styles.currencySymbol}>R$</Text>

			<Text style={styles.invoiceValue}>287,30</Text>
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
})