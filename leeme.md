merntest 
iniciar mongod
ejecutar yarn install para traer dependencias
ejecutar yarn run dev para levantar el servidor

Se creo el api rest http://localhost:4000/api/persona/

Con las rutas:
router.route('/') .get(getPersonas) .post(createPersona)

router.route('/:id')
.get(getPersona) .put(updatePersona) .delete(deletePersona)

Con el modelo:
    nombre:{
        type: String,
        required: true
    },
    dni:{
        type: Number,
        required:true
    },
    celular:{
        type: Number,
        required:true
    },
    correo: {
        type: String,
        require: true
