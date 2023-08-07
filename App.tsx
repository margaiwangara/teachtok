import { NavigationContainer } from '@react-navigation/native';

import BottomNavigation from './src/routes/BottomNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}
