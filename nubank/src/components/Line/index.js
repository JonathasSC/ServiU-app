import React from 'react';
import { 
	StyleSheet, 
	ScrollView,
    View,
} from "react-native";


export default function Line() {
	return (
        <View style={styles.container}>
            <View style={styles.line}></View>
        </View>
 	);
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
	line: {
        borderWidth: 1,
        borderColor: '#EDEFEF'
	},
})