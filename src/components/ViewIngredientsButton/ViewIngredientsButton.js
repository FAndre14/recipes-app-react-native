import React from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default function ViewIngredientsButton (props) {
    return (
      <TouchableHighlight underlayColor='rgba(0, 0, 0, 0)' onPress={props.onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>Vezi ingrediente</Text>
        </View>
      </TouchableHighlight>
    );
}

ViewIngredientsButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};
