import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { colors } from '../theme/colors';

// Indicador de carga centrado. Se muestra mientras se esperan datos de la API.
// Ejemplo de uso:
//   if (cargando) return <Loader />;
export default function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
});
