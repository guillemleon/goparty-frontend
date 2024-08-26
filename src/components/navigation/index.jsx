import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../../screens/search';
import Profile from '../../screens/profile';
import Home from '../../screens/home';
import {colors} from '../../variables';
import Favorites from '../../screens/favorites';
import {ICONS} from '../../icons';
import {Image} from 'react-native';
import logoHeader from '../../assets/images/logo-header.png';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarShowLabel: false,
        headerTitle: '',
        tabBarStyle: {
          backgroundColor: colors.black,
          borderTopWidth: 0,
        },
        headerStyle: {
          backgroundColor: colors.black,
          shadowOpacity: 0,
        },
        headerLeft: () => (
          <Image source={logoHeader} style={{marginLeft: 27}} />
        ),
      }}>
      <Tab.Screen
        name="HOME"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => ICONS['home'](color, size),
        }}
      />
      <Tab.Screen
        name="SEARCH"
        component={Search}
        options={{
          tabBarIcon: ({color, size}) => ICONS['search'](color, size),
        }}
      />
      <Tab.Screen
        name="FAVORITES"
        component={Favorites}
        options={{
          tabBarIcon: ({color, size}) => ICONS['favorites'](color, size),
        }}
      />
      <Tab.Screen
        name="PROFILE"
        component={Profile}
        options={{
          tabBarActiveTintColor: colors.orange,
          tabBarInactiveTintColor: '#FFFFFF',
          tabBarIcon: ({color, size}) => ICONS['profile'](color, size),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
