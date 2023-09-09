import { View , ImageBackground, StyleSheet, Dimensions} from 'react-native'
import React from 'react'

const deviceHeight = Dimensions.get("window").height; 
const deviceWidth = Dimensions.get("window").width;
      // function to shows the images in fullscreen mode
const ShowZoomImage = props => {
  console.log(props.route.params, "")
  const {image} = props.route.params;
  return (
    <View style={styles.container}>
    <ImageBackground source={{uri:image}} style={styles.image} /> 
  </View>
  )
}
const styles = StyleSheet.create({
   image:{
    width: deviceHeight,
    height:deviceWidth,
   },
   container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },
})

export default ShowZoomImage