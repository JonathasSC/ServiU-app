import React, { useState } from 'react';
import { 
	View, 
	StyleSheet, 
	Text, 
	StatusBar, 
	TouchableOpacity,
	ScrollView
} from "react-native";

import { MaterialIcons } from '@expo/vector-icons'; 


export default function Balance() {
	const [showvalue, setShowvalue ] = useState(false);
 	return (
   		<View style={styles.container}>
			<TouchableOpacity>
				<View style={styles.balanceArea}>
					<Text style={styles.currencySymbol}>R$ </Text>
					<Text style={styles.balance}>1.000,00</Text>
				</View>
			</TouchableOpacity>
		</View>
  );
}

const styles = StyleSheet.create({
	container: {
        padding: 20,
		paddingTop: 0, 
		backgroundColor: '#fff',
	},
	balanceArea: {
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
		width: 150,
	}
})