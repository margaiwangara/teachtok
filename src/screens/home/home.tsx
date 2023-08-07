import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

import TopNavigation from '../../routes/TopNavigation';
import { useAppUsageTracker } from '../../hooks/use-timer';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const { appUsage, formatTime } = useAppUsageTracker();

  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <View
          style={{
            backgroundColor: '#ffffff',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            justifyContent: 'center',
          }}
        >
          <Ionicons name="timer" size={30} />
          <Text style={{ marginLeft: 5, fontWeight: '500', fontSize: 17 }}>
            {formatTime(appUsage)}m
          </Text>
        </View>
        <TopNavigation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
  },
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
