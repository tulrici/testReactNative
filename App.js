import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ImageRound from './composant/imageRound';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageRound name="Be'Lakor" uri="https://bibliotheque-imperiale.com/images/thumb/2/23/Be%27lakor.jpg/500px-Be%27lakor.jpg"></ImageRound>
      <ImageRound name="test" uri="https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/f/fb/C%27tan.jpg/revision/latest?cb=20220929131432"></ImageRound>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
