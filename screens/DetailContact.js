import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon, {Button} from 'react-native-vector-icons/dist/FontAwesome';
const imgDefault = require('../components/assets/person.png');
import {updateContact} from '../redux/actions/contact';
import {useSelector, useDispatch} from 'react-redux';

const DetailContact = ({route}) => {
  const {updateResult} = useSelector(state => state.contactReducer);
  const dispatch = useDispatch();

  const {firstName, lastName, age, photo, id} = route.params.item;
  const [showEditForm, setShowEditForm] = useState(false);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    setEditedData({
      firstName: firstName,
      lastName: lastName,
      age: age,
    });
  }, [updateResult]);

  const handleOnChangeFirstName = value => {
    setEditedData(prevState => {
      return {
        ...prevState,
        firstName: value,
      };
    });
  };

  const handleOnChangeLastName = value => {
    setEditedData(prevState => {
      return {
        ...prevState,
        lastName: value,
      };
    });
  };

  const handleOnChangeAge = value => {
    setEditedData(prevState => {
      return {
        ...prevState,
        age: Number(value),
      };
    });
  };

  const handleSubmitData = () => {
    dispatch(updateContact(editedData, id));
    setShowEditForm(false);
  };

  let form = null;
  if (showEditForm === true) {
    form = (
      <View>
        <Text style={{textAlign: 'center', marginTop: 20, marginBottom: 10}}>
          Edit Contact
        </Text>
        <TextInput
          value={editedData.firstName}
          placeholder="First Name ..."
          style={style.inputStyle}
          onChangeText={handleOnChangeFirstName}
        />
        <TextInput
          value={editedData.lastName}
          placeholder="Last Name ..."
          style={style.inputStyle}
          onChangeText={handleOnChangeLastName}
        />
        <TextInput
          placeholder="Age ..."
          style={style.inputStyle}
          onChangeText={handleOnChangeAge}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{textAlign: 'left', color: 'blue', marginRight: 10}}
            onPress={handleSubmitData}>
            Submit
          </Text>
          <Text
            style={{textAlign: 'right', color: 'red'}}
            onPress={() => setShowEditForm(false)}>
            Cancel
          </Text>
        </View>
      </View>
    );
  } else {
    form = (
      <Text
        style={{
          textAlign: 'center',
          marginTop: 10,
          fontSize: 15,
          color: '#00aae6',
        }}
        onPress={() => setShowEditForm(true)}>
        Edit
      </Text>
    );
  }

  return (
    <ScrollView style={style.detailContactContainer}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={photo != 'N/A' ? {uri: photo} : imgDefault}
          style={style.imgStyle}
        />
        <Text style={style.text}>
          First Name:{' '}
          {updateResult !== null ? updateResult.data.firstName : firstName}
        </Text>
        <Text style={style.text}>
          Last Name:{' '}
          {updateResult !== null ? updateResult.data.lastName : lastName}
        </Text>
        <Text style={style.text}>
          Age : {updateResult !== null ? updateResult.data.age : age}
        </Text>
      </View>
      <View>{form}</View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  detailContactContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  imgStyle: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
  },
  text: {
    color: 'black',
    fontSize: 20,
    marginTop: 5,
  },
  inputStyle: {
    height: 35,
    padding: 10,
    backgroundColor: 'whitesmoke',
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 10,
  },
});

export default DetailContact;
