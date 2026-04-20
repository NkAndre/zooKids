import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>LOGIN</Text>
      <Pressable onPress={ () => navigation.navigate('menu')}>
        <Text style={styles.pressable}>MENU</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}