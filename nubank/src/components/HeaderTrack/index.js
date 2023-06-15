import React, { useState } from "react";
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
import TitleAreas from "../TitleAreas";

import TrackYourMoney from "../TrackYourMoney";
import HiddenBar from "../HiddenBar";
import Balance from "../Balance";
import InvoiceData from "../InvoiceData";

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 64;

export default function HeaderTrack() {
	const [showvalue, setShowvalue] = useState(false)
	return(
		<View style={styles.main}>
			<View style={styles.container}>
				<View style={styles.content}>				
					<TouchableOpacity activeOpacity={0.8} style={styles.buttonUser}>
						<Feather name="user" size={27} color='#fff'></Feather>
					</TouchableOpacity>

					<View style={styles.headerRight}>
						{ showvalue ? ( 
							<TouchableOpacity style={styles.buttonOptions} onPress={()=> setShowvalue(!showvalue)}>
								<FontAwesome5 name="eye" size={25} color="white" />
							</TouchableOpacity>
						) : (
							<TouchableOpacity style={styles.buttonOptions} onPress={()=> setShowvalue(!showvalue)}>
								<FontAwesome5 name="eye-slash" size={25} color="white" />
							</TouchableOpacity>
						)}

						<TouchableOpacity style={styles.buttonOptions}>
							<FontAwesome name="question-circle-o" size={25} color="white"></FontAwesome>
						</TouchableOpacity>

						<TouchableOpacity style={styles.buttonOptions}>
							<MaterialCommunityIcons name="email-plus-outline" size={25} color="white" />
						</TouchableOpacity>
					</View>
				</View>
			</View>

			<View style={styles.accountArea}>
                <TitleAreas name="Acompanhe seu dinheiro" arrow={false}></TitleAreas>
			</View>
            
		</View>
	)
}

const styles = StyleSheet.create({
	accountArea: {
		backgroundColor: '#fff',
	},
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
		borderRadius: 30
	},
	buttonOptions: {
		paddingHorizontal: 30,
		alignItems: 'center',
		justifyContent: 'center',
		paddingEnd: 0
	}
})