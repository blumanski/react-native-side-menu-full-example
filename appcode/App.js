import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Navigator
} from 'react-native';

// third party components
import SideMenu from 'react-native-side-menu';
import Icon from 'react-native-vector-icons/FontAwesome';
// padding statusbar
import Statusbar from './components/Statusbar';
// side menu button
import Button from './components/NavButton';
// side menu items
import Menu from './menu/Menu';
// screens
import News from './screens/News';
import Page from './screens/Page';

/**
*
*/
class FireApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedItem: 'News',
    }
  }

  // toggle open/close state
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  // clicked link, close menu and navigate to page
  onMenuItemSelected = (item) => {
      this.setState({
          isOpen: false,
          selectedItem: item,
      });

      this.navProps.navigator.replace({ id: item });
  }

  // update menu state on change
  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  // this is the magic of setting the navigator props
  // and have them available
  provideNavigatorProps(navigator) {
    this.navProps = {navigator}
  }

  // render the scene
  _renderScene(route, navigator) {
    // may need the navigator on child level
    // such as listings, so pass that down
    let globalNavigatorProps = {navigator}

    switch(route.id) {

      case "News":
        return (
          <News
            {...globalNavigatorProps}
          />
        )

      case "Page":
        return (
          <Page
            {...globalNavigatorProps}
          />
        )

      default:
        return(
          <Page
            {...globalNavigatorProps }
          />
        )
    }
  }

  // render the app
  render() {
    // Set the menu component, which keeps the side menu links
    // A method is injected as prop to trigger the link clicks
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

    return (
        <SideMenu
          menu={menu}
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.updateMenuState(isOpen)}>

          <Statusbar style={{backgroundColor: 'green'}} />

          <Navigator
            initialRoute={{id: 'Page'}}
            style={styles.container}
            // this is setting the navigator to the props
            ref={(navigator) => { this.provideNavigatorProps(navigator)}}
            renderScene={(route, navigator) => { return this._renderScene(route, navigator)}}
            configureScene = {(route) => ({
              ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight
            })}
          />

          <Button style={styles.button} onPress={() => this.toggle()}>
            <Icon name="bars" style={{fontSize: 25}} />
          </Button>

        </SideMenu>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },

});

module.exports = FireApp;
