import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type UserActionsProps = {
  iconName: keyof typeof Ionicons.glyphMap;
  iconSize?: number;
};

export default function UserActions({
  iconName,
  iconSize = 35,
}: UserActionsProps) {
  return (
    <TouchableOpacity style={{ marginTop: 15 }}>
      <View>
        <Ionicons name={iconName} size={iconSize} />
      </View>
      <Text style={{ textAlign: 'center' }}>87</Text>
    </TouchableOpacity>
  );
}
