import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, Dimensions} from 'react-native';
import axios from 'axios';

const DogPage = ({navigation}) => {
  const [images, setImages] = useState([]);
  const [desc, setDesc] = useState();
  const {width, height} = Dimensions.get('window');

  useEffect(() => {
    const breed = navigation.getParam('breed');

    console.log(breed);
    axios.get(`https://dog.ceo/api/breed/${breed}/images`).then(({data}) => {
      console.log(data);
      setImages(data.message);
    });

    // `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext&exintro&titles=${breed}`,
    axios
      .get(
        `https://en.wikipedia.org/w/api.php?format=json&explaintext&prop=extracts&explaintext&exintro&action=query&list=search&srsearch=${breed}%20dog`,
      )
      .then(({data}) => {
        console.log('desc', data);
        setDesc(data.query.search[0].snippet);
      });
  }, []);

  // console.log('images', images);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, padding: 10}}>
        <FlatList
          snapToAlignment={'left'}
          snapToInterval={width}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={{justifyContent: 'center'}}
          data={images}
          renderItem={({item}) => {
            return (
              <View style={{margin: 10}}>
                <Image
                  source={{uri: item}}
                  style={{
                    width: width - 20,
                    height: height * 0.3,
                    resizeMode: 'contain',
                  }}
                />
              </View>
            );
          }}
          keyExtractor={(item, index) => `item-${index}`}
        />
      </View>
      <View style={{flex: 1, padding: 10}}>
        <Text>{desc}</Text>
      </View>
    </View>
  );
};

export default DogPage;
