# Backend exceso de iteraciones

## Descargar Python

### Windows

Instalar ejecutable [Python 3.12](https://www.python.org/downloads/)

> No olvides seleccionar ✅ `Add python.exe to PATH`

### MACOS/Linux/WSL

Instalar [pyenv](https://github.com/pyenv/pyenv) siguiendo los pasos del README en función de tu sistema operativo

Una vez instalado, ejecutar los siguientes comandos:

```sh
$ pyenv install 3.12.3
$ pyenv global 3.12.3
```

## Clonar repositorio

1. Clonar el repositorio desde tu terminal
   `git clone https://github.com/JavierBrizuela/exceso_de_iteraciones.git`
2. Despues de clonar el repositorio, navegar a la carpeta del proyecto:
   `cd exceso_de_iteraciones`

## Crear y activar el entorno virtual

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
