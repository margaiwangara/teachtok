import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useEffect, useState } from 'react';

import UserActions from '../../components/user-actions';
import { useRequest } from '../../hooks/use-request';
import { styles as stl } from './for-you.styles';
import { apiRequest } from '../../lib/request';

const dimensions = Dimensions.get('window');

export default function ForYouScreen() {
  const [correctAnswer, setCorrectAnswer] = useState([]);

  const { makeRequest, data, error, isLoading } = useRequest();

  useEffect(() => {
    makeRequest('get', '/for_you');
  }, []);

  const onAnswerPress = async () => {
    const result = (await apiRequest('get', `/reveal?id=${data?.id}`)) as {
      correct_options: { id: string; answer: string }[];
    };
    const correct = result?.correct_options
      ? result?.correct_options?.map((c) => c.id)
      : null;

    setCorrectAnswer(correct);
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={stl.top}>
        <Text style={stl.topFont}>
          {isLoading ? 'Loading...' : data?.question}
        </Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomLeft}>
          <View style={{ paddingRight: 10, flex: 1, justifyContent: 'center' }}>
            {isLoading ? (
              <Text>Loading...</Text>
            ) : (
              <>
                {data?.options?.map((option) => (
                  <TouchableOpacity key={option.id} onPress={onAnswerPress}>
                    <View
                      style={[
                        stl.multipleChoiceOption,
                        {
                          backgroundColor: correctAnswer.includes(option.id)
                            ? 'green'
                            : 'rgba(0, 0, 0, 0.5)',
                        },
                      ]}
                    >
                      <Text style={stl.multipleChoiceOptionText}>
                        {option?.answer}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </>
            )}
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
