import React, { useState } from "react";
import { 
	View, 
	StyleSheet, 
	Text, 
	StatusBar, 
	TouchableOpacity
} from "react-native";

export default function DebitOption() {
	const [activate, setActivate] = useState(true)
	return (
	<View style={styles.creditCardArea}>
		<View style={styles.invoiceInfos}>
			<Text style={styles.invoiceLabel}>Limite disponível de R$</Text>
			<Text style={styles.invoiceValue}> 3,90</Text>
		</View>

		<View style={styles.debitArea}>
			<Text style={styles.debitOptionLabel}>Débito automático
			</Text>
			{ activate ? (
				<TouchableOpacity onPress={()=> setActivate(!activate)} style={styles.debitAutomaticOption}>
					<Text style={styles.activateDebit}> ativado</Text>
				</TouchableOpacity>
			) : (
				<TouchableOpacity onPress={()=> setActivate(!activate)}  style={styles.debitAutomaticOption}>
					<Text style={styles.deactivateDebit}> desativado</Text>
				</TouchableOpacity>
			)}
		</View>
		<TouchableOpacity style={styles.payInInstallmentsArea} >
			<Text style={styles.payInInstallmentsLabel}>Parcelar Compras</Text>
		</TouchableOpacity>
	</View>
	
  );
}

const styles = StyleSheet.create({
	invoiceLabel: {
		fontWeight: 'bold',
		fontSize: 16,
		color: '#7a797b'
	},
	debitOptionLabel: {
		fontWeight: 'bold',
		fontSize: 16,
		color: '#7a797b'
	},
	invoiceArea: {
		paddingVertical: 10,
		paddingTop: 8,
		flexDirection: 'row'
	},
	invoiceValue: {
		fontWeight: 'bold',
		fontSize: 16,
		color: '#7a797b'
	},
	invoiceInfos: {
		flexDirection: 'row'
	},
	activateDebit: {
		fontWeight: 'bold',
		fontSize: 16,
		color: '#41A06D'
	},
	deactivateDebit: {
		fontWeight: 'bold',
		fontSize: 16,
		color: '#E94A33',
	},
	debitArea: {
		flexDirection: 'row',
		alignContent: 'center',
	},
	payInInstallmentsArea: {
		backgroundColor: '#f0f1f5',
		height: 35,
		width: 155,
		alignContent: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 30,
		marginTop: 20
	},
	payInInstallmentsLabel: {
		fontWeight: 'bold',
		fontSize: 16,
	}
})