import React from 'react';
import { 
	View, 
	StyleSheet, 
} from "react-native";

import FunctionCard from '../FunctionCard';
import TitleAreas from '../TitleAreas';


export default function AlsoFollow() {
 return (
   <View style={styles.container}>
        <TitleAreas name="Acompanhe também" arrow={true}/>
        <FunctionCard 
            iconName="thumbsup" 
            name="Assistente de pagamentos" 
            status={true}/>
   </View>
  );
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 6,
		paddingBottom: 20,
	},
})

