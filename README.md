# 🍎 Calorie Tracker App

Aplicación desarrollada con React, TypeScript y useReducer para registrar alimentos consumidos y ejercicios realizados, permitiendo llevar un control diario de calorías consumidas, quemadas y el balance total.

## 🚀 Demo

🔗 Producción: https://contasor-caloria-reducer.netlify.app/

---

## 📋 Descripción

Este proyecto permite registrar actividades relacionadas con alimentación y ejercicio físico.

Cada actividad almacena:

* Nombre de la actividad
* Categoría (Comida o Ejercicio)
* Cantidad de calorías

La aplicación calcula automáticamente:

* Calorías consumidas
* Calorías quemadas
* Diferencia total de calorías

Además, los datos permanecen almacenados gracias a LocalStorage.

---

## ✨ Características

* Agregar comidas y ejercicios.
* Editar actividades existentes.
* Eliminar actividades individuales.
* Reiniciar toda la aplicación.
* Persistencia de datos mediante LocalStorage.
* Validación de formularios.
* Estadísticas en tiempo real.
* Tipado completo con TypeScript.
* Manejo de estado con useReducer.
* Diseño responsive con Tailwind CSS.

---

## 🛠️ Tecnologías Utilizadas

* React
* TypeScript
* Vite
* Tailwind CSS
* Heroicons
* useReducer
* useMemo
* useEffect
* LocalStorage API

---

## 📦 Instalación

Clona el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Ingresa al directorio:

```bash
cd calorie-tracker
```

Instala las dependencias:

```bash
npm install
```

o

```bash
npm i
```

---

## ▶️ Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en:

```text
http://localhost:5173
```

---

## 🏗️ Generar Build de Producción

```bash
npm run build
```

Este comando:

1. Compila TypeScript.
2. Optimiza los archivos para producción.
3. Genera la carpeta:

```text
dist/
```

Lista para ser desplegada en cualquier hosting estático.

---

## 👀 Vista previa del Build

```bash
npm run preview
```

Permite ejecutar localmente la versión de producción generada por Vite.

---

## 📂 Estructura del Proyecto

```text
src/
│
├── components/
│   ├── ActivityList.tsx
│   ├── CalorieDisplay.tsx
│   ├── CalorieTracker.tsx
│   └── Form.tsx
│
├── reducers/
│   └── activity-reducer.ts
│
├── types/
│   └── index.ts
│
├── App.tsx
└── main.tsx
```

---

## 🧠 Conceptos Practicados

Durante el desarrollo de este proyecto se trabajó con:

* useState
* useReducer
* Dispatch y Actions
* Reducers tipados con TypeScript
* useMemo
* useEffect
* LocalStorage
* Renderizado condicional
* Componentes reutilizables
* Formularios controlados
* Validaciones
* Manejo de listas
* Tipado de Props

---

## 📸 Funcionalidades Principales

### Registrar alimentos

Permite sumar calorías consumidas.

### Registrar ejercicios

Permite contabilizar calorías quemadas.

### Editar actividades

Actualiza una actividad existente sin crear una nueva.

### Eliminar actividades

Permite borrar registros individuales.

### Reiniciar aplicación

Limpia completamente el estado y el LocalStorage.

### Persistencia de datos

La información permanece disponible incluso después de recargar la página.

---

## 🌐 Deployment

La aplicación fue desplegada utilizando Netlify.

Producción:

https://contasor-caloria-reducer.netlify.app/

---

## 👨‍💻 Autor

Adolfo Torres

* GitHub: https://github.com/CODEATD