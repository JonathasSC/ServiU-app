import React from 'react';
import { 
	View, 
	StyleSheet, 
	Text, 
	TouchableOpacity,
} from "react-native";

import FunctionCard from '../FunctionCard';

export default function TrackYourMoney() {
 return (
    <View style={[styles.container]}>
        <FunctionCard iconName="archive" name="Caixinhas" />
        <FunctionCard iconName="archive" name="Caixinhas" />
    </View>
  );
}

const styles = StyleSheet.create({
})