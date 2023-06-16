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

export default function FunctionCard({iconName, name, status, money, moneyValue}) {
 return (
	<TouchableOpacity>
		<View style={styles.container}>
			<Octicons style={styles.cardIcon} name={iconName} size={24} color="black"/>
            <Text style={styles.cardLabel}>{name}</Text>

            <View style={styles.space}/>

            { status ? (
                <View style={styles.statusArea}>
                    <Text style={styles.status}>Novo</Text>
                </View>
            ) : (
                null
            )}

            <View style={styles.space}/>

            { money ? (
                <View style={styles.valueArea}>
                    <Text style={styles.value}>R$ {moneyValue}</Text>
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
		fontWeight: 'bold',
        width: 150,
        textAlign: 'left',
	},
    statusArea: {
		backgroundColor: '#820ad1',
		paddingHorizontal: 4,
		borderRadius: 4,
    	marginStart: 60,
	},
	status: {
		color: 'white',
	},
    valueArea: {
		paddingHorizontal: 15,
		borderRadius: 4,
	},
	value: {
        fontWeight: 'bold',
        fontSize: 16,
	},
    space:  {
        flex: 1
    }
})