export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const TOGGLE_FAVORITES = 'TOGGLE_FAVORITES';

export const fetchArticles = () => {
  
  return async (dispatch) => {
  //logic to fetch the data goes here
      
      const result = await fetch('<INSERT URL HERE>')

      const resultData = await result.json();
     console.log(resultData)
  
    dispatch({
         type: FETCH_ARTICLES,
         payload: resultData
    });
 
  }
}

export const toggleFavorites = url => {
    return {
        type: TOGGLE_FAVORITES,
        payload: url,
    }
}

