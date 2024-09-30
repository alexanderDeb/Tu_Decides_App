import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import style from "../assets/style/style";
import { LinearGradient } from "expo-linear-gradient";
import { Avatar } from "react-native-elements";
import React, { useContext } from "react";
import { userContext } from "../context/userContext";
import { Products } from "../assets/json/products.json";
import { useState, useEffect } from "react";

export default function Suggestions() {
  const image = {
    uri: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600",
  };
  const { user, setUser } = useContext(userContext);
  console.log(user);

  const ProductsAdd = Products;

  const [foodName, setFoodName] = useState([]);
  const [description, setDescription] = useState([]);
  const [images, setImage] = useState([]);


  const suggestion = { foodName, description, images };

  function PostApi(){
    fetch("http://10.0.2.2:5002/suggestions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "foodName":foodName,
      "description":description,
      "image":images
    }),})
    .then((response) => response.json())
    .then((data) => {
      // Maneja la respuesta de la API
      console.log(data);
      alert("Se registro exitosamente")
    })
    .catch((error) => {
      // Maneja cualquier error de la consulta
      console.error(error);
    });
  }
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
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Suggestions
            </Text>
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
          <View style={style.suggestionsContainer}>
            <LinearGradient
              colors={["rgba(255,255,255, 0.6)", "rgba(255,255,255, 0.6)"]}
              style={{
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                padding: 15,
              }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text
                  style={{ color: "black", fontWeight: "bold", fontSize: 40 }}
                >
                  Que alimento
                </Text>
                <Text
                  style={{ color: "black", fontWeight: "bold", fontSize: 40 }}
                >
                  deseas añadir?{" "}
                </Text>
              </View>
              <View style={{ gap: 30, marginTop: 30, marginBottom: 30 }}>
                <TextInput
                  placeholder="Food Name"
                  style={{ borderBottomWidth: 1, height: 40, width: 200 }}
                  onChangeText={(text) => setFoodName(text)}
                />
                <TextInput
                  placeholder="Description"
                  style={{ borderBottomWidth: 1, height: 40, width: 200 }}
                  onChangeText={(text) => setDescription(text)}
                />
                <TextInput
                  placeholder="Image URL"
                  style={{ borderBottomWidth: 1, height: 40, width: 200 }}
                  onChangeText={(text) => setImage(text)}
                />
              </View>
              <TouchableOpacity
                onPress={e => {
                  e.preventDefault()
                  PostApi()
                }}
                style={{
                  backgroundColor: "red",
                  height: 40,
                  width: 250,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                }}
              >
                <Text style={{ color: "white" }}>Registrar</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
