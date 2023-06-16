import React from 'react';
import { 
	View, 
	StyleSheet, 
	Text, 
	TouchableOpacity,
} from "react-native";

import { MaterialIcons } from '@expo/vector-icons'; 

export default function TitleAreas({name, arrow}) {
 return (
	<TouchableOpacity style={styles.container}>
		<View style={styles.title}>
			<Text style={styles.itemTitle}>{name}</Text>
            { arrow ? ( 
                <MaterialIcons style={styles.viewMore} name="arrow-forward-ios" size={18} color="gray" />
            ) : (
                null
            )}
		</View>
	</TouchableOpacity>
  );
}

const styles = StyleSheet.create({
	container: {
		borderColor: '#f2f2f2',
		padding: 20,
		backgroundColor: '#fff',
	},
	itemTitle: {
		fontSize: 22,
		fontWeight: 'bold'
	},
	title: {
        justifyContent: 'space-between',
		alignContent: 'center',
		alignItems: 'center',
        flexDirection:'row',
	},
    viewMore: {
        marginRight: 10
    }
})