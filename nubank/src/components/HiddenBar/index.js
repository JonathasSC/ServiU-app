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


export default function HiddenBar() {
	const [showvalue, setShowvalue ] = useState(false);
 	return (
   		<View style={styles.container}>
			<TouchableOpacity>
				<View style={styles.balanceArea}>
					<Text style={styles.currencySymbol}>R$</Text>
					<Text style={styles.hiddenBar}></Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 5,
		padding: 20,
		backgroundColor: '#fff',
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
	},
	hiddenBar: {
		backgroundColor: '#dadada',
		width: 150,
		height: 10,
		marginTop: 12,
		marginHorizontal: 10
	}
})