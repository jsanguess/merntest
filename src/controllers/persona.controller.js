const personaCtrl ={}
const Persona = require('../models/Persona')

personaCtrl.getPersonas = async (req, res) => {
    const personas = await Persona.find()
    res.json(personas)
}

personaCtrl.createPersona = async (req, res) => {
    const { nombre, dni, celular, correo } = req.body
    const newPersona = new Persona({
        nombre,
        dni,
        celular,
        correo
    })
    await newPersona.save()
    res.json({message: 'Persona Creada'})
}

personaCtrl.getPersona = async (req, res) => {
    const persona =await Persona.findById(req.params.id)
    res.json({persona})
}

personaCtrl.deletePersona = async (req, res) => {
    await Persona.findByIdAndDelete(req.params.id)
    res.json({message: 'Persona borrada'})
}

personaCtrl.updatePersona = async (req, res) => {
    const {nombre} = req.body
    await Persona.findOneAndUpdate(req.params.id, {nombre})
    res.json({title: 'Persona actualizada'})
}

module.exports = personaCtrl
