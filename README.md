# nodelogin

Esta api funciona como un login sencillo el cual nos permite registrarnos y tambien loguearnos con nuestra cuenta creada.
Para poder crearla, la cuenta debe contener ciertos requerimientos, como la longitud del nombre de usuario, que
coincidan las contraseñas etc, por lo que este y otros pasos intermedio antes de realiaza el propio registro, necesitan un
middleware para manejar estas validaciones previas.

| Endpoint | Explicacion | 
| ------------ | ------------ |
| api/Sing-up     | En este end point se reciben los parametros para registrar a un nuevo usuario      |
| api/login      | Aqui se validan las credenciales y se otorga un token de JWT     |
| api/secret-route | Si el token dado al usuario es valido, se deja entrar al usuario a este endpoint exclusivo |

JWT otorga tokens cifrados para validar a los usuarios que se registran.

# UUID
Esta es una libreria cuyas siglas significan: Universally Unique Identifier, y exactamente para eso se utiliza, para generar identificadores universales.
Genera un valor de 32 caracteres hexadecimales y por la gran catidad de combinaciones que se pueden formar, no es necesario tener un proceso
para validar si el numero dado ya se ha repetido antes. La cantidad de combinaciones exactas es de aproximadamente 3.4 x 10^38.

### Buena idea porque...
Es buena idea usar UUID porque dentro de una aplicacion que utiliza mas servicios, es dificl mantener la integridad de los datos y no crear confusiones
entre usuarios. Es extremadamente importante no confundir a un usuario con otro. Yo lo veo como una marca de nacimiento inconfundible con el cual el usuario es unico dentro
del sistema. Tambien para identificar procesos entre millones es buena opcion usarlos.

# Salt Rounds de la librería bcryptjs.
A lo que investigue, se agregan caracteres random a la contraseña y se cifra ese nuevo string. Asi que esa "sal" es el extra que se le concatena.
Salt Rounds es la cantidad de veces que sea realiza estre proceso para hacer mas segura la contraseña.
