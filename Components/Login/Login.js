// Example using createStackNavigator
import { createStackNavigator } from "@react-navigation/stack";
import OTP from "./OTP_screen";
import Login from "./LoginPage";
import Register from "./RegisterForm";

Stack = createStackNavigator();

function LoginMain() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OTP"
        component={OTP}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default LoginMain;
