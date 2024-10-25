import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import './ActualizarInfo.css';

const ActualizarInfo: React.FC = () => {
  const history = useHistory(); 
  const [name, setName] = useState("Juan Pérez");
  const [birthdate, setBirthdate] = useState("15/05/1989");
  const [rut, setRut] = useState("12345678");
  const [phone, setPhone] = useState("+569 12 345 678");
  const [email, setEmail] = useState("juan.perez@email.com");
  const [address, setAddress] = useState("Calle España 28001 Santiago, Chile");
  const handleBackClick = () => {
    history.push('/InicioSesion'); 
  };

  return (
    <div className="info-container">
      <div className="info-header">
        <div className="info-back-button" onClick={handleBackClick}>←</div>
        <h1 className="info-title">Actualizar Información</h1>
        <div className="info-menu-icon">☰</div>
      </div>

      

      <form className="info-form">
        <label htmlFor="name" className="info-label">Nombre completo:</label>
        <input 
          type="text" 
          id="name" 
          className="info-input" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />

        <label htmlFor="birthdate" className="info-label">Fecha de nacimiento:</label>
        <input 
          type="text" 
          id="birthdate" 
          className="info-input" 
          value={birthdate} 
          onChange={(e) => setBirthdate(e.target.value)} 
        />

        <label htmlFor="rut" className="info-label">RUT:</label>
        <input 
          type="text" 
          id="rut" 
          className="info-input" 
          value={rut} 
          onChange={(e) => setRut(e.target.value)} 
        />

        <label htmlFor="phone" className="info-label">Teléfono:</label>
        <input 
          type="text" 
          id="phone" 
          className="info-input" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
        />

        

        <label htmlFor="email" className="info-label">Correo electrónico:</label>
        <input 
          type="email" 
          id="email" 
          className="info-input" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />

        

        <label htmlFor="address" className="info-label">Dirección:</label>
        <textarea 
          id="address" 
          className="info-textarea" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
        />

        <button type="button" className="info-save-button">Guardar Cambios</button>
      </form>
    </div>
  );
}

export default ActualizarInfo;
