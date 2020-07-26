import React, {useState} from 'react';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {View, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const HeaderLeft = () => {
  const [state, setState] = useState(false);
  const navigation = useNavigation();

  const closedrawer = () => {
    setState(false);
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  const opendrawer = () => {
    setState(true);
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={{flexDirection: 'row', padding: 20,}}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <View>
          {state ? (
            <TouchableOpacity onPress={() => closedrawer()}>
              <Entypo name="menu" size={30} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => opendrawer()}>
              <Entypo name="menu" size={30} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default HeaderLeft;
