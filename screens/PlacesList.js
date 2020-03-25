import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, connect } from 'react-redux'

import PlaceItem from '../components/PlaceItem'

function PlacesList(props) {
  return (
    <View>
      <FlatList
        keyExtractor={item => item.id}
        data={props.places}
        renderItem={(itemData) => {
          return <PlaceItem
            onSelect={() => {
              props.navigation.navigate('Details', {
                title: itemData.item.title,
                id: itemData.item.id 
              })
            }}
            image={itemData.item.img}
            title={itemData.item.title}
            address={null}
          />
        }}
      />
    </View>
  );
}

PlacesList.navigationOptions = ({ navigation }) => {
  return {
    title: ' All Places',
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('NewPlace')} style={styles.headerRight}>
        <Ionicons name="md-add" size={32} color="white" />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  headerRight: {
    marginHorizontal: 12
  }
})

const matchStateToProps = (state) => {
  return {
    places: state.places.places
  }
}

export default connect(matchStateToProps)(PlacesList)
