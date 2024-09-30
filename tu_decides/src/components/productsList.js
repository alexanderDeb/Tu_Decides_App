import React from "react";
import { Text, View, Image } from "react-native";
import style from "../assets/style/style";

export default function ProductsList({ title, description, uri }) {
  return (
    <View style={style.listComponent}>
      <View style={style.img}>
        <Image
          source={{
            uri: uri,
          }}
          style={{height:'100%', width:'100%'}}
        />
      </View>
      <View>
        <Text style={style.t}>{title}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
}
