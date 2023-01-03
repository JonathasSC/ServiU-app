import React from 'react';
import { 
	View, 
	StyleSheet, 
	Text, 
	StatusBar, 
	TouchableOpacity,
	ScrollView
} from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 


export default function Actions() {
 return (
	<ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>

		<TouchableOpacity style={styles.actionButton}>
			<View style={styles.areaButton}>
				<Ionicons name="cash-outline" size={28} color="black" />
			</View>
			<Text style={styles.labelButton}>Cobrar</Text>
		</TouchableOpacity>

		<TouchableOpacity style={styles.actionButton}>
			<View style={styles.areaButton}>
				<Ionicons style={styles.iconButton}name="md-globe-outline" size={28} color="black" />
			</View>
			<Text style={styles.labelButton}>Transferir</Text>
			<Text style={styles.labelButton}>Internac.</Text>
		</TouchableOpacity>

		<TouchableOpacity style={styles.actionButton}>
			<View style={styles.areaButton}>
				<MaterialCommunityIcons name="heart-outline" size={28} style={styles.iconButton}color="black" />
			</View>
			<Text style={styles.labelButton}>Doação</Text>
		</TouchableOpacity>
		
	</ScrollView>
  );
}


const styles = StyleSheet.create({
	container: {
		maxHeight: 110,
		marginBottom: 14,
		marginTop: 8,
		paddingEnd: 20,
		paddingStart: 20
	},
	actionButton: {
		alignItems: 'center',
		marginRight: 15
	},
	areaButton: {
		backgroundColor: "#f0f1f5",
		height: 70,
		width: 70,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 40
	}
})