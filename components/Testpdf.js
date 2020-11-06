import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Button} from 'react-native';
import Pdf from 'react-native-pdf';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default function Testpdf() {
  console.log(Dimensions.get('window').height);

  const source = {
    uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
    cache: true,
  };

  console.log('moin');

  const [horizontal, setHorizontal] = useState(true);
  const [page, setPage] = useState(1);

  // Check User want SinglePage/Horizontal or Continuos/Vertical Layout
  const handleLayout = (layout) => {
    console.log(layout);
    layout === 'singlePage' ? setHorizontal(true) : setHorizontal(false);
  };
  // Button for next page
  const nextPage = () => {
    setPage(page + 1);
  };
  // Button for previous page
  const previousPage = () => {
    setPage(page - 1);
  };

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
        horizontal={horizontal}
        spacing={10}
        enablePaging={true}
        page={page}
      />

      <View style={styles.options}>
        <Button onPress={previousPage} title="Previous Page" />

        {!horizontal ? (
          <Button
            onPress={() => handleLayout('singlePage')}
            title="Single Page"
          />
        ) : (
          <Button onPress={() => handleLayout('continuos')} title="Continuos" />
        )}

        <Button onPress={nextPage} title="Next Page" />
      </View>
    </View>
  );
}
