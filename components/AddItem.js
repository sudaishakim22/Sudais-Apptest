import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [modal, setModal] = useState(false);

  const handleOnChangeText = value => {
    setFirstName(value);
  };

  const handleOnChangeLastName = value => {
    setLastName(value);
  };

  const handleOnChangeAge = value => {
    setAge(value);
  };

  const handleAddItem = () => {
    setModal(false);
    let data = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    addItem(data);
  };
  return (
    <View>
      <Modal
        visible={modal}
        animationType="slide"
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModal(!modalVisible);
        }}>
        <TouchableOpacity onPress={() => setModal(false)}>
          <Text>
            <Icon name="close" size={20} /> Close Modal
          </Text>
        </TouchableOpacity>
        <Text style={{marginTop: 30, fontSize: 20, textAlign: 'center'}}>
          Add New Contact
        </Text>
        <TextInput
          placeholder="First Name ..."
          style={style.input}
          onChangeText={handleOnChangeText}
        />
        <TextInput
          placeholder="Last Name ..."
          style={style.input}
          onChangeText={handleOnChangeLastName}
        />
        <TextInput
          placeholder="Age ..."
          style={style.input}
          onChangeText={handleOnChangeAge}
        />

        <View style={[{width: '100%', margin: 10, alignItems: 'center'}]}>
          <Button
            title="Submit Contact"
            color="#00aae6"
            onPress={handleAddItem}
          />
        </View>
      </Modal>

      <TouchableOpacity style={style.btn} onPress={() => setModal(true)}>
        <Text style={style.btnText}>
          <Icon name="plus" size={20} /> Add New Contact
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#00aae6',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
