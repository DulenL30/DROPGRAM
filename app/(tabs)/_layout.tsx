import {Tabs} from 'expo-router';
import {Ionicons} from '@expo/vector-icons'
import { COLORS } from '@/constants/theme';
import { Colors } from 'react-native/Libraries/NewAppScreen';



export default function TabLayout() {
  return (
    
    <Tabs screenOptions={{
        
        tabBarShowLabel: false,
        headerShown:false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: Colors.grey,

        tabBarStyle:{
            backgroundColor:'black',
            borderWidth:0,
            position:'absolute',
            elevation:0,
            height:40,
            paddingBottom:8,
        }
    }}>
        
        
        <Tabs.Screen 
        name='index'
        options={{
            tabBarIcon: ({size,color})=> <Ionicons name="home" size={size} color={color}/>,
        }}
        />
        <Tabs.Screen 
        name='bookmarks'
        options={{
            tabBarIcon: ({size,color})=> <Ionicons name="bookmarks" size={size} color={color}/>,
        }}
        />

        <Tabs.Screen 
        name='create'
        options={{
            tabBarIcon: ({size})=> <Ionicons name="add-circle" size={size} color={COLORS.primary}/>,
        }}

        />


        <Tabs.Screen 
        name='notifications'
        options={{
            tabBarIcon: ({size,color})=> <Ionicons name="heart" size={size} color={color}/>,
        }}
        />

        <Tabs.Screen 
        name='profile'
        options={{
            tabBarIcon: ({size,color})=> <Ionicons name="person" size={size} color={color}/>,
        }}
        />
    </Tabs>
  )
}