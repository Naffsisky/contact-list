import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

interface Props {
  navigation: any;
}

export default class Home extends Component<Props> {
  render() {
    return (
      <View style={tw`bg-slate-200 w-full h-full flex-1  items-center pt-5`}>
        <Text style={tw`text-xl text-slate-700`}> Daftar Nama Kontak </Text>
        <View style={tw`flex-1 absolute bottom-0 right-0 p-5`}>
          <TouchableOpacity
            style={tw`bg-blue-500 p-2 rounded-lg mt-5 shadow shadow-blue-500 shadow-lg`}
            onPress={() => this.props.navigation.navigate('Tambah')}>
            <FontAwesomeIcon icon={faPlus} size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
