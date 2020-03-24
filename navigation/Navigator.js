
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MapScreen from '../screens/MapScreen'
import NewPlace from '../screens/NewPlace'
import PlaceDetails from '../screens/PlaceDetails'
import PlacesList from '../screens/PlacesList'



const AppNavigator = createStackNavigator({
  Places:PlacesList,
  Details:PlaceDetails,
  NewPlace:NewPlace,
  Map:MapScreen
},
{
  defaultNavigationOptions: {
    headerTitleAlign:'center',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
}
);

export default createAppContainer(AppNavigator);