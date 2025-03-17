import { Redirect } from 'expo-router';
import { View, Text } from 'react-native'


export default function Index() {
  return <Redirect href ="/(auth)/login"/>;
}