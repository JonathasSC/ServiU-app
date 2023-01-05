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
import { Linking } from 'react-native';

export default function FindOutMore() {
 return (
	<View>
		<TouchableOpacity style={styles.container}>
			<View style={styles.title}>
				<Text style={styles.itemTitle}>Descubra Mais</Text>
				<MaterialIcons style={styles.viewMore} name="arrow-forward-ios" size={18} color="gray" />
			</View>
		</TouchableOpacity>
		<ScrollView style={styles.containerScroll} horizontal={true} showsHorizontalScrollIndicator={false}>

			<View style={styles.ItemsScroll}>
				<View style={styles.ItemScroll}>
					<Text style={styles.titleScrollItem}>Convidar amigos</Text>
					<Text style={styles.cardLabel}>Tire seus amigos da fila do banco  e livre eles da burocracia</Text>

					<TouchableOpacity style={styles.buttonScroll} onPress= {() => Linking.openURL('http://localhost')}>
						<Text style={styles.buttonScrollLabel}>Convidar</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View style={styles.ItemsScroll}>
				<View style={styles.ItemScroll}>
					<Text style={styles.titleScrollItem}>Função débito</Text>
					<Text style={styles.cardLabel}>Você no controle das suas compras do dia a dia de um jeito fácil e transparente</Text> 
				

					<TouchableOpacity style={styles.buttonScroll} onPress= {() => Linking.openURL('http://localhost')}>
						<Text style={styles.buttonScrollLabel}>Convidar</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	</View>
	
  );
}

const styles = StyleSheet.create({
	container: {
		paddingBottom: 5,
		borderTopWidth: 2,
		borderColor: '#f2f2f2',
		backgroundColor: '#fff',
		paddingTop: 20,
	},
	itemTitle: {
		fontSize: 22,
		fontWeight: 'bold'
	},
	title: {
		paddingHorizontal: 20,
		flexDirection:'row',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	viewMore: {
		paddingEnd: 10
	},	


	// Scroll

	containerScroll: {
		marginBottom: 8
	},
	ItemsScroll: {
		marginTop: 25,
		width: 260,
		marginRight: 10,
		marginLeft: 20,
		paddingVertical: 15,
		flexDirection: 'row',
		backgroundColor: '#f0f1f5',
		borderRadius: 15,
	},
	ItemScroll: {
		marginHorizontal: 20,
		flexDirection: 'column',
	},
	titleScrollItem: {
		fontWeight: 'bold',
		fontSize: 16,
		paddingVertical: 4
	},
	buttonScroll: {
		flexDirection: 'column',
		justifyContent: 'flex-end',
		backgroundColor: '#820ad1',
		height: 35,
		width: 90,
		borderRadius: 30,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 10,
	},
	buttonScrollLabel: {
		color: 'white'
	},
	cardLabel: {
		marginBottom: 20
	}
})