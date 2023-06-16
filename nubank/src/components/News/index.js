import React from 'react';
import { 
	StyleSheet, 
	ScrollView
} from "react-native";


import NewsCard from '../newsCard';

export default function News() {
	return (
		<ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>

            <NewsCard 
                description="Concorra a prêmios
                com o Nubank Vida apartir de R$..." 
                url="http://localhost"/>

            <NewsCard 
                purpleDescription="Convide amigos para o nubank"
                description="e desbloqueie..." 
                url="http://localhost"
                purpleActive={true} />

		</ScrollView>
 	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 8,
        marginTop: 25,
	},
})