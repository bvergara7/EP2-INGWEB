import React from 'react';
import { useHistory } from 'react-router-dom';
import './GestionPerfil.css';

const GestionPerfil: React.FC = () => {
  const history = useHistory(); 

  const handleBackClick = () => {
    history.push('/InicioSesion'); 
  };

  return (
    <div className="info-container">
      <div className="info-header">
        <div className="info-back-button" onClick={handleBackClick}>←</div>
        <h1 className="info-title">Gestión de Perfil</h1>
        <div className="info-menu-icon">☰</div>
      </div>

      <div className="profile-section">
        <div className="profile-picture">
          JP {/* Iniciales para el nombre */}
        </div>
        <div className="profile-info">
          <div className="profile-name">Juan Pérez</div>
          <div className="profile-id">ID: 12231234</div>
        </div>
      </div>

      <div className="options">
        <button className="option-button">Editar Información Personal</button>
        <button className="option-button">Cambiar Contraseña</button>
        <button className="option-button">Preferencias de Notificaciones</button>
        <button className="option-button">Privacidad y Seguridad</button>
        <button className="option-button">Mis Datos</button>
      </div>

      <div className="actions">
        <button className="delete-button">Eliminar Cuenta</button>
        <button className="info-save-button">Guardar Cambios</button>
      </div>
    </div>
  );
};

export default GestionPerfil;
