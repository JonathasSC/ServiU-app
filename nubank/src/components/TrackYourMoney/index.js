import React from 'react';
import { 
	View, 
	StyleSheet, 
	Text, 
	TouchableOpacity,
} from "react-native";

import FunctionCard from '../FunctionCard';
import TitleAreas from '../TitleAreas';

export default function TrackYourMoney() {
 return (
    <View style={[styles.container]}>
        <TitleAreas name="Acompanhe seu dinheiro" arrow={false}/>
        <View style={styles.card}>
            <FunctionCard iconName="archive" name="Caixinhas" money={true} moneyValue={"43,4"}/>
        </View>

        <View style={styles.card}>
            <FunctionCard iconName="light-bulb" name="Investimentos" money={true}  moneyValue={"545,23"} />
        </View>

        <View style={styles.card}>
            <FunctionCard iconName="light-bulb" name="Investimentos" money={true}  moneyValue={"366,6"} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        paddingBottom: 15
    }
})