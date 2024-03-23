import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <Link href="/login/start" style={styles.button}>
        <Text>Start</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#FF9A4D",
    padding: 15,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 40,
    fontSize: 20,
    fontFamily: "normal",
    fontWeight: "100",
  },
});
