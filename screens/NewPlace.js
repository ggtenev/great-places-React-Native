import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Button } from 'react-native';
import {useDispatch} from 'react-redux'
import * as actions from '../store/actions/places'
import ImageSelector from '../components/ImageSelector'

export default function NewPlace({navigation}) {
  const [title, setTitle] = useState('')
  const [img,setImg] = useState()

  const dispatch = useDispatch()

  const savePlace = () => {
   dispatch(actions.addPlace(title,img))
  }

  const pickImg = (img) =>{
    setImg(img)
  }
  return (
    <ScrollView>
      <View style={styles.newPlace}>
        <Text style ={{fontWeight:'bold'}}> Title</Text>
        <TextInput 
        style={styles.input} 
        onChangeText = {(t) => setTitle(t)}
        value={title}/>
        <ImageSelector pickImg = {pickImg}/>
        {/* <View></View> */}
        <View style={styles.button}>
        <Button title='Add Place' onPress={() => {
          savePlace(title)
          setTitle('')
          navigation.goBack()
        }}/>
        </View>
     </View>
    </ScrollView>
  );
}

NewPlace.navigationOptions = ({ navigation }) => {
  return {
    title: 'Add new place',
    // headerRight: () => (
    //   <TouchableOpacity onPress = {() => navigation.navigate('NewPlace')} style={styles.headerRight}>
    //     <Ionicons name="md-add" size={32} color="white" />
    //   </TouchableOpacity>
    // )
  }
}

const styles = StyleSheet.create({
  newPlace:{
    margin:10,
    borderRadius:5,
    shadowColor:'black',
    shadowOffset:{width:0,height:0},
    shadowOpacity:0.3,
    elevation:2,
    padding:15
    // alignItems:'center'
  },
  button:{
    borderRadius:9,
    // width:100,
    marginBottom:5,
    overflow:'hidden',
    marginVertical:60
  },
  input:{
    // width:'90%',
    borderBottomColor:'grey',
    borderBottomWidth:0.7,
    marginBottom:5,
    padding:5
  }
})
