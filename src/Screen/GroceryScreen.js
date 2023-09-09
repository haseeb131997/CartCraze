import { View, Text, FlatList , Image, Dimensions, StyleSheet} from 'react-native'
import React from 'react'

const GroceryScreen = props => {
  const ImageList= props.route.params.neededProductList2;
  // console.log(props.route.params.neededProductList, "alllllllllll imageeeeeeeeee")

  return (
    <View style={styles.page}>
                <FlatList
                data={ImageList}
                renderItem={({item, index}) =>{
                    return(
                       <View style={styles.ImageContainer}>
                           <Image
                              source={{uri:item.thumbnail}} 
                              style={{width:Dimensions.get("window").width-10, height:220, borderRadius:10}}
                            />
                       </View>
                    )
                }}
                />
             </View>
  )
}

const styles = StyleSheet.create({
  page:{
    flex:1,
    backgroundColor:"#12272a",
  },
  ImageContainer:{
    padding:5,
    marginTop:10
  }
})

export default GroceryScreen;