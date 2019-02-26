'use strict';

import React, { Component } from 'react'
import QRCode from './react-qrcode/index.js';
import Barcode from './react-barcode/index.js';

import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions,
    StatusBar,
} from 'react-native';

export default class Codes extends Component {

  render() {

    let qr_str="test qr string";
    let barcode_str="1245 2654 2323 865746";

    return (
      <View style={styles.container}>
        <View style={{flex:0.25}}>
          <Barcode
            value={barcode_str}
            text={barcode_str}
            format="CODE128" />
        </View>
        <View style={{flex:0.35}}>
          <QRCode
            value={qr_str}
            bgColor='black'
            fgColor='white'/>
        </View>
      </View>
    );
  }


}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
