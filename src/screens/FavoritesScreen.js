import React from 'react';
import { StyleSheet, FlatList} from 'react-native';
import { useSelector } from 'react-redux';
import ListItem from '../components/ListItem';


const FavoritesScreen = props => {

   const favorites = useSelector(state => state.artifact.favorites);
  return(
      <FlatList
          data={favorites}
          keyExtractor={item => item.url}
          renderItem={({ item }) => (
              <ListItem
                  navigation={props.navigation}
                  title={item.title}
                  image={item.urlToImage}
                  description={item.description}
                  url={item.url}
              />)} />
  )

} 


export default FavoritesScreen;