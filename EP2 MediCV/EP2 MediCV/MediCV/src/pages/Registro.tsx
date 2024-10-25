import React, { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton, IonText, IonIcon, useIonRouter } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import './Registro.css';

const Registro: React.FC = () => {
  const router = useIonRouter();
  const [nombre, setNombre] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [comuna, setComuna] = useState<string>(''); 
  const [region, setRegion] = useState<string>(''); 
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [errors, setErrors] = useState<any>({});

  const regionesComunas: Record<string, string[]> = {
    'Región Metropolitana': ['Santiago', 'Puente Alto', 'Maipú', 'Las Condes', 'Buin'],
    'Valparaíso': ['Valparaíso', 'Viña del Mar', 'Quilpué', 'Villa Alemana'],
    'Biobío': ['Concepción', 'Talcahuano', 'Hualpen', 'Chiguayante']
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegistro = () => {
    const validationErrors: any = {};

    if (!nombre.trim()) validationErrors.nombre = 'El nombre es requerido';
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
    if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Las contraseñas no coinciden';
    }
    if (!comuna.trim()) validationErrors.comuna = 'La comuna es requerida';
    if (!region.trim()) validationErrors.region = 'La región es requerida';
    if (!termsAccepted) {
      validationErrors.termsAccepted = 'Debe aceptar los términos y condiciones';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Datos de Registro:', { nombre, email, password, comuna, region });
      router.push('/Menu'); 
    }
  };

  const handleBack = () => {
    window.location.href = '/InicioSesion';
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="container">
          <div className="header-container">
            <IonButton 
              fill="clear" 
              className="back-button"
              onClick={handleBack}
            >
              <IonIcon icon={arrowBack} />
            </IonButton>
            <h1>MediCV</h1>
          </div>
          
          <div className="tabs">
            <button 
              className="inactive"
              onClick={handleBack}
            >
              Iniciar Sesión
            </button>
            <button className="active">Registro</button>
          </div>

          <form>
            <div className="input-group">
              <IonInput
                className="custom-input"
                placeholder="Nombre Completo"
                value={nombre}
                onIonChange={(e) => setNombre(e.detail.value!)}
              />
              {errors.nombre && <IonText color="danger"><p className="error-text">{errors.nombre}</p></IonText>}
            </div>

            <div className="input-group">
              <IonInput
                className="custom-input"
                type="email"
                placeholder="Correo Electrónico"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
              />
              {errors.email && <IonText color="danger"><p className="error-text">{errors.email}</p></IonText>}
            </div>

            <div className="input-group">
              <IonInput
                className="custom-input"
                type="password"
                placeholder="Contraseña"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
              />
              {errors.password && <IonText color="danger"><p className="error-text">{errors.password}</p></IonText>}
            </div>

            <div className="input-group">
              <IonInput
                className="custom-input"
                type="password"
                placeholder="Confirmar Contraseña"
                value={confirmPassword}
                onIonChange={(e) => setConfirmPassword(e.detail.value!)}
              />
              {errors.confirmPassword && <IonText color="danger"><p className="error-text">{errors.confirmPassword}</p></IonText>}
            </div>

            <div className="input-group">
              <select 
                className="custom-select"
                value={region}
                onChange={(e) => {
                  setRegion(e.target.value);
                  setComuna(''); 
                }}
              >
                <option value="">Selecciona tu región</option>
                {Object.keys(regionesComunas).map((reg) => (
                  <option key={reg} value={reg}>{reg}</option>
                ))}
              </select>
              {errors.region && <IonText color="danger"><p className="error-text">{errors.region}</p></IonText>}
            </div>

            <div className="input-group">
              <select 
                className="custom-select"
                value={comuna}
                onChange={(e) => setComuna(e.target.value)}
                disabled={!region}
              >
                <option value="">Selecciona tu comuna</option>
                {region && regionesComunas[region].map((com: string) => (
                  <option key={com} value={com}>{com}</option>
                ))}
              </select>
              {errors.comuna && <IonText color="danger"><p className="error-text">{errors.comuna}</p></IonText>}
            </div>

            <div className="terms-group">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <span>Acepto los términos y condiciones</span>
            </div>
            {errors.termsAccepted && <IonText color="danger"><p className="error-text">{errors.termsAccepted}</p></IonText>}

            <IonButton
              className="register-button"
              expand="block"
              onClick={handleRegistro}
            >
              Registrarse
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Registro;
