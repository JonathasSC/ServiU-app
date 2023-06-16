import React from 'react';
import { 
	View, 
	StyleSheet, 
} from "react-native";

import FunctionCard from '../FunctionCard';
import TitleAreas from '../TitleAreas';

export default function Safe() {
 return (
    <View style={[styles.container]}>
        <TitleAreas name="Seguros" arrow={false}/>
        <View style={styles.card}>
            <FunctionCard iconName="heart" name="Seguro de vida"/>
        </View>

        <View style={styles.card}>
            <FunctionCard iconName="device-mobile" name="Seguro de celular" />
        </View>

        <View style={styles.card}>
            <FunctionCard iconName="light-bulb" name="Investimentos"/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: '#dadada',
        borderBottomWidth: 1
    },
    card: {
        paddingBottom: 15
    }
})