import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '@/styles/auth.styles';
import { COLORS } from '@/constants/theme';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Ionicons } from '@expo/vector-icons';
import { useSSO } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';



export default function login() {
  const{startSSOFlow} = useSSO()
  const router = useRouter();
  const handleGoogleSignIn = async () =>{

    try{
      const { createdSessionId, setActive } = await startSSOFlow({ strategy:"oauth_google" });


      if (setActive && createdSessionId){
        setActive({session: createdSessionId})
        router.replace("/(tabs)")
      }
      

    } catch (error){
      console.error("OAuth error:", error)
    }
  };
  
  

  return (
    <View style={styles.container}>
        <View style={styles.brandSection}>
            <View style={styles. logoContainer}>
                <FontAwesome5 name="fire" size={42} color={COLORS.primary} />
            </View>
            <Text style={styles.appName}>Dropgram</Text>
            <Text style={styles. tagline}> Your World, Your Moments </Text>
        </View>

        <View style={styles.loginSection}>
          <TouchableOpacity 
            style={styles.googleButton}
            onPress={handleGoogleSignIn}
            activeOpacity={0.9}
          >
            <View style={styles.googleIconContainer}>
              <FontAwesome5 name="google" size={20} color={COLORS.surface} />
            </View>
            <Text style={styles.googleButtonText}>Continue with Google</Text>
          </TouchableOpacity>
          
          <Text style={styles.termsText}>By continuing, you agree to our Terms and Privacy Policy.</Text>
        </View>

    </View>
  )
}