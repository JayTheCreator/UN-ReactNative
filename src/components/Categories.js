import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Categories(props) {
  const navigation = useNavigation(); 
  const onPress = () => {
    navigation.navigate('Categorie', {id: props.id})
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{width: 220, margin: 10, padding: 10, backgroundColor: 'black'}}>
        <Image source={props.imageUri} style={{width: '100%', height: 155}} />
        <Text style={{color: 'red', marginTop: 10}}>{props.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}