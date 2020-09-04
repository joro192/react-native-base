import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '@action';

import R from '@R';

class UserScreen extends Component {
  setLanguage = (language) => {
    this.setState({language});
    this.props.setLanguage(language);
  };

  render() {
    const {language} = this.props;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => this.setLanguage(language == 'en' ? 'vi' : 'en')}>
          <Text>{R.strings.user}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.languageReducer.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLanguage: (language) => {
      dispatch(actions.changeLanguage(language));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);
