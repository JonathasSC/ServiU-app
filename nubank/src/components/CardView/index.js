import React from 'react';
import { 
	View, 
	StyleSheet, 
	Text, 
	StatusBar, 
	TouchableOpacity,
	ScrollView
} from "react-native";

import TitleAreas from '../TitleAreas';

import { MaterialIcons } from '@expo/vector-icons'; 

export default function CardView() {
 return (
	<TouchableOpacity style={styles.container}>
		<View style={styles.title}>
            <TitleAreas name="Cartão de crédito" arrow={true} />
		</View>
	</TouchableOpacity>
  );
}

const styles = StyleSheet.create({
	container: {
		borderTopWidth: 2,
		borderColor: '#f2f2f2',
		marginTop: 25,
	},
})