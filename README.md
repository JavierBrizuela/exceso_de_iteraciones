<div align="center">

# **Develmatch**

<img src="https://i.imgur.com/pQKjqpx.png" alt="Develmatch Logo" width="200" />

## _Proyectos por y para Juniors_

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg)]()
[![Project Status](https://img.shields.io/badge/Project-Active-green.svg)]()

</div>

_**"Develmatch"** es una plataforma colaborativa donde los usuarios del rubro **IT** pueden encontrar y colaborar en **proyectos hechos específicamente por juniors para juniors** con la **finalidad** de encontrar oportunidades de **aprendizaje, desarrollo y** oportunidad de hacer **networking**_

<div align="center">
<img src="" alt="Funcionamiento de la plataforma" width="800">
</div>

<details>
<summary>Index</summary>

---

- [**Develmatch**](#develmatch)
  - [_Proyectos por y para Juniors_](#proyectos-por-y-para-juniors)
  - [Características](#características)
    - [**👀 Échale un vistazo: 👀**](#-échale-un-vistazo-)
  - [Para empezar](#para-empezar)
    - [Prerrequisitos](#prerrequisitos)
      - [🔙🔚 BACKEND](#-backend)
        - [• W̲i̲n̲d̲o̲w̲s̲](#-w̲i̲n̲d̲o̲w̲s̲)
        - [• M̲A̲C̲O̲S̲/̲L̲i̲n̲u̲x̲/̲W̲S̲L̲](#-m̲a̲c̲o̲s̲̲l̲i̲n̲u̲x̲̲w̲s̲l̲)
      - [💻🔚 FRONTEND](#-frontend)
    - [Instalación:](#instalación)
  - [Roles y respoonsabilidades de los miembros del grupo](#roles-y-respoonsabilidades-de-los-miembros-del-grupo)
    - [🔙🔚 BACKEND:](#-backend-1)
      - [👨‍💻 **Javier Brizuela**](#-javier-brizuela)
    - [💻🔚 FRONTEND:](#-frontend-1)
      - [👩‍💻 **Elena Expósito**](#-elena-expósito)
      - [👩‍💻 **Laura España**](#-laura-españa)
      - [👩‍💻 **Marina Matas**](#-marina-matas)
  - [About us](#about-us)
    - [💻🔚 FRONTEND:](#-frontend-2)
      - [👩‍💻 **Elena Expósito Lara**](#-elena-expósito-lara)
      - [👩‍💻 **Marina Matas Mata**](#-marina-matas-mata)
      - [👩‍💻 **Laura Español**](#-laura-español)
    - [🔙🔚 BACKEND:](#-backend-2)
      - [👨‍💻 **Javier Brizuela**](#-javier-brizuela-1)

</details>

---

## Características

- Formulario de registro de usuario
- Inicio de sesión del usuario
- Listado de Proyectos **categorizados** según: nombre del proyecto, dificultad, lenguajes utilizados, status actual, creador del proyecto y más información
- Información detallada de los proyectos: nombre del proyecto, creador del proyecto, tipo, status actual, dificultad, lenguajes utilizados, Link al repositorio, participantes, descripción
- Opción de solicitar unirse a un proyecto
- Página Error404

---

<div align="center">

### **👀 Échale un vistazo: 👀**

**Opción de Registro**
<img src="https://i.imgur.com/kjL0df4.gif" alt="Opción de Registro" width="800"/>

**Opción de inicio de sesión**
<img src="https://i.imgur.com/1Ubv8pD.gif" alt="Opción de Inicio de sesión" width="800"/>

**Listado de proyectos**
<img src="https://i.imgur.com/88bf5pV.gif" alt="Listado de proyectos" width="800"/>

**Descripción de un proyecto y solicitud para unirse**
<img src="https://i.imgur.com/oOomqCt.gif" alt="Descripción de los proyectos y solicitud para unirse" width="800"/>

**Error404**
<img src="https://i.imgur.com/aC7HoYX.gif" alt="Página de Error404" width="800"/>

</div>

## Para empezar

### Prerrequisitos

---

#### 🔙🔚 BACKEND

**_DESCARGAR PYTHON:_**

##### • W̲i̲n̲d̲o̲w̲s̲

Instalar ejecutable [Python 3.12](https://www.python.org/downloads/)

> [!TIP]No olvides seleccionar ✅ `Add python.exe to PATH`

##### • M̲A̲C̲O̲S̲/̲L̲i̲n̲u̲x̲/̲W̲S̲L̲

- Instalar [pyenv](https://github.com/pyenv/pyenv) siguiendo los pasos del README en función de tu sistema operativo

- Una vez instalado, ejecutar los siguientes comandos:

```sh
$ pyenv install 3.12.3
$ pyenv global 3.12.3
```

#### 💻🔚 FRONTEND

- NVM (recommended for ensuring Node version):

```sh
 nvm use
 # o
 nvm use <version>
```

> [!TIP] NVM:
> [Official Documentation](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

---

### Instalación:

1. Clonar el repositorio desde tu terminal

   ```sh
   git clone https://github.com/JavierBrizuela/exceso_de_iteraciones.git
   ```

2. Crear y activar el entorno virtual

- 💻🔚 FRONTEND:

  1. Instalar NPM packages

     ```sh
     npm install
     ```

  2. Correr el proyecto presionando F5 en VS Code

- 🔙🔚 BACKEND:

  1. Instalar pipenv

     ```sh
     pip install pipenv
     ```

  2. Ir a la carpeta **backend**

     ```sh
     cd backend
     ```

  3. Crear el entorno virtual
     ```sh
     pipenv install
     ```

3.  Crear la base de datos y correr el servidor (_Backend_)

        ```sh
        $ pipenv run makemigrations
        $ pipenv run migrate
        $ pipenv run server
        ```

## Roles y respoonsabilidades de los miembros del grupo

### 🔙🔚 BACKEND:

#### 👨‍💻 **Javier Brizuela**

<details>
<summary>Responsabilidades y Contribuciones</summary>

- **_Responsabilidades_**: Desarrollo completo del backend, asegurando la funcionalidad y cumplimiento del MVP
- **_Contribuciones_**:
  - Desarrollo integral de todas las funcionalidades del backend, superando los requisitos del MVP
  </details>

### 💻🔚 FRONTEND:

#### 👩‍💻 **Elena Expósito**

<details>
<summary>Responsabilidades y Contribuciones</summary>

- **_Responsabilidades_**: Desarrollo y diseño de interfaces de usuario, implementación de la lógica del frontend, y garantizar la responsividad de los componentes
- **_Contribuciones_**:
  - Desarrollo completo de la funcionalidad y lógica de las páginas de Sign Up, detalles de un proyecto, y listado de proyectos
  - Revisión y mejora del diseño y lógica en la página de Login
  - Implementación de la lógica y mejoras de estilo en el Header y Footer
  - Desarrollo de la lógica y mejoras de estilo en la página de Error404
  - Revisión y mejora de los estilos en la página para crear un proyecto
  </details>

#### 👩‍💻 **Laura España**

<details>
<summary>Responsabilidades y Contribuciones</summary>

- **_Responsabilidades_**: Colaboración en el desarrollo de interfaces de usuario y apoyo en la implementación de la lógica del frontend
- **_Contribuciones_**:
  - Creación de la estructura y diseño de la página de Login
  - Creación y colaboración en la implementación de la lógica del código en la página de Login
  </details>

#### 👩‍💻 **Marina Matas**

<details>
<summary>Responsabilidades y Contribuciones</summary>

- **_Responsabilidades_**: Desarrollo inicial de la estructura del código y diseño, apoyo en la implementación de estilos y colaboración en la lógica
- **_Contribuciones_**:
  - Creación de la estructura básica y diseño del Header, Footer y página de Error404
  - Inicio de la estructura básica y estilos en la página para crear un proyecto, así como implementación de parte de la lógica
  </details>

## About us

### 💻🔚 FRONTEND:

#### 👩‍💻 **Elena Expósito Lara**

<details>
<summary>Más información:</summary>
  
- GitHub: [ElenaExposito](https://github.com/ElenaExposito)
- Linkedin: [Elena Expósito Lara](https://www.linkedin.com/in/elena-exp%C3%B3sito-lara/)
  
</details>

#### 👩‍💻 **Marina Matas Mata**

<details>
<summary>Más información:</summary>
  
- GitHub: [Marinamaatas](https://github.com/Marinamaatas)
- Linkedin: [Marina Matas Mata](https://www.linkedin.com/in/marina-matas-mata-developer/)

</details>

#### 👩‍💻 **Laura Español**

<details>
<summary>Más información:</summary>
  
- GitHub: [lauriiief](https://github.com/lauriiief)
- Linkedin: [Laura Español](https://www.linkedin.com/in/laura-espa%C3%B1ol/)
  
</details>

---

### 🔙🔚 BACKEND:

#### 👨‍💻 **Javier Brizuela**

<details>
<summary>Más información:</summary>
  
- GitHub: [JavierBrizuela](https://github.com/JavierBrizuela)
- Linkedin: [JavierBrizuela]()
  
</details>
  
</details>
