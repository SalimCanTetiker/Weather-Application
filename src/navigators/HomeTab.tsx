import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomePage from "../screens/HomePage/HomePage"
import SettingsPage from "../screens/SettingsPage/SettingsPage"

const Tab = createBottomTabNavigator()

const HomeTab = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Settings" component={SettingsPage} />
    </Tab.Navigator>
  )
}

export default HomeTab