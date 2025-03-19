import { Text, View ,Pressable, TouchableOpacity,Image } from "react-native";
import {styles} from "../../styles/auth.styles"
import { Link } from "expo-router";
import { useAuth } from '@clerk/clerk-expo';

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href={"/notifications"}>Visit Notification Screen</Link>
    </View>
  );
}

