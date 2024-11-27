import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomePage from "../screens/HomePage/HomePage"
import SettingsPage from "../screens/SettingsPage/SettingsPage"
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

const HomeTab = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: "#489bff",
      tabBarInactiveTintColor: "#7c7c7c",
      tabBarStyle: {
        position: "absolute",
        height: 74,
        width: 357,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        borderRadius: 28
      }
    }}>
      <Tab.Screen name="Home" component={HomePage} options={{
        tabBarIcon: ({color}) => (
          <Ionicons name="cloud-circle" size={30} color={color} />
        )
      }} />
      <Tab.Screen name="Settings" component={SettingsPage}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="settings-sharp" size={30} color={color} />
          )
        }} />
    </Tab.Navigator>
  )
}

export default HomeTab