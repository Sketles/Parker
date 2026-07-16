# Parker

Aplicación móvil/web hecha con **Ionic + Angular** para apoyar la búsqueda de estacionamientos y la gestión básica de vehículos.

## Resumen del proyecto (análisis rápido)

El proyecto incluye:

- Flujo inicial con pantallas de bienvenida y login (`slide`, `login`, `regoogle`, `renumero`).
- Vista principal con **Google Maps** (`home`).
- Módulo de **vehículos** con persistencia local en **SQLite** (agregar, listar, modificar y eliminar).
- Módulo de **geolocalización** usando plugin Cordova/Capacitor.
- Módulo de **estacionamiento** con consumo de API de ejemplo (`jsonplaceholder.typicode.com`).

## Tecnologías

- Ionic 6
- Angular 14
- Capacitor 4
- Cordova Plugins (SQLite y Geolocation)
- TypeScript

## Requisitos

- Node.js 16+ (recomendado para Angular 14)
- npm
- Ionic CLI (`npm i -g @ionic/cli`) opcional pero recomendado
- Android Studio (si se ejecuta en Android)

## Instalación

```bash
npm install
```

## Ejecución en desarrollo

```bash
npm start
```

## Scripts disponibles

```bash
npm run start   # levantar app en desarrollo
npm run build   # compilar aplicación
npm run lint    # análisis estático (eslint)
npm test        # pruebas unitarias (karma)
npm run e2e     # pruebas end-to-end
```

## Flujo para Android (Capacitor)

Comandos existentes en el repositorio (`COMANDOS-ARRANQUE.txt`):

```bash
npm install
npm install cordova-sqlite-storage
npm install @awesome-cordova-plugins/sqlite
npm install --save @awesome-cordova-plugins/core
ionic cap sync
ionic capacitor copy android
npx cap open android
```

## Estructura principal

```text
src/app/
├── Paginas/           # pantallas principales (home, login, slide, etc.)
├── PaginasMenu/       # secciones del menú (vehículo, geolocalización, ajustes, ayuda)
├── Servicios/
│   ├── API/           # consumo HTTP
│   └── DB/            # servicio SQLite
└── componentes/       # componentes compartidos
```

## Notas

- La carga de Google Maps se realiza en `src/index.html`.
- El proyecto incluye una carpeta `Testing/` con otro proyecto Ionic para pruebas/experimentos.
