import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native";
import style from "../assets/style/style";
import React, { useContext, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { userContext } from "../context/userContext";
import { useNavigation } from "@react-navigation/native";

export default function LoginPage() {
  const Navigation = useNavigation();
  const image = {
    uri: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1600",
  };

  const { user, setUser } = useContext(userContext);

  return (
    <View style={style.container}>
      <ImageBackground source={image} resizeMode="cover" style={style.image}>
        <LinearGradient
          colors={["rgba(255,255,255, 0)", "rgba(0,0,0, 1)"]}
          style={style.gradient}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LinearGradient
              colors={["rgba(255,255,255, 0.6)", "rgba(255,255,255, 0.6)"]}
              style={{
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 50, fontWeight: "bold" }}>Sing In</Text>
              <View style={{ paddingTop: 30, paddingBottom: 40, gap: 30 }}>
                <TextInput
                  placeholder="Username"
                  style={{ borderBottomWidth: 1, height: 40, width: 200 }}
                />
                <TextInput
                  placeholder="Phone"
                  style={{ borderBottomWidth: 1, height: 40, width: 200 }}
                />
                <TextInput
                  placeholder="Password"
                  style={{ borderBottomWidth: 1, height: 40, width: 200 }}
                  secureTextEntry={true}
                />
                <TextInput
                  placeholder="Password Repeat"
                  style={{ borderBottomWidth: 1, height: 40, width: 200 }}
                  secureTextEntry={true}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  setUser({ username: "alex", password: "1234" });
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
                <Text style={{ color: "white" }}>Login</Text>
              </TouchableOpacity>
              <Text style={{ color: "black" }}>
                Ya tienes una cuenta?{" "}
                <Text
                  onPress={() => {
                    Navigation.navigate("Login");
                  }}
                  style={{ color: "red" }}
                >
                  Ingresa
                </Text>
              </Text>
            </LinearGradient>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
