const { Router } = require ('express')
const router = Router()
const { getPersonas, createPersona, deletePersona, updatePersona, getPersona } = require('../controllers/persona.controller')


router.route('/')
    .get(getPersonas)
    .post(createPersona)

router.route('/:id')    
    .get(getPersona)
    .put(updatePersona)
    .delete(deletePersona)

module.exports = router