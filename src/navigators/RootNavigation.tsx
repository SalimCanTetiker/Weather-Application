import { NavigationContainer } from "@react-navigation/native"
import HomeTab from "./HomeTab"

const RootNavigation = () => {
  return (
    <NavigationContainer>
        <HomeTab />
    </NavigationContainer>
  )
}

export default RootNavigation