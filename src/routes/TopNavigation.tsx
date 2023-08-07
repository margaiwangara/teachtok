import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { FollowingScreen, ForYouScreen } from '../sub-screens';

const Tabs = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Following" component={FollowingScreen} />
      <Tabs.Screen name="For You" component={ForYouScreen} />
    </Tabs.Navigator>
  );
}
