// src/screens/HomeScreen.js
// Pantalla de Inicio (T27 · #27). Sigue el boceto docs/bocetos/01-inicio.png
// y usa solo valores del tema (src/theme).
//
// - Encabezado navy propio con logo y "Tu tienda, más cerca." (se oculta el del Stack).
// - Bienvenida, ilustración y botón naranja "Ver catálogo" que abre la ruta "Catalog".
// - Tarjeta con "Envíos a toda GT" y "Compra segura".
// Las imágenes están en assets/home/ (recortadas del boceto).

import { useLayoutEffect } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing, radius, shadow, touchTarget } from '../theme/spacing';

const imagenes = {
  logo: require('../../assets/home/icon-logo.png'),
  perfil: require('../../assets/home/icon-perfil.png'),
  ilustracion: require('../../assets/home/home-ilustracion.png'),
  flecha: require('../../assets/home/icon-flecha.png'),
  envio: require('../../assets/home/icon-envio.png'),
  seguro: require('../../assets/home/icon-seguro.png'),
};

export default function HomeScreen({ navigation }) {
  // Esta pantalla dibuja su propio encabezado (como en el boceto).
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />

      {/* Encabezado */}
      <SafeAreaView edges={['top']} style={styles.header}>
        <View style={styles.headerRow}>
          <View style={styles.brand} accessibilityRole="header">
            <Image source={imagenes.logo} style={styles.logo} />
            <View>
              <Text style={styles.logoText}>ShopGT</Text>
              <Text style={styles.slogan}>Tu tienda, más cerca.</Text>
            </View>
          </View>
          <Image source={imagenes.perfil} style={styles.perfil} accessibilityElementsHidden />
        </View>
      </SafeAreaView>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Bienvenida */}
        <Text style={styles.overline}>Comprar bien se siente bien</Text>
        <Text style={styles.title}>¡Bienvenido a ShopGT!</Text>
        <Text style={styles.subtitle}>Encuentra lo que necesitas en nuestra tienda virtual.</Text>

        {/* Ilustración */}
        <Image
          source={imagenes.ilustracion}
          style={styles.ilustracion}
          resizeMode="contain"
          accessibilityLabel="Carrito de compras con productos"
        />
        <Text style={styles.tagline}>Tus favoritos, a un toque de distancia.</Text>

        {/* Botón principal */}
        <Pressable
          onPress={() => navigation.navigate('Catalog')}
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
          accessibilityRole="button"
          accessibilityLabel="Ver catálogo"
        >
          <Text style={styles.buttonText}>Ver catálogo</Text>
          <Image source={imagenes.flecha} style={styles.flecha} />
        </Pressable>

        {/* Beneficios */}
        <View style={styles.beneficios}>
          <View style={styles.beneficio}>
            <Image source={imagenes.envio} style={styles.iconoEnvio} />
            <View style={styles.beneficioTexto}>
              <Text style={styles.beneficioTitulo}>Envíos a toda GT</Text>
              <Text style={styles.beneficioDetalle}>Hasta tu puerta</Text>
            </View>
          </View>
          <View style={styles.divisor} />
          <View style={styles.beneficio}>
            <Image source={imagenes.seguro} style={styles.iconoSeguro} />
            <View style={styles.beneficioTexto}>
              <Text style={styles.beneficioTitulo}>Compra segura</Text>
              <Text style={styles.beneficioDetalle}>Paga con confianza</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Encabezado
  header: {
    backgroundColor: colors.primary,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: spacing.md,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 28,
    marginRight: spacing.md,
  },
  logoText: {
    ...typography.logo,
    color: colors.onPrimary,
  },
  slogan: {
    ...typography.caption,
    color: colors.onPrimary,
  },
  perfil: {
    width: 42,
    height: 42,
  },

  // Contenido
  content: {
    padding: spacing.lg,
    paddingBottom: spacing.xl,
  },
  overline: {
    ...typography.overline,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  title: {
    ...typography.display,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
  },
  ilustracion: {
    width: '100%',
    height: 200,
    marginTop: spacing.lg,
  },
  tagline: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.md,
    marginBottom: spacing.md,
  },

  // Botón
  button: {
    minHeight: touchTarget,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.accent,
    borderRadius: radius.lg,
    paddingVertical: spacing.md,
    ...shadow.button,
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonText: {
    ...typography.button,
    color: colors.onAccent,
  },
  flecha: {
    width: 25,
    height: 24,
    position: 'absolute',
    right: spacing.lg,
  },

  // Beneficios
  beneficios: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginTop: spacing.lg,
    ...shadow.card,
  },
  beneficio: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  beneficioTexto: {
    flex: 1,
    marginLeft: spacing.sm,
  },
  beneficioTitulo: {
    ...typography.bodyBold,
    color: colors.primary,
  },
  beneficioDetalle: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: spacing.xxs,
  },
  iconoEnvio: {
    width: 28,
    height: 25,
  },
  iconoSeguro: {
    width: 26,
    height: 26,
  },
  divisor: {
    width: 1,
    backgroundColor: colors.border,
    marginHorizontal: spacing.sm,
  },
});
