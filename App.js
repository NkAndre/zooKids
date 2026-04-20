import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import menu from './src/pages/menu';
import territorio1 from './src/pages/territorio1';
import territorio2 from './src/pages/territorio2';
import territorio3 from './src/pages/territorio3';
import territorio4 from './src/pages/territorio4';
import territorio5 from './src/pages/territorio5';
import territorio6 from './src/pages/territorio6';

const Stack = createNativeStackNavigator ();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="menu" component={menu}
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen name="territorio1" component={territorio1}
          options={{
            title: "Território 1",
            headerStyle:{backgroundColor:'#F9A41E' },
            headerTintColor:'#fff',
            headerTitleAlign: 'center',
        
            // headerShown:false,
          }}
        />
        <Stack.Screen name="territorio2" component={territorio2}
          options={{
            title: "Território 2",
            headerStyle:{backgroundColor: '#5691BF'},
            headerTintColor:'#fff',
            headerTitleAlign: 'center',
            // headerShown:false,
          }}
        />
        <Stack.Screen name="territorio3" component={territorio3}
          options={{
            title: "Território 3",
            headerStyle:{backgroundColor: '#8F2C22'},
            headerTintColor:'#fff',
            headerTitleAlign: 'center',
            // headerShown:false,
          }}
        />
        <Stack.Screen name="territorio4" component={territorio4}
          options={{
            title: "Território 4",
            headerStyle:{backgroundColor: '#DD59A4'},
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            //headerShown:false,
          }}
        />
        <Stack.Screen name="territorio5" component={territorio5}
          options={{
            title: "Território 5",
            headerStyle:{backgroundColor: '#006C57'},
            headerTintColor:'#fff',
            headerTitleAlign: 'center',
             //headerShown:false,
          }}
        />
        <Stack.Screen name="territorio6" component={territorio6}
          options={{
            title: "Território 6",
            headerStyle:{backgroundColor: '#92B527'},
            headerTintColor:'#fff',
            headerTitleAlign: 'center',
             //headerShown:false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}