import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Pdf from 'react-native-pdf';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  pdf: {
    flex: 1,

    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default function Testpdf() {
  console.log(Dimensions.get('window').height);

  const source = {
    uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
    cache: true,
  };

  console.log('moin');
  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link presse: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
}
