import React from 'react';
import { 
	View, 
	StyleSheet, 
	Text, 
	StatusBar, 
	TouchableOpacity,
	ScrollView
} from "react-native";

import { MaterialIcons } from '@expo/vector-icons'; 


export default function ClientSessions() {
	return (
		<View TouchableOpacity style={styles.containerGlobal}>
			<TouchableOpacity style={styles.container}>
				<View style={styles.title}>
					<Text style={styles.itemTitle}>Empréstimos</Text>
					<MaterialIcons style={styles.viewMore} name="arrow-forward-ios" size={18} color="gray" />
				</View>
			</TouchableOpacity>
			<View style={styles.loanInfos}>
				<Text style={styles.loanLabel}>Até R$ 8.000,00 disponível para você</Text>
			</View>

			<TouchableOpacity style={styles.container}>
				<View style={styles.title}>
					<Text style={styles.itemTitle}>Seguro de vida</Text>
					<MaterialIcons style={styles.viewMore} name="arrow-forward-ios" size={18} color="gray" />
				</View>
			</TouchableOpacity>
			<View style={styles.loanInfos}>
				<Text style={styles.loanLabel}>Um seguro completo e que cabe no bolso</Text>
			</View>
		</View>
	);
}


const styles = StyleSheet.create({
	containerGlobal: {
		paddingBottom: 5
	},
	loanLabel: {
		fontWeight: 'bold',
		fontSize: 16,
		color: '#7a797b'
	},
	debitOptionLabel: {
		fontWeight: 'bold',
		fontSize: 16,
		color: '#7a797b'
	},
	loanInfos: {
		flexDirection: 'row',
		paddingHorizontal: 20,
		paddingBottom: 20
	},
	container: {
		borderTopWidth: 2,
		borderColor: '#f2f2f2',
		marginTop: 8,
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
})