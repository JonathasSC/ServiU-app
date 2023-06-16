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

export default function FindOutMoreCard({title, description, url}) {

    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>{title}</Text>
                <Text style={styles.itemDescription}>{description}</Text>

                <TouchableOpacity style={styles.buttonArea} onPress= {() => Linking.openURL(url)}>
                    <Text style={styles.buttonLabel}>Convidar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
	
	container: {
		width: 260,
		marginRight: 10,
		marginLeft: 20,
		paddingVertical: 15,
		flexDirection: 'row',
		backgroundColor: '#f0f1f5',
		borderRadius: 15,
	},
	item: {
		marginHorizontal: 20,
		flexDirection: 'column',
	},
	itemTitle: {
		fontWeight: 'bold',
		fontSize: 16,
		paddingVertical: 4
	},
	buttonArea: {
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
	buttonLabel: {
		color: 'white'
	},
	itemDescription: {
		marginBottom: 20
	},
})