import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import CreateAccountName from './screens/register/CreateAccountName';
import Landing from './screens/Landing';
import CreateAccountDOB from './screens/register/CreateAccountDOB';
import CreateAccountGender from './screens/register/CreateAccountGender';
import CreateAccountEmail from './screens/register/CreateAccountEmail';
import CreateAccountPassword from './screens/register/CreateAccountPassword';
import ProfileScreen from './screens/profile/ProfileScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: '', headerShown: false }} />
        ) : (
          <>
            <Stack.Screen name="Landing" component={Landing} options={{ title: '', headerShown: false }} />
            <Stack.Screen name="Create account name" component={CreateAccountName} options={{ title: '', headerShadowVisible: false }} />
            <Stack.Screen name="Create account dob" component={CreateAccountDOB} options={{ title: '', headerShadowVisible: false }} />
            <Stack.Screen name="Create account gender" component={CreateAccountGender} options={{ title: '', headerShadowVisible: false }} />
            <Stack.Screen name="Create account email" component={CreateAccountEmail} options={{ title: '', headerShadowVisible: false }} />
            <Stack.Screen name="Create account password" component={CreateAccountPassword} options={{ title: '', headerShadowVisible: false }} />
          </>
        )}

      </Stack.Navigator>

    </NavigationContainer>
  )
}



export default App