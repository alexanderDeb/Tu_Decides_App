import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import style from "../assets/style/style";

export default function ProductsCard({ name, uri, onPress }) {
  return (
    <LinearGradient
      colors={["rgba(255,255,255, 0.6)", "rgba(255,255,255, 0.6)"]}
      style={style.card}
    >
      <Image
        source={{
          uri: uri,
        }}
        style={{
          height: "100%",
          width: "100%",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />
      <TouchableOpacity style={style.btn} onPress={onPress}>
        <Text>{name}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
