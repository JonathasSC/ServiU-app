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
import { MaterialCommunityIcons } from '@expo/vector-icons';


const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header() {
	return(
		<View style={styles.main}>
			<View style={styles.container}>
				<View style={styles.content}>				
					<TouchableOpacity activeOpacity={0.8} style={styles.buttonUser}>
						<Feather name="user" size={27} color='#fff'></Feather>
					</TouchableOpacity>

					<View style={styles.headerRight}>
						<TouchableOpacity style={styles.buttonOptions}>
							<FontAwesome5 name="eye" size={25} color="white" />
						</TouchableOpacity>
					
						<TouchableOpacity style={styles.buttonOptions}>
							<FontAwesome name="question-circle-o" size={25} color="white"></FontAwesome>
						</TouchableOpacity>

						<TouchableOpacity style={styles.buttonOptions}>
							<MaterialCommunityIcons name="email-plus-outline" size={25} color="white" />
						</TouchableOpacity>
					</View>
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
		paddingStart: 20,
		paddingEnd: 20,
		paddingBottom: 14
	},
	content: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	headerRight: {
		flexDirection: 'row',
	},
	username: {
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold',
		padding: 20,
		paddingBottom: 25
	},
	buttonUser: {
		width: 44,
		height: 44,
		backgroundColor: 'rgba(255,255,255,0.3)',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30,
		borderWidth: 2,
		borderColor: '#6913b2'
	},
	buttonOptions: {
		paddingHorizontal: 30,
		alignItems: 'center',
		justifyContent: 'center',
		paddingEnd: 0
	}
})