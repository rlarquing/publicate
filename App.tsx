import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from "expo-font";

import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import Account from "./screens/Account";
import Plan from "./screens/Plan";
// import Home from "./screens/Home";
// import Register from "./screens/Register";
// import Profile from "./screens/Profile";
// import Settings from "./screens/Settings";
// import AddCard from "./screens/AddCard";
// import AddCardOld from "./screens/AddCardOld";
// import { registerRootComponent } from 'expo';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transpareent"
  }
}

const App = () => {
  const [firstTime, setFistTime] = React.useState(true);
  const [loaded] = useFonts({
    RobotoBlack: require("./assets/fonts/Roboto-Font/Roboto-Black.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Font/Roboto-Bold.ttf"),
    RobotoRegular: require("./assets/fonts/Roboto-Font/Roboto-Regular.ttf"),
    RobotoItalic: require("./assets/fonts/Roboto-Font/Roboto-Italic.ttf"),
    RobotoLight: require("./assets/fonts/Roboto-Font/Roboto-Light.ttf"),
    RobotoThin: require("./assets/fonts/Roboto-Font/Roboto-Thin.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Font/Roboto-Medium.ttf"),
    Impact: require("./assets/fonts/Impact-Font/impact.ttf"),
    Helvetica: require("./assets/fonts/Helvetica-Font/Helvetica.ttf"),
    HelveticaBold: require("./assets/fonts/Helvetica-Font/Helvetica-Bold.ttf"),
    HelveticaBoldOblique: require("./assets/fonts/Helvetica-Font/Helvetica-BoldOblique.ttf"),
    HelveticaCompressed: require("./assets/fonts/Helvetica-Font/helvetica-compressed.otf"),
    HelveticaLight: require("./assets/fonts/Helvetica-Font/helvetica-light.ttf"),
    HelveticaOblique: require("./assets/fonts/Helvetica-Font/Helvetica-Oblique.ttf"),
    HelveticaRoundedBold: require("./assets/fonts/Helvetica-Font/helvetica-rounded-bold.otf"),
  });

  if (!loaded) return null;

  // const _showWelcome = async () => {
  //   let welcomeApp = false;
  //   if (welcomeApp) {
  //     setFistTime(false);
  //   } else {
  //     setFistTime(true);
  //   }
  // }

  // _showWelcome();

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}
        initialRouteName={firstTime ? "Welcome" : "Login"}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Plan" component={Plan} />
        {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="AddCardOld" component={AddCardOld} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// registerRootComponent(App);
export default App;