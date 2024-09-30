import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import style from "../assets/style/style";
import { LinearGradient } from "expo-linear-gradient";
import ProductsCard from "../components/productsCard";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../context/userContext";
import { Avatar } from "react-native-elements";

export default function Home() {
  const image = {
    uri: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600",
  };
  const { user, setUser } = useContext(userContext);
  console.log(user);

  const [suggestion, setSuggestion] = useState([]);

  const GetSuggestions = async () => {
    try {
      const response = await fetch("http://10.0.2.2:5002/suggestions", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setSuggestion(data);
      console.log(data);
    } catch (error) {
      console.error(error);
      return 0;
    }
  };

  useEffect(() => {
    GetSuggestions();
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
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Home</Text>
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
          <ScrollView style={style.vote}>
            <View style={style.grid}>
              {suggestion.map((x) => {
                return (
                  <ProductsCard
                    name={x.foodName}
                    uri={x.image}
                    onPress={() => {
                      alert("has votado con exito");
                    }}
                  />
                );
              })}
            </View>
          </ScrollView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
