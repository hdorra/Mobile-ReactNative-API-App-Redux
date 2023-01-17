# Mobile API React Native App with Redux
Simple React Native front-end mobile app that fetches data from an API and renders it on the screen with some additional capability. 

This uses React Native as a front-end with Redux for state management as well as Expo to simplify and speed up the the development process.

***Some Comments***</br>
1.	This is intended for learning purposes. The final styling is not optimized for all mobile devices.</br>
2.	The API string has been removed any API can be fetched. However, the object that is being returned containing the array rendering on the screen needs to be considered when updating the redux flow.</br>
    ~ For reference – the current API returns: title, url, image, description. The redux flow needs to be updated if the API being used returns different fields.</br>

**Features**</br>
1.	All articles are rendered in the Home tab. Users can click on the favorites icon which will save articles on the Favorites tab as well. Favorites can be toggled – click and unclick will add and remove the article from the favorites tab respectively. </br>
2.	The main screen has a snap and set feature in the Flatlist component – where as you scroll and release the touch, the screen will ‘snap’ to the current screen. </br>
3.	Clicking on the article will take the user to a details screen. The screen will have a link to the full article on the original site. </br>
4.	The main screen has concatenated titles and descriptions. If the title or description is longer than the character limit set, the user can see the entire detail by clicking on the article and navigating to the details screen. </br>
5.  The API url has been removed in the code that has been uploaded in the respository. Demo is shown before the url has been removed.
     The url will need to be updated in the articleAction.js file:</br>
     
      ![image](https://user-images.githubusercontent.com/13279722/212825991-917705f7-884e-4115-99e7-c78721465d2d.png)


6.  The API returns other data points that are not rendered on the screen but can easily be formatted and added.


**Demo**</br>
Here, you can see the snap back to each article window, as well as the toggle effect of clicking on the favorite icon.</br>

https://user-images.githubusercontent.com/13279722/212824673-ad9b3549-e7e2-47e8-83c7-467fd6ca6c55.MP4

