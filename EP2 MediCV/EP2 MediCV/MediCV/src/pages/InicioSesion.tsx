import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonContent, IonButton, IonItem, IonInput, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router-dom';  
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<any>({});
  const history = useHistory(); 

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors: any = {};

    if (!email.trim()) {
      validationErrors.email = 'El correo electrónico es requerido';
    } else if (!validateEmail(email)) {
      validationErrors.email = 'El correo electrónico no es válido';
    }

    if (!password.trim()) {
      validationErrors.password = 'La contraseña es requerida';
    } else if (password.length < 6) {
      validationErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Iniciar sesión con:', email, password);
    }
  };

  const handleBack = () => {
    history.push('/Registro');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        </IonToolbar>
      </IonHeader>
      <IonContent className="login-container">
        <div className="form-container">
          <h1>MediCV</h1>

          <div className="tabs">
            <button className="active">Iniciar Sesión</button>
            <button className="inactive" onClick={handleBack}>Registro</button>
          </div>

          <form onSubmit={handleLogin}>
            <IonItem>
              <IonLabel position="floating">Correo electrónico</IonLabel>
              <IonInput type="email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} required />
            </IonItem>
            {errors.email && <p className="error-text">{errors.email}</p>}

            <IonItem>
              <IonLabel position="floating">Contraseña</IonLabel>
              <IonInput type="password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} required />
            </IonItem>
            {errors.password && <p className="error-text">{errors.password}</p>}

            <IonButton type="submit" expand="block" className="login-button">Iniciar Sesión</IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
