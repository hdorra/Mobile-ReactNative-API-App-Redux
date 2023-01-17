import React from 'react';
import { Linking, StyleSheet, View, Text, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import * as articleAction from '../redux/actions/articleAction'


const Details_Screen = props => {

    const { articleUrl } = props.route.params;
    const article = useSelector(state => state.artifact.articles.articles.find(article => article.url === articleUrl));
    const isFav = useSelector(state => state.artifact.favorites.some(article => article.url === article.url));
    const dispatch = useDispatch();


    return (
        <View style={styles.container}>

            <View style={styles.heading}>
                <Text style={styles.title}>{article.title}</Text>
            </View>
            <View>
                <ImageBackground source={{ uri: article.urlToImage }} style={styles.image}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.author}>{article.author}</Text>
                        <MaterialIcons
                            name={isFav ? 'favorite' : 'favorite-border'}
                            color='#72bcd4'
                            size={24}
                            onPress={() => {
                                dispatch(articleAction.toggleFavorites(article.url))
                            }}
                        />
                     </View>
                </ImageBackground>
            </View>
            
            <View style={styles.description}>
                <Text style={styles.descriptionText}>{article.description}</Text>
            </View>
            <View >
                <Text style={styles.url}
                    onPress={() => Linking.openURL(article.url)} >
                    Click Here To Go To Full Article!
                </Text>    
              
        </View>
      </View>
  )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20
    },
    heading: {
        marginHorizontal: 20,
        marginBottom: 10
    },
    title: {
        fontSize: 24
    },
    image: {
        width: '100%',
        height: 200,
        justifyContent: 'flex-end'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    author: {
        fontSize: 20,
        color: 'white',
    },
    description: {
        marginTop: 15,
        margin: 10,
    },
    descriptionText: {
        fontSize: 20,
    },
   
    url: {
        fontSize: 20,
        marginLeft: 10,
        color: 'blue',

    },


});
export default Details_Screen;