import React from 'react';
import { 
	View, 
	StyleSheet, 
	Text, 
	StatusBar, 
	TouchableOpacity,
	ScrollView
} from "react-native";

export default function News() {
	return (
		<ScrollView style={styles.container} horizontal={true}>
			<TouchableOpacity style={styles.Items}>
				<View style={styles.Item}>
					<Text style={styles.cardLabel}>Concorra a prêmios com o</Text>
					<Text style={styles.cardLabel}>Nubank Vida apartir de R$...</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity style={styles.Items}>
				<View style={styles.Item}>
					<Text style={styles.cardLabel}>Concorra a prêmios com o</Text>
					<Text style={styles.cardLabel}>Nubank Vida apartir de R$...</Text>
				</View>
			</TouchableOpacity>
		</ScrollView>
 	);
}

const styles = StyleSheet.create({
	Items: {
		marginTop: 20,
		width: 250,
		marginStart: 20,
		paddingVertical: 15,
		flexDirection: 'row',
		backgroundColor: '#f0f1f5',
		borderRadius: 15,
	},
	Item: {
		marginHorizontal: 20,
		flexDirection: 'column',
		backgroundColor: '#f0f1f5',
		borderRadius: 15,
	}
})