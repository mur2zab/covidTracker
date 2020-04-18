import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
// import Login from './pages/Login';
import Home from './src/screens/Home';

const Navigation = createStackNavigator({
    // "Login": {screen: Login},
    "Home": {screen: Home}
})

export default createAppContainer(Navigation);