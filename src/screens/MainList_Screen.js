import React, {useEffect} from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import ListItem from '../components/ListItem';
import * as articleAction from '../redux/actions/articleAction';

const MainList_Screen=props=>{
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(articleAction.fetchArticles())
      console.log(articles)
   }, [dispatch]);

    const { articles } = useSelector(state => state.artifact.articles);
    console.log(articles)

    return (
        <View>
            <FlatList
                data={articles}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                keyExtractor={item => item.url}
                renderItem={({ item }) => (
                    <ListItem
                        navigation={props.navigation}
                        title={item.title}
                        image={item.urlToImage}
                        description={item.description}
                        url={item.url}
                    />)} />

        </View>
      
  )

} 


export default MainList_Screen;