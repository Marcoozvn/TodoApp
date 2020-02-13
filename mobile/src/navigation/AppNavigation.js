import { createStackNavigator } from 'react-navigation-stack'
import Home from '../pages/Home';
import TaskForm from '../pages/TaskForm';

const AppNavigation = createStackNavigator(
  {
    Home: { 
      screen: Home,
      navigationOptions: {
        title: 'TodoApp',
        headerTransparent: true,
        headerShown: true,
        
      } 
    },
    TaskForm: {
      screen: TaskForm,
      navigationOptions: {
        title: 'Nova tarefa',
        headerStyle: {
          backgroundColor: '#7159c1',
          shadowOpacity: 0
        }
      }
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTintColor: '#FFF',
      headerBackTitleVisible: true,
      headerTitleAlign: 'center'
    }
  }
)

export default AppNavigation