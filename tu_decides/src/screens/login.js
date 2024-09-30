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

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

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
              <Text style={{ fontSize: 50, fontWeight: "bold" }}>Login</Text>
              <View style={{ paddingTop: 50, paddingBottom: 60, gap: 50 }}>
                <TextInput
                  placeholder="Username"
                  style={{ borderBottomWidth: 1, height: 40, width: 200 }}
                  onChangeText={value => setUsername(value)}
                />
                <TextInput
                  placeholder="Password"
                  style={{ borderBottomWidth: 1, height: 40, width: 200 }}
                  secureTextEntry={true}
                  onChangeText={value => setPassword(value)}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  setUser({ username: username, password: password });
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
            </LinearGradient>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
