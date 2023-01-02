import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function Card() {
	return (
		<View style={styles.card}>
			<Text style={styles.cardTitle}>React Native</Text>
			<Text style={styles.cardSubtitle}>Criando apps Android e IOS</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		marginVertical: 10,
	  	backgroundColor: '#fff',
	  	padding: 12,
	  	borderRadius: 10,
	},
	cardTitle: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	cardSubtitle: {
	  color: 'lightgray'
	}
  });