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
import Footer from "../../components/Footer";
import TrackYourMoney from "../../components/TrackYourMoney";
import Safe from "../../components/Safe";
import Line from "../../components/Line";

export default function Home() {
	const [showvalue, setShowvalue ] = useState(false);
	return (
		<ScrollView>
			<View style={styles.container}>
				<StatusBar style="auto"/>
				<HeaderTrack/>
                <TrackYourMoney/>
                <Line/>
                <Safe/>
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