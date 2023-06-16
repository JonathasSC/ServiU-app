import { 
	View, 
	StyleSheet, 
	Text, 
	StatusBar, 
	TouchableOpacity,
	ScrollView
} from "react-native";

import React, { useState } from 'react';
import HeaderTrack from "../../components/HeaderTrack";
import AccountMore from "../../components/AccountMore";
import Balance from '../../components/Balance';
import Actions from '../../components/Actions';
import News from '../../components/News';
import CardView from "../../components/CardView";
import InvoiceData from "../../components/InvoiceData";
import ClientSessions from "../../components/ClientSessions";
import FindOutMore from "../../components/FindOutMore";
import AlsoFollow from "../../components/AlsoFollow";
import Footer from "../../components/Footer";
import TrackYourMoney from "../../components/TrackYourMoney";

export default function Home() {
	const [showvalue, setShowvalue ] = useState(false);
	return (
		<ScrollView>
			<View style={styles.container}>
				<StatusBar style="auto"/>
				<HeaderTrack/>
                <TrackYourMoney/>
				<Footer/>
			</View>
		</ScrollView>
 	);
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});