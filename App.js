import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,View,Image,SafeAreaView,ImageBackground} from 'react-native';
import Welcome from './Welcome';
export default function App() {
 console.log('heya')
 let x=1
  return (
    <View style={styles.container}>
        <Welcome/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    // alignItems:'center',
    // justifyContent:'center'
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text:{
    fontSize:30,
    color:'white',
    fontWeight:'700',
  },
});
