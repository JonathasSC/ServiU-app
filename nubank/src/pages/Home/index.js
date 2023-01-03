import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import { StatusBar } from 'expo-status-bar';
import Balance from '../../components/Balance';
import Actions from '../../components/Actions';
import Cards from '../../components/Cards';

export default function Home() {
  return (
    <View style={styles.container}>
		<StatusBar style="auto"></StatusBar>
		<Header></Header>
    	<Balance></Balance>
		<Actions></Actions>
		<Cards></Cards>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});