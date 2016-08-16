import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class News extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View>
          <Text style={{fontSize: 25, paddingTop: 50}}>
          This is news
          </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }
});

module.exports = News;
