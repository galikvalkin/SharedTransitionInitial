/*
* @Author: valentinegalkin
* @Date:   2018-05-20 01:09:54
* @Last Modified by:   Valentin
* @Last Modified time: 2018-05-23 15:56:12
* @flow
*/

import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies
import ListItem from './components/ListItem';
import Activity from './components/Activity';
import SiliconValley from './images/siliconvalley.jpg';
import RickAndMorty from './images/rickandmorty.jpg';
import Deadpool from './images/deadpool.jpeg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
    })
  },
});

const INITIAL_STATE = {
  activeId: null,
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE
    };
  }

  onItemPress = (id) => {
    if (this.state.activeId !== id) {
      this.setState(() => ({
        activeId: id,
      }));
    }
  }

  closeBackground = () => {
    this.setState(() => ({
      ...INITIAL_STATE
    }));
  }

  getList = () => (
    [
      {
        id: 1,
        name: 'Silicon Valley',
        src: SiliconValley
      },
      {
        id: 2,
        name: 'Rick And Morty',
        src: RickAndMorty
      },
      {
        id: 3,
        name: 'Deadpool',
        src: Deadpool
      },
    ]
  );

  keyExtractor = item => item.id.toString();

  render() {
    const list = this.getList();
    const { activeId } = this.state;
    const photo = activeId ? list.filter(item => item.id === activeId)[0].src : null;

    return (
      <View
        style={styles.container}
      >
        <FlatList
          keyExtractor={this.keyExtractor}
          data={list}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => this.onItemPress(item.id)}
              {...item}
            />
          )}
        />
        {activeId &&
          <Activity
            {...this.state}
            src={photo}
            onClose={this.closeBackground}
          />
        }
      </View>
    );
  }
}
