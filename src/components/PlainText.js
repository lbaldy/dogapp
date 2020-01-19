import React from 'react';
import {Text} from 'react-native';

const PlainText = ({text}) => {
  if (!text) {
    return null;
  }
  const plainText = text.replace(/<[^>]*>?/gm, '').replace(/\&quot\;/gm, "'");

  return <Text>{plainText}</Text>;
};

export default PlainText;
