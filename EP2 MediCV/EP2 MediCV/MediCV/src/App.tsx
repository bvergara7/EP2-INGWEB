import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom'; 

import ActualizarInfo from './pages/ActualizarInfo';
import BuscarMedicos from './pages/BuscarMedicos';
import GestionCitas from './pages/GestionCitas';
import GestionPerfil from './pages/GestionPerfil';
import HistorialPaciente from './pages/HistorialPaciente';
import HorariosMedicos from './pages/HorariosMedicos';
import Login  from './pages/InicioSesion';
import RecetasElectronicas from './pages/RecetasElectronicas';
import Registro from './pages/Registro';



import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


import '@ionic/react/css/core.css';
import './theme/variables.css';
import PreInicio from './pages/PreInicio';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/" component={PreInicio} />
        <Route exact path="/InicioSesion" component={Login} />
        <Route exact path="/Registro" component={Registro} />
        <Route exact path="/GestionCitas" component={GestionCitas} />
        <Route exact path="/BuscarMedicos" component={BuscarMedicos} />
        <Route exact path="/GestionPerfil" component={GestionPerfil} />
        <Route exact path="/ActualizarInfo" component={ActualizarInfo} />
        <Route exact path="/HistorialPaciente" component={HistorialPaciente} />
        <Route exact path="/HorariosMedicos" component={HorariosMedicos} />
        <Route exact path="/RecetasElectronicas" component={RecetasElectronicas} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;


