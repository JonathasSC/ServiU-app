import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
  return (
    <View style={styles.container}>
		<StatusBar style="auto"></StatusBar>
		<Header></Header>
    	<Text>Página Home!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
