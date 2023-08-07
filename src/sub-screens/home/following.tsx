import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useEffect } from 'react';

import UserActions from '../../components/user-actions';
import { useRequest } from '../../hooks/use-request';

const dimensions = Dimensions.get('window');

export default function FollowingScreen() {
  const { makeRequest, data, error, isLoading } = useRequest();

  useEffect(() => {
    makeRequest('get', '/following');
  }, []);

  console.log('data', data);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }} />
      <View style={styles.bottom}>
        <View style={styles.bottomLeft}>
          <View>
            <Text style={{ fontSize: 20 }}>
              {isLoading ? 'Loading...' : data?.flashcard_front}
            </Text>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 15, marginBottom: 3 }}>
              {isLoading ? 'Loading...' : data?.user?.name}
            </Text>
            <Text style={{ fontSize: 12 }}>
              {isLoading ? 'Loading...' : data?.description}
            </Text>
          </View>
        </View>
        <View style={styles.bottomRight}>
          <TouchableOpacity style={styles.profileImageWrapper}>
            <Image
              style={styles.profileImageStyle}
              source={{
                uri: isLoading
                  ? 'https://reactnative.dev/img/tiny_logo.png'
                  : data?.user?.avatar,
              }}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <UserActions iconName="heart" />
          <UserActions iconName="bookmark" />
          <UserActions iconName="chatbubble-ellipses" />
          <UserActions iconName="arrow-redo" />
          <UserActions iconName="sync" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    flexDirection: 'row',
    minHeight: Math.floor(dimensions.height / 2),
    padding: 16,
    paddingTop: 25,
  },
  bottomLeft: {
    flex: 1,
    paddingTop: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bottomRight: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileImageWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ffffff',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
