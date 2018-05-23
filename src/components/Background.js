/*
* @Author: valentinegalkin
* @Date:   2018-05-20 20:58:07
* @Last Modified by:   Valentin
* @Last Modified time: 2018-05-23 15:54:43
* @flow
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
  },
});

export default class Background extends Component { // eslint-disable-line
  static propTypes = {
    src: PropTypes.number,
  };

  render() {
    const translateDestW = screenWidth;

    const translateDestH = screenHeight;

    const translateDestY = 0;

    const translateDestX = 0;
    return (
      <Animated.Image
        style={[styles.image, {
          width: translateDestW,
          height: translateDestH,
          transform: [
            {
              translateX: translateDestX
            },
            {
              translateY: translateDestY
            },
          ]
        }]}
        source={this.props.src}
      />
    );
  }
}

