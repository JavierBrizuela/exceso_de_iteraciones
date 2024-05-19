### Descargar Python

Ir a [python.org/downloads](https://www.python.org/downloads/)

### Instalar

No olvides seleccionar ✅ `Add python.exe to PATH`

### Clonar repositorio

1. Clonar el repositorio desde tu terminal
   `git clone https://github.com/JavierBrizuela/exceso_de_iteraciones.git`
2. Despues de clonar el repositorio, navegar a la carpeta del proyecto:
   `cd exceso_de_iteraciones`

### Crear y activar el entorno virtual

1. Instalar pipenv
   `pip install pipenv`
2. Ir a la carpeta **backend**
   `cd backend`
3. Crear el entorno virtual
   `pipenv install`

### Crear la base de datos y correr el servidor

1. `pipenv run makemigrations`

2. `pipenv run migrate`

3. `pipenv run server`
