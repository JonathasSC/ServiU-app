import React, { ReactNode } from 'react';
import { 
	View, 
	StyleSheet, 
	Text, 
	StatusBar, 
	TouchableOpacity,
	ScrollView
} from "react-native";

import { Linking } from 'react-native';
import NewsCard from '../NewsCard';

export default function News() {
	return (
		<ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>

			<TouchableOpacity style={styles.Items} onPress= {() => Linking.openURL('https://www.google.com')}>
				<View style={styles.Item}>
					<Text style={styles.cardLabel}>Concorra a prêmios com o</Text>
					<Text style={styles.cardLabel}>Nubank Vida apartir de R$...</Text>
				</View>
			</TouchableOpacity>

			<TouchableOpacity style={styles.Items}>
				<View style={styles.Item}>
					<Text style={styles.cardLabelPurple}>Convide amigos para o nubank 
						<Text style={styles.cardLabel}> e desbloqueie ...</Text>
					</Text>
				</View>
			</TouchableOpacity>

			<TouchableOpacity style={styles.Items}>
				<View style={styles.Item}>
					<Text style={styles.cardLabelPurple}>Convide amigos para o nubank 
						<Text style={styles.cardLabel}> e desbloqueie ...</Text>
					</Text>
				</View>
			</TouchableOpacity>

		</ScrollView>
 	);
}

const styles = StyleSheet.create({
	Items: {
		marginTop: 25,
		width: 260,
		marginRight: 20,
		marginLeft: 20,
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
	},
	cardLabelPurple: {
		color: "#6e1f9f"
	},
	cardLabel: {
		color: "black"
	} 

})