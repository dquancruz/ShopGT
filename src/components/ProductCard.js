import React from 'react';

import {View, Text, Image, Pressable, StyleSheet} from 'react-native';

import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing, radius, shadow } from '../theme/spacing';
import { formatPrice } from '../utils/formatPrice';

export default function ProductCard({
  producto,
  alAgregarAlCarrito,
  alPresionar,
}) {
  if (!producto) return null;

  return (
    <View style={estilos.tarjeta}>
      <Pressable
        onPress={() => alPresionar?.(producto)}
        style={estilos.contenido}
      >
        <Image
          source={{ uri: producto.thumbnail }}
          style={estilos.imagen}
          resizeMode="contain"
        />

        <Text style={estilos.nombre} numberOfLines={2}>
          {producto.title}
        </Text>

        <Text style={estilos.categoria} numberOfLines={1}>
          {producto.category}
        </Text>

        <View style={estilos.contenedorValoracion}>
          <Text style={estilos.estrella}>★</Text>
          <Text style={estilos.valoracion}>
            {Number(producto.rating || 0).toFixed(1)}
          </Text>
        </View>

        <Text style={estilos.precio}>
          {formatPrice(producto.price)}
        </Text>
      </Pressable>

      <Pressable
        style={estilos.botonAgregar}
        onPress={() => alAgregarAlCarrito?.(producto)}
        accessibilityRole="button"
        accessibilityLabel={`Agregar ${producto.title} al carrito`}
      >
        <Text style={estilos.textoBoton}>
          + Añadir al carrito
        </Text>
      </Pressable>
    </View>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.sm,
    margin: spacing.xs,
    ...shadow.card,
  },

  contenido: {
    width: '100%',
  },

  imagen: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: radius.md,
    backgroundColor: colors.background,
  },

  nombre: {
    ...typography.body,
    color: colors.text,
    marginTop: spacing.sm,
  },

  categoria: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },

  contenedorValoracion: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.xs,
  },

  estrella: {
    color: colors.rating,
    marginRight: spacing.xs,
  },

  valoracion: {
    ...typography.caption,
    color: colors.textSecondary,
  },

  precio: {
    ...typography.price,
    color: colors.primary,
    marginTop: spacing.sm,
  },

  botonAgregar: {
    backgroundColor: colors.accent,
    borderRadius: radius.sm,
    padding: spacing.sm,
    marginTop: spacing.sm,
    alignItems: 'center',
    ...shadow.button,
  },

  textoBoton: {
    ...typography.small,
    color: colors.onAccent,
  },
});
