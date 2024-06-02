import { Stack } from "expo-router";
import { Image,StyleSheet } from "react-native";
export default function RootLayout() {
  function LogoTitle() {
    return (
      <Image style={styles.image} source={require('../assets/images/airBlack.png')} />
    );
  }
  return (
    <Stack>
       <Stack.Screen name="index" options={{
        title: 'Home',
        headerStyle: {
        backgroundColor: 'black',
        },
        headerTitle: props => <LogoTitle/>}} 
        /> 
    </Stack>
  );
}
const styles = StyleSheet.create({
  image:{
    width: 100,
    height: 100,
  }
});