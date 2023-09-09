import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import axios from "axios";

const HomeScreen = ({ navigation }) => {
  // Base Url
  const baseUrl = "https://dummyjson.com/products?";
  // state cofigure
  const [productList, setProductList] = useState([]); // to store the fetched data

  const neededProductList = productList.slice(0, 10);  // limiting array to 10 items only
  const neededProductList1 = productList.slice(10, 20);
  const neededProductList2 = productList.slice(20, 30);

  useEffect(() => {
    fetchMoviesList();
  }, []);
     // api call ro fetch the data
  const fetchMoviesList = async () => {
    await axios
      .get(`${baseUrl}`)
      .then((response) => {
         // console.log(response, "response of fetched data");    // to check whether the data is coming prperly 
        setProductList(response.data.products);
      })
      .catch((error) => {
        // console.log(error.response, "error response");
      });
  };
         // reusable component for repetitive tark
  const productRenderItem = ({ item, index }) => {
    return (
      <View key={index.toString()}>
        <TouchableOpacity
          style={styles.productList}
          key={index}
          onPress={() =>
            navigation.navigate("ShowZoomImage", {
              image: item.thumbnail,
            })
          }
        >
          <Image
            source={{ uri: item.thumbnail }}
            style={{ width: 150, height: 100, borderRadius: 10 }}
          />
        </TouchableOpacity>
        <View style={styles.discribtionTag}>
          <Text numberOfLines={1} style={styles.discribtionTex}>
            {item.title}
          </Text>
          <Text numberOfLines={1} style={{ color: "#8ECB96" }}>
            {item.price} $
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.page}>
      <View style={styles.headers}>
        <Text style={styles.headerText}>Smart Phones</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("SmartphoneScreen", { neededProductList })
          }
        >
          <View style={styles.subHeader}>
            <Text style={styles.seeAllTag}>See all</Text>
            <Icon name="right" size={12} color="#fff" solid />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={neededProductList}
          renderItem={productRenderItem}
        />
      </View>
      <View style={[styles.headers,{marginTop:20}]}>
        <Text style={styles.headerText}>Grooming</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("GroomingScreen", { neededProductList1 })
          }
        >
          <View style={styles.subHeader}>
            <Text style={styles.seeAllTag}>See all</Text>
            <Icon name="right" size={12} color="#fff" solid />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 20 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          // style={{flex:1}}
          data={neededProductList1}
          renderItem={productRenderItem}
        />
      </View>
      <View style={styles.headers}>
        <Text style={styles.headerText}>Grocery</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("GroceryScreen", { neededProductList2 })
          }
        >
          <View style={styles.headers}>
            <Text style={styles.seeAllTag}>See all</Text>
            <Icon name="right" size={12} color="#fff" solid />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={neededProductList2}
          renderItem={productRenderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#12272a",
  },
  headers: {
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "flex-end",
    justifyContent: "space-between",
    padding: 10,
  },
  headerText: {
    color: "white",
    fontSize: 18,
  },
  subHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeAllTag: {
    color: "white",
    fontSize: 11,
  },
  productList: {
    width: 150,
    height: 100,
    marginLeft: 10,
  },
  discribtionTag: {
    marginLeft: 20,
    marginTop: 10,
  },
  discribtionTex: {
    color: "#fff",
    padding: 2,
    fontWeight: "600",
  },
});
export default HomeScreen;
