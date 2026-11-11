import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

// Muestra el mensaje de un error y un botón "Reintentar".
// Props:
//   message: texto del error (normalmente error.message)
//   onRetry: función que se ejecuta al tocar "Reintentar"
// Ejemplo de uso:
//   if (error) return <ErrorMessage message={error} onRetry={cargarProductos} />;
export default function ErrorMessage({ message, onRetry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <Pressable style={styles.button} onPress={onRetry}>
        <Text style={styles.buttonText}>Reintentar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    backgroundColor: colors.background,
  },
  message: {
    color: colors.error,
    fontSize: typography.fontSize.body,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: spacing.xs,
  },
  buttonText: {
    color: colors.onPrimary,
    fontSize: typography.fontSize.body,
    fontWeight: typography.fontWeight.bold,
  },
});
