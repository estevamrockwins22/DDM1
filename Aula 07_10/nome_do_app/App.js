import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text>Digite aqui</Text>
      <TextInput placeholder="teste"></TextInput>
      <Button onpress=''title="Botão"></Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scflex: {
    flex: 1,
    backgroundColor: #ddb91b,
  },
  
  container: {
    flex: 1,
    backgroundColor: '#020202',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
