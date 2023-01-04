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

export default function CardView() {
 return (
	<TouchableOpacity style={styles.container}>
		<View style={styles.title}>
			<Text style={styles.itemTitle}>Cartão de crédito</Text>
			<MaterialIcons style={styles.viewMore} name="arrow-forward-ios" size={18} color="gray" />
		</View>
	</TouchableOpacity>
  );
}

const styles = StyleSheet.create({
	container: {
		borderTopWidth: 2,
		borderColor: '#f2f2f2',
		marginTop: 25,
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