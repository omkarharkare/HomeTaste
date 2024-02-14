import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './pages/Landing';
import Onboarding from './pages/Onboarding';
import background from './assets/background.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Onboarding/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
