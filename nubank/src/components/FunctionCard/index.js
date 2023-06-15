import React from 'react';
import { 
	View, 
	StyleSheet, 
	Text, 
	StatusBar, 
	TouchableOpacity,
	ScrollView
} from "react-native";

import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';  

export default function FunctionCard({iconName, name, status}) {
 return (
	<TouchableOpacity>
		<View style={styles.container}>
			<Octicons style={styles.cardIcon} name={iconName} size={24} color="black"/>
            <Text style={styles.cardLabel}>{name}</Text>
            { status ? (
                <View style={styles.assistanceNewLabelArea}>
                    <Text style={styles.assistanceNewLabel}>Novo</Text>
                </View>
            ) : (
                null
            )}
		</View>
	</TouchableOpacity>
  );
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 20,
		paddingVertical: 15,
		flexDirection: 'row',
		backgroundColor: '#f0f1f5',
		borderRadius: 15,
		alignItems: 'center'
	},
	cardIcon: {
		paddingHorizontal: 20
	},
	cardLabel: {
		fontSize: 16,
		textAlign: 'center',
		fontWeight: 'bold'
	},
    assistanceNewLabelArea: {
		backgroundColor: '#820ad1',
		paddingHorizontal: 4,
		borderRadius: 4,
		justifyContent: 'center',
		alignContent: 'center',
		marginStart: 130,
		alignItems: 'center'
	},
	assistanceNewLabel: {
		color: 'white',
	}
})
