import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

import Register from "../screens/Register/Register";
import Loading from "../screens/Loading/Loading";
import Home from "../screens/Home/Home";
import Question from '../screens/Question/Question'

const LoadingStack = createStackNavigator({
  Loading: {
    screen: Loading,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});

const RegisterStack = createStackNavigator({
    Register: {
      screen: Register,
      navigationOptions: ({ navigation }) => ({
        header: null
      })
    },
  });

const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        headerStyle:{backgroundColor:'#251b5a'},
        headerTitle:'interView',
        headerTitleStyle:{color:'#fff'}
      })
    },
    Question:{
        screen: Question,
        navigationOptions: ({ navigation }) => ({
          headerStyle:{backgroundColor:'#251b5a',color:'#fff'},
          headerLeftContainerStyle:{color:'#fff'},
          headerTintColor: 'white',
        })
    }
  },
  {
    initialRouteName: "Home"
  }
);

const Router = createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingStack,
      Register : RegisterStack,
      App: AppStack
    },
    {
      initialRouteName: "Loading",
      resetOnBlur: true
    }
  )
);

export default Router;
