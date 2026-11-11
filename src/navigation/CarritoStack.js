import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CartScreen from '../screens/CartScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';

const Stack = createNativeStackNavigator();

// Stack del tab "Carrito": Carrito -> Confirmación de la compra.
export default function CarritoStack() {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen name="Cart" component={CartScreen} options={{ title: 'Carrito' }} />
      <Stack.Screen
        name="Confirmation"
        component={ConfirmationScreen}
        options={{ title: 'Confirmación' }}
      />
    </Stack.Navigator>
  );
}
