import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';

import R from '@R';
import Icon from 'react-native-vector-icons/AntDesign';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secure: this.props.secureTextEntry || false,
    };
  }

  render() {
    const {
      icon,
      color,
      placeholder,
      onChangeText,
      value,
      secureTextEntry,
      eye
    } = this.props;

    const {secure} = this.state;
    return (
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: '2.5%',
            borderBottomWidth: 1,
            width: '80%',
            borderBottomColor: color,
            marginVertical: '3%',
          }}>
          <Icon name={icon} size={30} color={color} />
          <TextInput
            style={{
              height: 40,
              color: color,
              marginLeft: '1.5%',
              paddingLeft: '1%',
              paddingRight: '15%',
              width: '100%'
            }}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={color}
            secureTextEntry={secure}
            onBlur={() =>
              this.setState({
                ...this.state,
                secure: secure || secureTextEntry,
              })
            }
            // onSubmit=
          />
          {eye && (
            <TouchableOpacity
              style={{position: 'absolute', right: '2%'}}
              onPress={() => this.setState({...this.state, secure: !secure})}>
              <Icon name={'eye'} size={25} color={color} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}
