import React from 'react';
import { 
	View, 
	StyleSheet, 
	Text, 
	TouchableOpacity,
} from "react-native";

import { FontAwesome5 } from '@expo/vector-icons';


export default function AlsoFollow() {
 return (
   <View style={styles.containerGlobal}>
		<TouchableOpacity style={styles.containerTitle}>
			<View style={styles.title}>
				<Text style={styles.itemLabel}>Acompanhe também</Text>
			</View>
		</TouchableOpacity>

		<TouchableOpacity>
		<View style={styles.containerLabel}>
			<FontAwesome5 style={styles.assistanceIcon} name="assistive-listening-systems" size={24} color="black" />
			<Text style={styles.assistanceLabel}>Assistente de
				<Text style={styles.assistanceLabel}> pagamentos</Text>
			</Text>

			<View style={styles.assistanceNewLabelArea}>
				<Text style={styles.assistanceNewLabel}>Novo</Text>
			</View>
		</View>
	</TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
	containerGlobal: {
		marginVertical: 6,
		paddingBottom: 20,
	},
	containerTitle: {
		borderTopWidth: 2,
		borderColor: '#f2f2f2',
		marginTop: 8,
		paddingHorizontal: 20,
		paddingVertical: 20,
		backgroundColor: '#fff',
	},
	itemLabel: {
		fontSize: 22,
		fontWeight: 'bold'
	},
	title: {
		flexDirection:'row',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	itemTitle: {
		fontSize: 22,
		fontWeight: 'bold'
	},
	title: {
		flexDirection:'row',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	viewMore: {
		paddingEnd: 10
	},
	containerLabel: {
		marginHorizontal: 20,
		paddingVertical: 15,
		flexDirection: 'row',
		backgroundColor: '#f0f1f5',
		borderRadius: 15,
		alignItems: 'center'
	},
	assistanceIcon: {
		paddingHorizontal: 20
	},
	assistanceLabel: {
		width: 100,
		fontSize: 16,
		fontWeight: 'bold',
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

