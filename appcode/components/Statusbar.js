import React, {Component} from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

class StatusBarBackground extends Component {

  render() {
    return (
      <View
        style={[
            styles.statusBarBackground,
            this.props.style || {} ]}
        >
        </View>
    )
  }

}

const styles = StyleSheet.create({
  statusBarBackground: {
    height: 20,
    backgroundColor: 'black'
  }
});

module.exports = StatusBarBackground;
