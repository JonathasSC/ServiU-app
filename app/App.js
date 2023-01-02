import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from './components/card'

export default function App() {
  return (
    <View style={styles.container}>
      	<Text style={styles.title}>Meu primeiro App</Text>
      	<StatusBar style="auto" />
		<ScrollView>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
			<Card></Card>
		</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
	paddingTop: 50,
    flex: 1,
	backgroundColor: '#dadada',
	justifyContent: 'center',
	alignItems: 'center',
  },
  title: {
	color: 'black',
	marginBottom: 12
  }
});
