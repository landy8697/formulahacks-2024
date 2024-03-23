import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { useFonts, Inter_300Light } from "@expo-google-fonts/inter";

export default function Page() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_300Light,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Link href="/login/start" style={styles.button}>
        <Text>Login</Text>
      </Link>
      <Link href="/location" style={styles.button}>
        <Text>Location test</Text>
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
    margin: 10,
    borderRadius: 40,
    fontSize: 20,
    fontFamily: "Inter_300Light",
  },
});
