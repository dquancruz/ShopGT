# Mini Tienda Virtual - ShopGT Guatemala

Aplicación móvil Android de una tienda virtual para la empresa ficticia ShopGT Guatemala. Es un proyecto universitario hecho con React Native (Expo) que consume la API pública [DummyJSON](https://dummyjson.com/docs/products) para mostrar productos, buscarlos, filtrarlos por categoría y armar un carrito de compras.

## Requisitos

- [Node.js](https://nodejs.org/) versión LTS, 22.13 o superior (Expo SDK 58 no funciona con versiones anteriores)
- Git
- La app **Expo Go** instalada en un celular Android ([Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent))
- El celular y la computadora deben estar en la misma red Wi-Fi

## Cómo correr la app

1. Clona el repositorio y entra a la carpeta:

   ```bash
   git clone https://github.com/dquancruz/ShopGT.git
   cd ShopGT
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npx expo start
   ```

4. Abre **Expo Go** en el celular y escanea el código QR que aparece en la terminal.

Si el celular no logra conectarse, prueba con `npx expo start --tunnel`.

## Estructura de carpetas

```
.
├── App.js              # Punto de entrada de la app
├── app.json            # Configuración de Expo
├── docs/               # Documentación del proyecto
├── src/
│   ├── api/            # Llamadas a la API de DummyJSON
│   ├── components/     # Componentes reutilizables
│   ├── context/        # Estado global (carrito)
│   ├── navigation/     # Tabs y stacks de React Navigation
│   ├── screens/        # Pantallas de la app
│   ├── theme/          # Colores, tipografía y espaciados
│   └── utils/          # Funciones de ayuda
└── .github/            # Plantillas de issues y pull requests
```

## Cómo subir cambios

1. Antes de empezar, ejecuta `git pull`.
2. Haz commits pequeños con mensajes claros (`feat:`, `fix:`, `docs:`).
3. Cuando termines un issue, escribe `closes #N` en el mensaje del último commit para que se cierre solo. Ejemplo: `feat: pantalla del carrito (closes #24)`.
4. Luego ejecuta `git push` a main.

## Equipo

<!-- Cada integrante se agrega aquí en el ticket T04. -->
