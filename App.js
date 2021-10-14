import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import Home from './screens/Home';
import DetailContact from './screens/DetailContact';
import {useSelector, useDispatch} from 'react-redux';
import {getContact, deleteContact, addContact} from './redux/actions/contact';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  const {contactList, deleteResult, addResult} = useSelector(
    state => state.contactReducer,
  );
  const dispatch = useDispatch();
  const [items, setItems] = useState(null);

  useEffect(() => {
    dispatch(getContact());
    setItems(contactList);
  }, [contactList, dispatch, addResult]);

  const deleteItem = id => {
    dispatch(deleteContact(id));
  };

  const addItem = data => {
    if (!data.firstName) {
      Alert.alert('Error', 'Please Enter an Item', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else {
      let params = {
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age,
        photo:
          'http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550',
      };
      dispatch(addContact(params));
    }
  };

  return (
    <View style={style.container}>
      <Header title="Simple Contact Appss" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Contact Home">
          <Stack.Screen name="Contact Home">
            {props => (
              <Home
                {...props}
                items={items}
                onDeleteItem={deleteItem}
                addItem={addItem}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="DetailContact">
            {props => <DetailContact {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Home items={items} onDeleteItem={deleteItem} addItem={addItem} /> */}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  allContact: {
    color: 'black',
    marginLeft: 10,
    marginTop: 2,
    marginBottom: 2,
    padding: 2,
  },
});

export default App;
