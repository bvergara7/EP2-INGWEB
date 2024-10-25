import React from 'react';
import { useHistory } from 'react-router-dom';
import './HistorialPaciente.css';

const HistorialPaciente: React.FC = () => {
  const history = useHistory();

  const handleBackClick = () => {
    history.push('/InicioSesion');
  };

  return (
    <div className="info-container">
      <div className="info-header">
        <div className="info-back-button" onClick={handleBackClick}>←</div>
        <h1 className="info-title">Historial Médico</h1>
        <div className="info-menu-icon">☰</div>
      </div>

      <div className="patient-info">
        <p><strong>Juan Pérez, 35 años</strong></p>
        <p>DNI: 12345678</p>
        <p>Última visita: 15/03/2024</p>
      </div>

      <div className="records">
        <p>Vacuna COVID-19</p>
        <p>10/01/2024 - Dr. García</p>
      </div>

      <div className="records">
        <p>Chequeo anual</p>
        <p>05/12/2023 - Dra. Rodríguez</p>
      </div>

      <div className="records">
        <p>Análisis de sangre</p>
        <p>20/11/2023 - Dr Domínguez</p>
      </div>
    </div>
  );
};

export default HistorialPaciente;
