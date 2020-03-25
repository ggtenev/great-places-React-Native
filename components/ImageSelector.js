import React, { useState} from 'react'
import { View, Text, Button, StyleSheet, Image, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import {connect} from 'react-redux'

const ImageSelector = ({pickImg}) => {
  const [img, setImg] = useState()

    const verifyPermissions = async () => {
      const result = await Permissions.askAsync(Permissions.CAMERA,Permissions.CAMERA_ROLL);
      if(result.status !== 'granted'){
        Alert('Insufficient permission','You need to grant camera permissions', [{text:'OK'}])
        return false
      }
      return true
    }
  

  const takeImage = async () => {
    const permission = await verifyPermissions()
    if(!permission){
      return
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing:true,
      aspect:[12,9],
      quality:0.5
    })
   setImg(image.uri)
   pickImg(image.uri)
  }

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!img ? (
          <Text>No image picked yet</Text>
        ) : <Image style={styles.image} source={{uri:img}}/>
        }
      </View>
      <View>
        <Button title='Take Image' onPress={takeImage} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center',
    height: 300
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1
  },
  image: {
    height:'100%',
    width:'100%'
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect()(ImageSelector)
