import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const imgDefault = require('./assets/person.png');

const ListItem = ({item, onDeleteItem, navigation}) => {
  const handleDeleteItem = id => {
    onDeleteItem(id);
  };

  return (
    <TouchableOpacity
      style={style.listItem}
      onPress={() => navigation.navigate('DetailContact', {item})}>
      <View style={style.listItemView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={item.photo != 'N/A' ? {uri: item.photo} : imgDefault}
            style={style.imgStyle}
          />
          <Text style={style.listItemText}>{item.firstName}</Text>
        </View>
        <Icon
          name="remove"
          size={20}
          color="firebrick"
          onPress={() => handleDeleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 3,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
    color: 'black',
    marginLeft: 5,
  },
  imgStyle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
});

export default ListItem;
