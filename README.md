##  EP2-INGWEB
##  Repositorio de Entrega Parcial 2 de Ingenieria Web PUCV (INF 3245)
## Integrantes: Benjamín Vergara, Luka Jacob


## Propuesta (9): Una aplicación web médico para consultorías, hospitales privadores, que ayude a la atención de pacientes, y la carga de trabajo. 
## Nombre Proyecto: MediCV

# Entregables
- - EP 2.1 :  Implementación de 7 mockups UI en el framework Ionic. Adi-
cional los dos formularios de inicio de sesión y registro.
- - EP 2.2: Hacer lectura de datos desde un archivo JSON (puede ser local, o alguna fuente externa de datos), y mostrarlos en alguna de las pantallas.
- - EP2.3 Definir ell modelo de la base de datos. Algunos motores de bases de datos que se pueden utilizar son: MySQL, PostgreSQL, SQLite, MongoDB, Firebase, entre otros. Se deben incluir al menos 3 tablas o documentos. __Justificar la selección del tipo de base de datos__.
- - EP2.4 Hacer uso de al menos dos (2) __patrones de diseño__, ya sea web o móvil, en la implementación de las pantallas, teniendo como foco principal el uso desde un dispositivo móvil. 

# Caso de Estudio
Mi proyecto se centra en una tienda en línea llamada "ShopNow", el cual busca mejorar la gestión de inventarios, seguimiento de pedidos y relaciones con los clientes. 

## EP2.1: Implementación de 7 mockups UI en el framework Ionic. Adicional los dos formularios de inicio de sesión y registro.

Las interfaces (UI) / funcionalidades que se han implementado de acuerdo al diseño de las __UI Figma__ presentadas con el framework Ionic son: 

1-  Actualizar Informacion Personal

2-  Buscar Medicos

3-  Gestion de Citas

4-  Gestion de Perfil

5-  Historial del Paciente

6-  Horario Atencion Medicos

7-  Recetas Electronicas

Adicionalmente:
+ Formulario Inicio de Sesion: El formulario de inicio de sesión permite a los usuarios (pacientes y médicos) ingresar sus credenciales para acceder a sus cuentas. 
Incluye campos para el correo electrónico y la contraseña, y valida que los datos ingresados sean correctos antes de permitir el acceso a la aplicación.

+ Formulario Registrarse: El formulario de registro permite a nuevos usuarios crear una cuenta en la aplicación. Requiere información básica como nombre completo, 
correo electrónico, contraseña, region, comuna, también incluye una validación para asegurar que la información ingresada sea correcta y que el usuario 
acepte los términos y condiciones.

Se debe inicializar el proyecto de Ionic con comando dentro de la terminal (cmd): ionic serve

Para navegar dentro de las distintas funcionalidades se tiene que escribir: http://localhost:8100/funcionalidadRespectiva

Por ejemplo:

Deseo ir al formulario de Inicio de Sesion, http://localhost:8100/InicioSesion

En el TSX de App (App.tsx), aparece todas las rutas respectivas a las funcionalidades de nuestro Proyecto.

## EP2.2: Hacer lectura de datos desde un archivo JSON (puede ser local, o alguna fuente externa de datos), y mostrarlos en alguna de las pantallas.

Instrucciones para Lectura de Archivo JSON:

El archivo medicos.json ubicado en la carpeta public de nuestro Proyecto, lo utilizaremos para la funcionalidad de Busqueda de Medicos, junto con dicho archivo, se deberia visualizar 
los datos contenidos en el Archivo JSON, dentro de nuestra pagina (BuscarMedicos.tsx), utilizamos funcion fetch para su correcta lectura, además de tomar en cuenta los parametros respectivos dentro del codigo del tsx para que tome en cuenta los datos que contiene dicho JSON.



Para verificar lectura archivo JSON se debe utilizar la Aplicación Insomnia, para la lectura de dicho archivo se debe crear una nueva solicitud HTTP con método GET, se debe ingresar URL: http://localhost:8100/medicos.json y al enviar la solicitud, 
se deberia visualizar nuestro archivo JSON con dicho contenido dentro del archivo, es decir, Nombre Medico, Especialidad, Horario y Calificacion.

## EP2.3: Definir el modelo de la base de datos. Algunos motores de bases de datos que se pueden utilizar son: MySQL, PostgreSQL, SQLite, MongoDB, Firebase, entre otros. Se deben incluir al menos 3 tablas o documentos. Justificar la selección del tipo de base de datos.

La base de datos que he seleccionado es relacional, el motor de la base de datos ha usar es MySQL 

Posible Nombre Base de Dato: medicv


Tablas BD:

La base de datos consta de tres tablas: Usuario, Medico y Cita. 

- La tabla usuario almacena la información del usuario, incluyendo un ID único, correo electrónico, contraseña y estado de actividad. 

- La tabla medico contiene los datos de los médicos, como su ID, nombre, especialidad, calificación y horario de atención. 

- Finalmente, la tabla cita registra las citas programadas, vinculando a los usuarios y médicos a través de sus ID, y almacena la fecha, hora y estado de la cita.


Nuestra eleccion de motor de Base de datos es MYSQL con una base de datos relacional, debido a su capacidad de manejar datos estructurados, facilidad a la hora de crear tablas,
además que dicho motor garantiza la integridad en el uso de claves y demas acciones realizadas. Permite realizar consultas complejas, asegurando un manejo eficaz 
en las relaciones entrelas tablas involucradas, lo cual consideramos, algo de suma importancia para nuestra propuesta de App de Gestion/Atencion Medica, 
la robustez, escabalabilidad y facilidad a la hora de utilizar el motor de MYSQL, por lo cual 
lo consideramos como gran opción para el desarrollo de nuestro trabajo, por lo cual, lo elegimos para nuestro modelo.


Además incluimos un sql de nuestra base de datos (en carpeta Otros dentro del proyecto) que nos va a servir de base para luego trabajarla en la Entrega Final en terminos de Backend.

[Modelo MER de la BD](https://github.com/bvergara7/EP2-INGWEB/blob/main/EP2%20MediCV/EP2%20MediCV/MediCV/Otros/MER%20MEDICV%20BD.png)



## EP2.4: Hacer uso de al menos dos (2) patrones de diseño, ya sea web o móvil, en la implementación de las pantallas, teniendo como foco principal el uso desde un dispositivo móvil.

En nuestro proyecto, hemos implementado dos patrones de diseño móvil que mejoran la experiencia de usuario y la navegación en nuestra aplicación, 
especialmente en dispositivos móviles.

- Tab Bar/Pestañas: Uno de los patrones clave utilizados es el Tab Bar, presente en la funcionalidad de Registro de Usuario (Registro.tsx). 
El Tab Bar permite alternar entre "Iniciar Sesión" y "Registro", lo que proporciona una navegación clara y directa entre estas dos funcionalidades principales. 
Este patrón de diseño es muy útil para filtrar el contenido, además de mejorar la experiencia del usuario al proporcionar una interfaz limpia y organizada. 
Facilitaria el acceso rápido a estas dos opciones, lo cual es especialmente importante en dispositivos móviles, donde el espacio es limitado y se busca una navegación intuitiva 
y eficaz.


- Navegacion Historica: El segundo patrón que hemos implementado es el de Navegación Histórica, que permite al usuario retroceder a pantallas anteriores 
manteniendo el flujo de navegación coherente. Este patrón está presente en varias partes de la aplicación, 
como en la funcionalidad Buscar Médicos (BuscarMedicos.tsx).
De la misma manera, en el Formulario de Registro (Registro.tsx), cuando el usuario hace clic para regresar, 
es redirigido a la pantalla de inicio de sesión, proporcionando una experiencia de navegación intuitiva. 
Este patrón asegura que los usuarios puedan desplazarse entre las diferentes pantallas de forma fluida y sin interrupciones, manteniendo el contexto de su acción anterior.




Estos dos patrones han sido seleccionados estratégicamente para optimizar el uso desde un dispositivo móvil, 
donde la simplicidad y la eficiencia en la navegación son esenciales para una experiencia de usuario positiva.





