import { Text, View, ImageBackground, ScrollView } from "react-native";
import { useState, useEffect, useContext } from "react";
import style from "../assets/style/style";
import { LinearGradient } from "expo-linear-gradient";
import ProductsList from "../components/productsList";
import { Avatar } from "react-native-elements";
import { userContext } from "../context/userContext";
import {Products} from '../assets/json/products.json'

export default function Menu() {
  const image = {
    uri: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600",
  };

  const { user, setUser } = useContext(userContext);
  console.log(user);

  const [products, setProducts] = useState([]);

  const GetProducts = async () => {
    try {
      const response = await fetch("http://10.0.2.2:5002/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setProducts(data);
      console.log(data)
    } catch (error) {
      console.error(error);
      return 0;
    }
  };

  useEffect(() => {
    GetProducts();
  }, []);

  return (
    <View style={style.container}>
      <ImageBackground source={image} resizeMode="cover" style={style.image}>
        <LinearGradient
          colors={["rgba(255,255,255, 0)", "rgba(0,0,0, 1)"]}
          style={style.gradient}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop: 50,
              marginRight: 10,
              marginLeft: 20,
              padding: 7,
              backgroundColor: "white",
              borderRadius: 30,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight:'bold'}}>Menu</Text>
            <Avatar
              size="medium"
              rounded
              title={user.username[0]}
              onPress={() => setUser({ username: null, password: null })}
              activeOpacity={0.5}
              overlayContainerStyle={{
                backgroundColor: "#B5B2B2",
                opacity: 0.7,
              }}
              titleStyle={{ color: "black", opacity: 1 }}
            />
          </View>
          <View style={style.list}>
            <LinearGradient
              colors={["rgba(255,255,255, 0.6)", "rgba(255,255,255, 0.6)"]}
              style={style.cardList}
            >
              <View style={style.titleContainer}>
                <Text style={style.title}>Lista de productos</Text>
              </View>
              <ScrollView style={style.scrollView}>
                {products.map((x) => {
                  return (
                    <ProductsList
                      key={x.id}
                      title={x.foodName}
                      description={x.price + "$"}
                      uri={x.image}
                    />
                  );
                })}
              </ScrollView>
            </LinearGradient>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
