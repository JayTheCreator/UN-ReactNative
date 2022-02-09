
import React from "react";
import { View, Button, Image } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import LinkedList from "../components/LinkedList";

const list = new LinkedList;
console.log("List lenght => ", list.length)

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  return (
    <Layout>
      <TopNav
        middleContent="Sala de espera"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => navigation.goBack()}
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* This text using ubuntu font */}
        
        <Text style={{marginBottom: 50,fontSize: 30,fontWeight: "bold", color: "red"}}>Estas usando la mesa!</Text>
        <Text style={{marginBottom: 20,fontSize: 25, fontWeight: "bold", color: "yellow"}}>Trabaja duro!</Text>
        <Image source={{uri: 'https://i.pinimg.com/originals/6e/5c/a0/6e5ca07989995b91561e2dd8b380bd9f.gif',}} style={{width: '90%', height: 400}} />
        <Button
          onPress={() => {
            list.removeFromHead()
            navigation.goBack()}
          }
          title="Salir de sala"
          style={{color: "red", width: 70, height: 50, marginTop: 20}}
        />
      </View>
    </Layout>
  );
}
