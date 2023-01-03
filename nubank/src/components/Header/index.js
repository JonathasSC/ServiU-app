import React from "react";
import { 
	View, 
	StyleSheet, 
	Text, 
	StatusBar, 
	TouchableOpacity
} from "react-native";

import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';


const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header() {
	return(
		<View style={styles.main}>
			<View style={styles.container}>
				<View style={styles.content}>
					<TouchableOpacity activeOpacity={0.8} style={styles.buttonUser}>
						<Feather name="user" size={27} color='#fff'></Feather>
					</TouchableOpacity>

					<TouchableOpacity>
						<FontAwesome5 name="eye" size={24} color="white" />
					</TouchableOpacity>
					
					<TouchableOpacity>
						<FontAwesome name="question-circle-o" size={27} color="white"></FontAwesome>
					</TouchableOpacity>
				</View>
			</View>
			
			<View>
				<Text style={styles.username}>Jonathas Santos</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	main: {
		backgroundColor: '#820ad1',
	},
	container: {
		paddingTop: StatusBarHeight,
		flexDirection: 'row',
		paddingStart: 16,
		paddingEnd: 16,
		paddingBottom: 14
	},
	content: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	username: {
		fontSize: 18,
		color: 'white',
		fontWeight: 'bold'
	},
	buttonUser: {
		width: 44,
		height: 44,
		backgroundColor: 'rgba(255,255,255,0.3)',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30
	}
})
