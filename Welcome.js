import React from 'react';
import { Image, ImageBackground,StyleSheet,Text} from 'react-native';

 const Welcome = () => {
  return(
      <ImageBackground
        source={{uri:"https://picsum.photos/id/237/200/300"}}
        style={styles.image}
        resizeMode='cover'
        blurRadius={10}
      >
          <Image source={require('./assets/favicon.png')} style={styles.image2}/>
          <Text style={{bottom:100,color:'white',fontSize:14}}>welcome to expo bundle</Text>
      </ImageBackground>
  )
};

export default Welcome

const styles = StyleSheet.create({
    image: {
      flex: 1,
      alignItems:'center',
      justifyContent: "center"
    },
    image2: {
        bottom:100,
        width:100,
        height:100,
        alignContent:'center'
      },
  });