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
  cologin: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  div2: {
    background: 'linear-gradient(180deg, rgb(255, 154, 77) 0%, rgb(255, 224, 229) 100%)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: 820,
    position: 'relative',
    width: 360,
  },
  overlap: {
    height: 683,
    left: 0,
    position: 'absolute',
    top: 137,
    width: 360,
  },
  rectangle: {
    backgroundColor: '#29282a',
    borderRadius: 50,
    height: 642,
    left: 0,
    position: 'absolute',
    top: 41,
    width: 360,
  },
  ellipse: {
    height: 120,
    left: 120,
    position: 'absolute',
    top: 0,
    width: 120,
  },
  keepYourTravelWrapper: {
    height: 23,
    left: 37,
    position: 'absolute',
    top: 392,
    width: 285,
  },
  p: {
    color: 'var(--variable-collection-text-color)',
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    fontWeight: '400',
    left: 0,
    letterSpacing: 0,
    lineHeight: 22.5,
    position: 'absolute',
    textAlign: 'center',
    top: -1,
    width: 285,
  },
  span: {
    color: '#a5a7ac',
  },
  textWrapper2: {
    color: '#ff455b',
    fontFamily: 'Inter-Bold',
    fontWeight: '700',
  },
  textWrapper3: {
    color: '#ff9a4d',
    fontFamily: 'Inter-Bold',
    fontWeight: '700',
  },
  buttonInstance: {
    backgroundColor: '#ff9a4d',
    borderRadius: 10,
    display: 'flex',
    left: 24,
    position: 'absolute',
    top: 324,
    width: 312,
  },
  button2: {
    color: 'var(--variable-collection-white-background)',
    fontFamily: 'Inter-Regular',
  },
  textWrapper4: {
    color: 'var(--variable-collection-text-color)',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    fontWeight: '700',
    left: 120,
    letterSpacing: 0,
    lineHeight: 24,
    position: 'absolute',
    textAlign: 'center',
    top: 569,
    whiteSpace: 'nowrap',
  },
  button3: {
    backgroundColor: '#ff9a4d',
    left: 129,
    padding: 10,
    position: 'absolute',
    top: 606,
  },
  homeIndicator: {
    height: 21,
    left: 0,
    position: 'absolute',
    top: 662,
    width: 360,
  },
  homeIndicator2: {
    backgroundColor: 'var(--graysblack)',
    borderRadius: 100,
    height: 5,
    left: 111,
    position: 'relative',
    top: 8,
    transform: [{ rotate: '180deg' }],
    width: 139,
  },
  inputFiledInstance: {
    left: 24,
    position: 'absolute',
    top: 142,
  },
  designComponentInstanceNode2: {
    color: 'var(--variable-collection-text-color)',
    fontFamily: 'Inter-Medium',
    fontWeight: '500',
    width: 130,
  },
  designComponentInstanceNode3: {
    backgroundColor: 'var(--variable-collection-white-background)',
  },
  inputFiled2: {
    marginRight: -1,
  },
  designComponentInstanceNode4: {
    fontFamily: 'Inter-Regular',
  },
  passwordInstance: {
    left: 24,
    position: 'absolute',
    top: 227,
  },
  password2: {
    marginRight: -8,
  },
  frame2: {
    alignItems: 'center',
    display: 'flex',
    gap: 102,
    left: 0,
    position: 'absolute',
    top: 54,
    width: 360,
  },
  keyboardArrowLeft: {
    height: 44,
    position: 'relative',
    width: 44,
  },
  textWrapper5: {
    color: 'var(--variable-collection-white-background)',
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 22,
    position: 'relative',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    width: 'auto',
  },
});