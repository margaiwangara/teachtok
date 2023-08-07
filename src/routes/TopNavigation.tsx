import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import {
  Animated,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';

import { FollowingScreen, ForYouScreen } from '../sub-screens';

const width = Dimensions.get('window').width;
const Tabs = createMaterialTopTabNavigator();

function MyTabBar({
  state,
  descriptors,
  navigation,
  position,
}: MaterialTopTabBarProps) {
  return (
    <View style={myTabBarStyles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented)
          navigation.navigate(route.name, { name: route.name, merge: true });

        const onLongPress = () =>
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity key={index}>
            <Animated.Text style={{ opacity }}>
              {label.toString()}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function MyTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Following" component={FollowingScreen} />
      <Tabs.Screen name="For You" component={ForYouScreen} />
    </Tabs.Navigator>
  );
}

const myTabBarStyles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
