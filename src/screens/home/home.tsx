import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import TopNavigation from '../../routes/TopNavigation';

const backgroundImageURL = {
  uri: 'https://unsplash.com/photos/KhFFrYZM6wQ',
};

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <TopNavigation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'pink',
  },
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
