import React from 'react';
import { 
	View, 
	StyleSheet, 
	Text,
} from "react-native";

export default function Footer() {
 return (
   <View style={styles.footerArea}>
		<Text style={styles.footerLabel}>Feito por Jonathas Santos C.</Text>
   </View>
  );
}

const styles = StyleSheet.create({
	footerArea: {
		justifyContent: 'center',
		textAlign: 'center',
		alignItems: 'center',
		padding: 30
	},
	footerLabel: {
		fontWeight: 'bold'
	}
})