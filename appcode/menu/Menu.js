import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
  Text,
} from 'react-native';

const window = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';



class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <ScrollView scrollsToTop={false} style={styles.menu}>
        <Text
          onPress={() => this.props.onItemSelected('News')}
          style={styles.item}>
            <Icon name="user" style={{fontSize: 20}} /> News
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('Page')}
          style={styles.item}>
          <Icon name="pied-piper" style={{fontSize: 20}} /> Page
        </Text>

      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'mistyrose',
    padding: 20,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});

module.exports = Menu;
