import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import style from "../assets/style/style";
import React, { useContext, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { userContext } from "../context/userContext";
import { useNavigation } from "@react-navigation/native";

export default function WelcomePage() {
  const Navigation = useNavigation();
  const image = {
    uri: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600",
  };

  return (
    <View style={style.container}>
      <ImageBackground source={image} resizeMode="cover" style={style.image}>
        <LinearGradient
          colors={["rgba(0,0,0, 0.2)", "rgba(0,0,0, 1.5)"]}
          style={style.gradient}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "center",
              paddingTop: 75,
            }}
          >
            <Text style={{ color: "white", fontSize: 70, fontWeight: "bold" }}>
              Tu
            </Text>
            <Text style={{ color: "white", fontSize: 70, fontWeight: "bold" }}>
              Decides
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
              padding: 15,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Navigation.navigate("Login");
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
              <Text style={{ color: "white", fontSize: 16 }}>Login</Text>
            </TouchableOpacity>

            <Text style={{ color: "white" }}>
              No tienes cuenta?{" "}
              <Text
                onPress={() => {
                  Navigation.navigate("SingIn");
                }}
                style={{ color: "red" }}
              >
                Registrate
              </Text>
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
