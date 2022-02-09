
import React,{useState} from "react";
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
import LinkedList from "../components/LinkedList";
import AwesomeAlert from 'react-native-awesome-alerts';


const list = new LinkedList;
const list2 = new LinkedList;
const list3 = new LinkedList;

export default function ({ navigation }) {
  const limiteAforo = 4;
  const { isDarkmode, setTheme } = useTheme();
  const [showAlert, setShowAlert] = useState(false); 
  const [errMessage, setErrMessage] = useState('');
  const [limitIn, setLimitIn] = useState(false);
  const auth = getAuth();


  return (
    <Layout>
      <TopNav
        middleContent="Biblioteca Central"
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
          <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          flexWrap: "nowrap",
          marginTop: 40,
          marginLeft: -5
        }}
      >

      <TouchableWithoutFeedback>
        <View style={{width: 400 , margin: 10, padding: 10, backgroundColor: 'rgba(0,0,0,.5)', alignItems: "center", borderRadius: 20}}>
          <Text style={{color: 'white', marginTop: 1, marginBottom: 5, fontWeight: 'bold', fontSize: 20}}>Mesa #1</Text>
          {/*<Image source={{uri: 'https://i.pinimg.com/originals/6e/5c/a0/6e5ca07989995b91561e2dd8b380bd9f.gif',}} style={{width: '100%', height: 155}} /> */}
          <Image source={{uri: 'https://i.pinimg.com/originals/55/f9/6e/55f96ee42b867988f4f8bb0b151d7f96.png',}} style={{width: '100%', height: 155}} />
          <Text style={{color: 'white', marginTop: 1, marginBottom: 5, fontWeight: 'bold', fontSize: 25}}>Usuarios: [{list.length}/{limiteAforo}] </Text>
          {!limitIn &&
          <Ionicons 
            name="add-circle"
            size={50}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
            style={{margin: -10}}
            onPress={ () => {
              setShowAlert(true);
              setErrMessage('Sientate en la mesa que elegiste');
              list.addToHead("User");
              navigation.navigate("SalaEspera");
              list.removeFromHead();
            }}
            />
        }
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={{width: 400, marginTop: 30, padding: 10, backgroundColor: 'rgba(0,0,0,.5)', alignItems: "center", borderRadius: 20}}>
          <Text style={{color: 'white', marginTop: 1, marginBottom: 5, fontWeight: 'bold', fontSize: 20}}>Mesa #2</Text>
          {/*<Image source={{uri: 'https://i.pinimg.com/originals/0b/8f/72/0b8f72501d1f843a1ddf67784a6e26f9.gif',}} style={{width: '100%', height: 155}} /> */}
          <Image source={{uri: 'https://img.freepik.com/free-vector/multitasking-concept-illustration-character_23-2148403716.jpg?size=626&ext=jpg',}} style={{width: '100%', height: 155}} />
          <Text style={{color: 'white', marginTop: 1, marginBottom: 5, fontWeight: 'bold', fontSize: 25}}>Usuarios: [{list2.length}/4] </Text>
          <Ionicons 
            name="add-circle"
            size={50}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
            style={{margin: -10}}
            onPress={() => {
                navigation.navigate("SalaEspera");
              }}
              />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={{width: 400, marginTop: 30, padding: 10, backgroundColor: 'rgba(0,0,0,.5)', alignItems: "center", borderRadius: 20}}>
          <Text style={{color: 'white', marginTop: 1, marginBottom: 5, fontWeight: 'bold', fontSize: 20}}>Mesa #3</Text>
          {/*<Image source={{uri: 'https://cdn.dribbble.com/users/25980/screenshots/2041047/busy-woman.gif',}} style={{width: '100%', height: 155}} /> */}
          <Image source={{uri: 'https://cdn.dribbble.com/users/4104255/screenshots/11078957/wfh_02_4x.jpg',}} style={{width: '100%', height: 155}} />
          <Text style={{color: 'white', marginTop: 1, marginBottom: 5, fontWeight: 'bold', fontSize: 25}}>Usuarios: [{list3.length}/4] </Text>
          <Ionicons 
            name="add-circle"
            size={50}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
            style={{margin: -10}}
            onPress={() => {
              navigation.navigate("SecondScreen");
              }}
              />
        </View>
      </TouchableWithoutFeedback>
      </View>
        </ScrollView>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="UN Seat"
          message={errMessage}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          confirmText="OK"
          confirmButtonColor= "#DD6B55"
          onConfirmPressed={() => {
            setShowAlert(false);
          }}
        />
    </Layout>
    );
}