import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '@action';
import Input from '../components/Input';
import R from '@R';
import Icon from 'react-native-vector-icons/AntDesign';
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      repassword: '',
      secure: true,
    };
  }

  setLanguage = (language) => {
    this.setState({language});
    this.props.setLanguage(language);
  };

  render() {
    const {name, password, repassword} = this.state;
    const {language} = this.props;
    return (
      <View style={styles.container}>
        <Input
          icon="user"
          color="#fff"
          value={name}
          placeholder={R.strings.name}
          onChangeText={(text) => this.setState({...this.state, name: text})}
        />

        <Input
          icon="key"
          color="#fff"
          value={password}
          placeholder={R.strings.password}
          secureTextEntry
          eye
          onChangeText={(text) =>
            this.setState({...this.state, password: text})
          }
        />
        <Input
          icon="key"
          color="#fff"
          value={repassword}
          placeholder={R.strings.repassword}
          secureTextEntry
          eye
          onChangeText={(text) =>
            this.setState({...this.state, repassword: text})
          }
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#900',
  },
});
