import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ height: 100, width: 100, backgroundColor: "black" }} />
        <View style={{ height: 100, width: 100, backgroundColor: "blue" }} />
      </View>
      <View style={{ height: 100, width: 100, backgroundColor: "red", alignSelf: "center" }} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ height: 100, width: 100, backgroundColor: "orange" }} />
        <View style={{ height: 100, width: 100, backgroundColor: "violet" }} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
});