import React from 'react';
import { useHistory } from 'react-router-dom';
import './HorariosMedicos.css';

const HorariosMedicos: React.FC = () => {
  const history = useHistory();

  const days = [7, 8, 9, 10, 11, 12];
  const timeSlots = ['09:00', '10:30', '11:45', '15:00', '16:30'];

  const handleBackClick = () => {
    history.push('/InicioSesion');
  };

  return (
    <div className="info-container">
      <div className="info-header">
        <div className="info-back-button" onClick={handleBackClick}>←</div>
        <h1 className="info-title">Horario de Atención</h1>
        <div className="info-menu-icon">☰</div>
      </div>

      <div className="doctor-info">
        <div className="doctor-image">
          <img src="/api/placeholder/80/80" alt="Dra. Ana Garcia" />
        </div>
        <h3>Dra. Ana Garcia</h3>
        <p>Cardióloga</p>
      </div>

      <select className="date-selector">
        <option>Agosto 2024</option>
      </select>

      <div className="day-selector">
        {days.map((day, index) => (
          <div key={index} className={`day ${day === 7 ? 'active' : ''}`}>
            {day}
          </div>
        ))}
      </div>

      <div className="timeslots">
        {timeSlots.map((time, index) => (
          <div key={index} className="timeslot">
            {time}
          </div>
        ))}
      </div>

      <div className="duration">
        Duración de la consulta: 30 minutos
      </div>
    </div>
  );
};

export default HorariosMedicos;
