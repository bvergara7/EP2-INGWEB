import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './BuscarMedicos.css';

interface Medico {
  nombre: string;
  especialidad: string;
  calificacion: number;
}

const BuscarMedicos: React.FC = () => {
  const history = useHistory();
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/medicos.json')
      .then(res => res.json())
      .then(data => setMedicos(data))
      .catch(err => console.error('Error al cargar el JSON:', err));
  }, []);

  const handleBackClick = () => {
    history.push('/InicioSesion');
  };

  return (
    <div className="info-container">
      <div className="info-header">
        <div className="info-back-button" onClick={handleBackClick}>←</div>
        <h1 className="info-title">Buscar Médicos</h1>
        <div className="info-menu-icon">☰</div>
      </div>

      <div className="info-form">
        <label htmlFor="search" className="info-label">Buscar Especialidad:</label>
        <input 
          type="text" 
          id="search" 
          className="info-input" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="Buscar Especialidad"
        />

        <div className="doctor-list">
          {medicos.length > 0 ? (
            medicos.map((medico, index) => (
              <div key={index} className="doctor-card">
                <div className="doctor-info">
                  <h3>{medico.nombre}</h3>
                  <p>{medico.especialidad}</p>
                </div>
                <div className="doctor-rating">
                  <span>★ {medico.calificacion || 'N/A'}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No se encontraron médicos</p>
          )}
        </div>

        <button type="button" className="info-save-button">Filtros Avanzados</button>
      </div>
    </div>
  );
};

export default BuscarMedicos;
