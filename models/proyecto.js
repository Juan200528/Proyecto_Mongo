const mongoose = require('mongoose');

const ProyectoDeportes = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  fechaInicio: { type: Date, required: true },
  fechaFin: { type: Date, required: true },
  estado: { type: String, enum: ['pendiente', 'en progreso', 'finalizado'], default: 'pendiente' },
  
  // Nuevos campos relacionados con el deportes
  tipoDeporte: { type: String, required: true }, // Ejemplo: 'fútbol', 'baloncesto', etc.
  equipos: [
    {
      nombre: { type: String, required: true },
      numeroParticipantes: { type: Number, required: true },
      jugadores: [
        {
          nombre: { type: String, required: true },
          posicion: { type: String }, // Ejemplo: 'delantero', 'portero'
          edad: { type: Number }
        }
      ]
    }
  ],
  lugar: { type: String, required: true }, // Ejemplo: 'Estadio Nacional', 'Cancha de tenis', etc.
  modalidad: { type: String, enum: ['individual', 'por equipos'], default: 'por equipos' }, // Si es individual o por equipos
  categoria: { type: String, enum: ['juvenil', 'adulto', 'profesional'], default: 'adulto' } // Categoría del evento
});

module.exports = mongoose.model('Proyecto', ProyectoDeportes);
