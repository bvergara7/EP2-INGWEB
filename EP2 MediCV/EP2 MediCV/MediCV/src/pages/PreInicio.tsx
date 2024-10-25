import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './PreInicio.css';

const PreInicio: React.FC = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push('/InicioSesion');
  };

  return (
    <IonPage className="app-landing-page">
      <IonHeader>
        <IonToolbar className="app-toolbar">
          <IonTitle className="app-title">MediCV</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="app-content ion-text-center ion-padding">
        <div className="app-content-wrapper ion-margin-top">
          <h1 className="app-heading">Bienvenido a MediCV</h1>
          <p className="app-description">¡Accede a tus funcionalidades médicas!</p>
          <IonButton className="app-login-button" expand="block" size="large" onClick={handleLogin}>
            Iniciar Sesión
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PreInicio;



