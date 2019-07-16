import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

import Register from "../screens/Register/Register";
import Loading from "../screens/Loading/Loading";
import Home from "../screens/Home/Home";
import Question from '../screens/Question/Question'
import Finish from '../screens/Finish/Finish'

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

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        headerStyle:{backgroundColor:'#251b5a'},
        headerTitle:'interView',
        headerTitleStyle:{color:'#fff'}
      })
    }
  }
);
const QuestStack = createStackNavigator(
  {
    Question:{
        screen: Question, 
    }
  }
);

const FinishStack = createStackNavigator(
  {
    FinishScreen:{
        screen: Finish,
        navigationOptions: ({ navigation }) => ({
          headerStyle:{backgroundColor:'#251b5a'},
          headerTitle:'interView',
          headerTitleStyle:{color:'#fff'}
        })
    }
  }
);
const Router = createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingStack,
      Register : RegisterStack,
      Home: HomeStack,
      Quest: QuestStack,
      Finish: FinishStack
    },
    {
      initialRouteName: "Loading",
      resetOnBlur: true
    }
  )
);

export default Router;
