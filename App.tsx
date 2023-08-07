import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import BottomNavigation from './src/routes/BottomNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <BottomNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
