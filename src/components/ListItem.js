import React from 'react';
import {StyleSheet,Dimensions, Text, View, Image, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import * as articleAction from '../redux/actions/articleAction';


const ListItem = props => {

    const dispatch = useDispatch();
    const isFav = useSelector(state => state.artifact.favorites.some(article => article.url === props.url));
  console.log(props)
  return(
      <TouchableOpacity onPress={() => {
          props.navigation.navigate('Details', {
              articleUrl: props.url
          })
      } }>
          <View style={styles.container}>
            <View style={styles.imageWrapper}>
              <Image
                source={{uri: props.image ? props.image : 'https://via.placeholder.com/150'}}
              style={styles.image}
              />
            </View>
          <View style={styles.titleWrapper}>
              <Text style={styles.title}>
                      {props.title && props.title.length > 42 ? 
                          props.title.slice(0, 42) + '...' : props.title}
              </Text>
            <MaterialIcons 
                      name={isFav ? 'favorite' : 'favorite-border'}
                      color='#72bcd4'
                      size={24}
                      onPress={() => {
                          dispatch(articleAction.toggleFavorites(props.url))
                      }}
            />
            </View>
            
          <View style={styles.descriptionWrapper}>
                  <Text style={styles.description}>
                      {props.description && props.description.length >300 ?
                          props.description.slice(0,300) + '...' : props.description}
                  </Text>
          </View>
      </View>
</TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height,
    },
  imageWrapper:{
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image:{
    height: '100%',
    width: '100%',
  },
  titleWrapper:{
    height: '10%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  title:{
    fontSize: 20,
    fontStyle: 'bold',
    marginRight: 10,
    },

  description:{
    marginTop: 5,
    fontSize:15,
  },

  descriptionWrapper:{
    height: '30%',
    paddingHorizontal: 15,
    },

})
export default ListItem;