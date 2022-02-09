import React from "react";
import { 
  View, 
  Image,
  FlatList, 
  TouchableWithoutFeedback,
  ScrollView
} from "react-native";
import { getAuth, signOut } from "firebase/auth";
import {
  Layout,
  Text,
  TopNav,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";

export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const auth = getAuth();
  return (
    <Layout>
      <TopNav
        middleContent="Espacios"
        leftContent={
          <Ionicons
            name="log-out"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
            onPress={() => {
                signOut(auth);
              }}
            />
        }
        leftAction={() => {
          signOut(auth);
        }}
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
          justifyContent: "flex-start",
          flexDirection: "column",
          flexWrap: "wrap",
          marginTop: 40,
          marginLeft: -5
        }}
      >
      <TouchableWithoutFeedback>
        <View style={{width: 230, margin: 10, padding: 10, backgroundColor: 'rgba(0,0,0,.5)', alignItems: "center", borderRadius: 20}}>
          <Text style={{color: 'white', marginTop: 1, marginBottom: 5, fontWeight: 'bold'}}>Biblioteca Central</Text>
          <Image source={{uri: 'https://live.staticflickr.com/7527/15785718870_7cfdcb8995_z.jpg',}} style={{width: '100%', height: 155}} />
          <Ionicons 
            name="add-circle"
            size={50}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
            style={{margin: -20}}
            onPress={() => {
                navigation.navigate("BibliotecaCentral");
              }}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={{width: 230, margin: 10, padding: 10, backgroundColor: 'rgba(0,0,0,.5)', alignItems: "center", borderRadius: 20}}>
          <Text style={{color: 'white', marginTop: 1, marginBottom: 5, fontWeight: 'bold'}}>CyT</Text>
          <Image source={{uri: 'https://www.construccionesplanificadas.com/wp-content/uploads/2021/02/ECT-UNAL-1920x1441_03.jpg',}} style={{width: '100%', height: 155}} />
          <Ionicons 
            name="add-circle"
            size={50}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
            style={{margin: -20}}
            onPress={() => {
                navigation.navigate("SecondScreen");
              }}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={{width: 230, margin: 10, padding: 10, backgroundColor: 'rgba(0,0,0,.5)', alignItems: "center", borderRadius: 20}}>
          <Text style={{color: 'white', marginTop: 1, marginBottom: 5, fontWeight: 'bold'}}>Biblioteca F. Derecho</Text>
          <Image source={{uri: 'https://files.rcnradio.com/public/styles/m_img_680x464/public/2018-05/Facultad%20de%20Derecho.jpg?itok=eMJFEzMm',}} style={{width: '100%', height: 155}} />
          <Ionicons 
            name="add-circle"
            size={50}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
            style={{margin: -20}}
            onPress={() => {
                navigation.navigate("SecondScreen");
              }}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={{width: 230, margin: 10, padding: 10, backgroundColor: 'rgba(0,0,0,.5)', alignItems: "center", borderRadius: 20}}>
          <Text style={{color: 'white', marginTop: 1, marginBottom: 5, fontWeight: 'bold'}}>Restaurante Central</Text>
          <Image source={{uri: 'https://pbs.twimg.com/media/BuiIMWTIQAAg5Tj.jpg',}} style={{width: '100%', height: 155}} />
          <Ionicons 
            name="add-circle"
            size={50}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
            style={{margin: -20}}
            onPress={() => {
                navigation.navigate("SecondScreen");
              }}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={{width: 230, margin: 10, padding: 10, backgroundColor: 'rgba(0,0,0,.5)', alignItems: "center", borderRadius: 20}}>
          <Text style={{color: 'white', marginTop: 1, marginBottom: 5, fontWeight: 'bold'}}>Restaurante Yu Takeuchi</Text>
          <Image source={{uri: 'https://10619-2.s.cdn12.com/rests/original/102_503307759.jpg',}} style={{width: '100%', height: 155}} />
          <Ionicons 
            name="add-circle"
            size={50}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
            style={{margin: -20}}
            onPress={() => {
                navigation.navigate("SecondScreen");
              }}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={{width: 230, margin: 10, padding: 10, backgroundColor: 'rgba(0,0,0,.5)', alignItems: "center", borderRadius: 20}}>
          <Text style={{color: 'white', marginTop: 1, marginBottom: 5, fontWeight: 'bold'}}>Cafeteria Ciencias Economicas</Text>
          <Image source={{uri: 'https://lh5.googleusercontent.com/p/AF1QipOqgrvR-QhKR5vY_THy8RECJX51D2utspVAMmBg=w408-h544-k-no',}} style={{width: '100%', height: 155}} />
          <Ionicons 
            name="add-circle"
            size={50}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
            style={{margin: -20}}
            onPress={() => {
                navigation.navigate("SecondScreen");
              }}
          />
        </View>
      </TouchableWithoutFeedback>
      </View>
    </Layout>
    );
}