import { PaperProvider } from 'react-native-paper';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// NOTE: If you use another app-wide provider, make sure it wraps the PaperProvider

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
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
