const { Schema, model } = require ('mongoose')

const personaSchema = new Schema ({
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
    }
    
}, {
    timestamps:true
})

module.exports = model('Persona', personaSchema)