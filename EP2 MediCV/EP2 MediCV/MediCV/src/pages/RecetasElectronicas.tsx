import React from 'react';
import { IonPage, IonContent } from '@ionic/react';



const RecetasElectronicas: React.FC = () => {
  const recetas = [
    { id: 1, medicamento: 'Ibuprofeno', dosis: '200mg', fecha: '2024-09-15' },
    { id: 2, medicamento: 'Amoxicilina', dosis: '500mg', fecha: '2024-08-20' }
  ];

  return (
    <IonPage>
      <IonContent className="container">
      <div className="container">
            <div className="header">
                <div className="back-button" id="backButton">←</div>
                <div className="menu-icon" id="menuIcon">☰</div>
            </div>
    
            <div className="title">Recetas Electrónicas</div>
    
    
            <div className="records">
                <p><strong>Paracetamol 500mg</strong></p>
                <p>1 comprimido cada 8 horas</p>
                <p>Expira: <span className="expire">15/09/2024</span></p>
            </div>
    
            <div className="records">
                <p><strong>Ibuprofeno 400mg</strong></p>
                <p>1 comprimido cada 12 horas</p>
                <p>Expira: <span className="expire">30/08/2024</span></p>
            </div>
    
            <div className="records">
                <p><strong>Amoxicilina 500mg</strong></p>
                <p>1 cápsula cada 8 horas</p>
                <p>Expirada: <span className="expire">01/07/2024</span></p>
            </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RecetasElectronicas;
