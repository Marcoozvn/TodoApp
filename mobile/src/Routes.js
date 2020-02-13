	
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Home from './pages/Home';
import Details from './components/TaskCard';
import TaskForm from './components/TaskForm';

const Routes = createAppContainer(
  createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home'
      }
    },
    Details: {
      screen: Details,
      navigationOptions: {
        title: 'Detalhes'
      }
    },
    TaskForm: {
      screen: TaskForm,
      navigationOptions: {
        title: 'Nova Tarefa'
      }
    }
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#FFF',
      headerBackTitleVisible: true,
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#7159c1',
      }
    }
  })
);

export default Routes;