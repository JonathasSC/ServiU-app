import React from 'react';
import { 
	View, 
	StyleSheet, 
	Text, 
	StatusBar, 
	TouchableOpacity,
	ScrollView
} from "react-native";

import { MaterialIcons } from '@expo/vector-icons'; 

import TitleAreas from '../TitleAreas';
import FindOutMoreCard from '../FindOutMoreCard';
import FunctionCard from '../FunctionCard';

import Line from '../Line';

export default function ClientSessions() {
	return (
		<View TouchableOpacity style={styles.container}>
            <TitleAreas name="Acompanhe também" arrow={true}/>
            <FunctionCard 
                iconName="thumbsup" 
                name="Assistente de pagamentos" 
                status={true}/>

            <Line/>

            <TitleAreas name="Empréstimos" arrow={true} />
			<View style={styles.loanInfos}>
				<Text style={styles.description}>Até R$ 8.000,00 disponível para você</Text>
			</View>

            <Line/>

            <TitleAreas name="Seguro de vida" arrow={true} />
            <Text style={styles.description}>Um seguro completo e que cabe no bolso</Text>

            <Line/>

            <TitleAreas name="Descubra Mais" arrow={true} />
            <ScrollView 
                style={styles.containerScroll} 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}>

                <FindOutMoreCard 
                    title="Convidar amigos" 
                    description="Tire seus amigos da fila do banco e livre eles da burocracia"
                    url="http://localhost"/>

                <FindOutMoreCard 
                    title="Função débito" 
                    description="Você no controle das suas compras do dia a dia de um jeito fácil e transparente"
                    url="http://localhost"/>

            </ScrollView>
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		paddingBottom: 5
	},
	description: {
		fontWeight: 'bold',
		fontSize: 16,
		color: '#7a797b',
        flexDirection: 'row',
		paddingHorizontal: 20,
	},
    
})