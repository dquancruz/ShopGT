import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TiendaStack from './TiendaStack';
import CarritoStack from './CarritoStack';

const Tab = createBottomTabNavigator();

// Navegación principal: dos tabs, cada uno con su propio stack.
// Los stacks ya muestran su propio encabezado, por eso el del tab se oculta.
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarIconStyle: { display: 'none' } }}>
        <Tab.Screen name="Tienda" component={TiendaStack} />
        <Tab.Screen name="Carrito" component={CarritoStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
