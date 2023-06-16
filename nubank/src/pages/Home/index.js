import { 
	View, 
	StyleSheet, 
	Text, 
	StatusBar, 
	TouchableOpacity,
	ScrollView
} from "react-native";

import React, { useState } from 'react';
import Header from '../../components/Header';
import AccountMore from "../../components/AccountMore";
import Balance from '../../components/Balance';
import Actions from '../../components/Actions';
import Cards from '../../components/Cards';
import News from '../../components/News';
import CardView from "../../components/CardView";
import HiddenBar from "../../components/HiddenBar";
import InvoiceData from "../../components/InvoiceData";
import ClientSessions from "../../components/ClientSessions";
import FindOutMore from "../../components/FindOutMore";
import AlsoFollow from "../../components/AlsoFollow";
import Footer from "../../components/Footer";
import TitleAreas from "../../components/TitleAreas";
import FunctionCard from "../../components/FunctionCard";

export default function Home() {
	const [showvalue, setShowvalue ] = useState(false);
	return (
		<ScrollView>
			<View style={styles.container}>
				<StatusBar 
                    style="auto"/>
				<Header/>
				<Actions/>
                <FunctionCard
                    iconName="credit-card"
                    name="Meus cartões"/>
				<News/>
				<CardView/>
				<InvoiceData/>
				<AlsoFollow/>
				<ClientSessions/>
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