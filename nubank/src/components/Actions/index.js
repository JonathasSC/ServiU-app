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
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 


export default function Actions() {
 return (
	<ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>

		{/* pagar */}
		<TouchableOpacity style={styles.actionButton}>
			<View style={styles.areaButton}>
				<MaterialCommunityIcons name="barcode" size={30} color="black" />
			</View>
			<Text style={styles.labelButton}>Pagar</Text>
		</TouchableOpacity>

		{/* tRANSFERIR */}
		<TouchableOpacity style={styles.actionButton}>
			<View style={styles.areaButton}>
				<MaterialCommunityIcons name="cash-fast" size={32} color="black"/>
			</View>
			<Text style={styles.labelButton}>Transferir</Text>
		</TouchableOpacity>

		{/* RECARGA */}
		<TouchableOpacity style={styles.actionButton}>
			<View style={styles.areaButton}>
				<MaterialIcons name="smartphone" size={26} color="black" />
			</View>
			<Text style={styles.labelButton}>Recarga</Text>
			<Text style={styles.labelButton}>de celular</Text>
		</TouchableOpacity>

		{/* DEPOSITAR */}
		<TouchableOpacity style={styles.actionButton}>
			<View style={styles.areaButton}>
				<MaterialCommunityIcons name="cash-plus" size={30} color="black" />
			</View>
			<Text style={styles.labelButton}>Depositar</Text>
		</TouchableOpacity>

		{/* COBRAR */}
		<TouchableOpacity style={styles.actionButton}>
			<View style={styles.areaButton}>
				<MaterialCommunityIcons name="account-cash-outline" size={28} color="black" />
			</View>
			<Text style={styles.labelButton}>Cobrar</Text>
		</TouchableOpacity>

		{/* TRASF INTERN */}
		<TouchableOpacity style={styles.actionButton}>
			<View style={styles.areaButton}>
				<Ionicons style={styles.iconButton}name="md-globe-outline" size={28} color="black" />
			</View>
			<Text style={styles.labelButton}>Transferir</Text>
			<Text style={styles.labelButton}>Internac.</Text>
		</TouchableOpacity>

		{/* DOACAO */}
		<TouchableOpacity style={styles.actionButton}>
			<View style={styles.areaButton}>
				<MaterialCommunityIcons name="heart-outline" size={28} style={styles.iconButton}color="black" />
			</View>
			<Text style={styles.labelButton}>Doação</Text>
		</TouchableOpacity>

		{/* CAIXINHAS */}
		<TouchableOpacity style={styles.actionButton}>
			<View style={styles.areaButton}>
				<MaterialIcons name="attach-money" size={30} color="black" />
			</View>
			<Text style={styles.labelButton}>Caixinhas</Text>
		</TouchableOpacity>

	</ScrollView>
  );
}


const styles = StyleSheet.create({
	container: {
		alignContent: 'center',
		marginBottom: 14,
		marginTop: 8,
		paddingEnd: 10,
		paddingStart: 15,
	},
	actionButton: {
		alignItems: 'center',
		marginRight: 32,
	},
	areaButton: {
		backgroundColor: "#f0f1f5",
		height: 80,
		width: 80,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 40
	},
	labelButton: {
		marginTop: 4,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 16
	}
})