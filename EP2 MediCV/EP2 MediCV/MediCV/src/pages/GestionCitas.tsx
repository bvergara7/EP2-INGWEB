import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; 
import './GestionCitas.css';

const GestionCitas: React.FC = () => {
  const history = useHistory(); 
  const [citas, setCitas] = useState<any[]>([]);

  useEffect(() => {
    const dataCitas = [
      {
        id: 1,
        fecha: '10 Octubre 2024',
        hora: '09:00',
        medico: 'Dr. Juan Pérez',
        especialidad: 'Cardiología',
        estado: 'pendiente'
      },
      {
        id: 2,
        fecha: '15 Octubre 2024',
        hora: '14:30',
        medico: 'Dra. María Rodríguez',
        especialidad: 'Pediatría',
        estado: 'confirmada'
      },
      {
        id: 3,
        fecha: '20 Octubre 2024',
        hora: '11:00',
        medico: 'Dr. Carlos García',
        especialidad: 'Traumatología',
        estado: 'cancelada'
      }
    ];
    setCitas(dataCitas);
  }, []);

  const cancelarCita = (id: number) => {
    setCitas(citas.map(cita => 
      cita.id === id ? { ...cita, estado: 'cancelada' } : cita
    ));
  };

  const getEstadoClass = (estado: string) => {
    switch(estado) {
      case 'confirmada':
        return 'estado-confirmada';
      case 'cancelada':
        return 'estado-cancelada';
      default:
        return 'estado-pendiente';
    }
  };

  const handleBackClick = () => {
    history.push('/InicioSesion'); 
  };

  return (
    <div className="citas-container">
      <div className="citas-header">
        <div className="citas-back-button" onClick={handleBackClick}>←</div>
        <h1 className="citas-title">Gestión de Citas</h1>
        <div className="citas-menu-icon">☰</div>
      </div>

      <div className="citas-list">
        {citas.map(cita => (
          <div key={cita.id} className="cita-card">
            <div className="cita-header">
              <div className="cita-fecha">
                <h3>{cita.fecha}</h3>
                <p>{cita.hora}</p>
              </div>
              <span className={`cita-estado ${getEstadoClass(cita.estado)}`}>
                {cita.estado}
              </span>
            </div>

            <div className="cita-doctor">
              <h4>{cita.medico}</h4>
              <p>{cita.especialidad}</p>
            </div>

            {cita.estado !== 'cancelada' && (
              <button 
                className="cancel-button"
                onClick={() => cancelarCita(cita.id)}
              >
                Cancelar Cita
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GestionCitas;
