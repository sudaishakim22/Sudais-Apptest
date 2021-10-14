import React from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import ListItem from '../components/ListItem';
import AddItem from '../components/AddItem';

const Home = ({items, onDeleteItem, addItem, navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Text style={style.allContact}>All Contact</Text>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem
            item={item}
            onDeleteItem={onDeleteItem}
            navigation={navigation}
          />
        )}
      />
      <AddItem addItem={addItem} />
    </View>
  );
};

const style = StyleSheet.create({
  allContact: {
    color: 'black',
    marginLeft: 10,
    marginTop: 2,
    marginBottom: 2,
    padding: 2,
  },
});

export default Home;
