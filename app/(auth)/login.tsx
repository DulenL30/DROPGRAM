import { View, Text } from 'react-native';
import { styles } from '@/styles/auth.styles';
import { COLORS } from '@/constants/theme';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


export default function login() {
  return (
    <View style={styles.container}>
        <View style={styles.brandSection}>
            <View style={styles. logoContainer}>
                <FontAwesome5 name="fire" size={42} color={COLORS.primary} />
            </View>
            <Text style={styles.appName}>Dropgram</Text>
            <Text style={styles. tagline}>Cuba</Text>
        </View>

    </View>
  )
}






