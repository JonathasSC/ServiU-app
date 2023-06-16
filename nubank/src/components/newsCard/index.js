import React from 'react';
import { 
	View, 
	StyleSheet, 
	Text, 
	TouchableOpacity,
} from "react-native";

import { Linking } from 'react-native';

export default function NewsCard({description, url, purpleActive , purpleDescription}) {
	return (
        <TouchableOpacity style={styles.container} onPress= {() => Linking.openURL(url)}>
            <View style={styles.Item}>
                { purpleActive ? (
                    <Text style={styles.descriptionPurple}>{purpleDescription}</Text>
                ) : (
                    null
                )}
                <Text style={styles.description}>{description}</Text>
            </View>
        </TouchableOpacity>
 	);
}

const styles = StyleSheet.create({
	container: {
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
	descriptionPurple: {
		color: "#6e1f9f"
	},
	description: {
		color: "black"
	}
})