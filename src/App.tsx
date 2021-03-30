import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, warning, textOutline } from 'ionicons/icons';


import EvilInsultGenerator from './pages/EvilInsultGenerator/EvilInsultGenerator';
import YodaTextTranslator from './pages/YodaTextTranslator/YodaTextTranslator';
import DiscoveryDoggo from './pages/DiscoveryDoggo/DiscoveryDoggo';
import ChuckRandomJokes from './pages/ChuckRandomJokes/ChuckRandomJokes';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/global.css'

// TO_DO
// On_Close() --> add hell

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>

      <IonTabs>

        <IonRouterOutlet>
          <Route exact path="/sinner">
            <EvilInsultGenerator />
          </Route>

          <Route exact path="/yoda">
            <YodaTextTranslator />
          </Route>

          <Route path="/chuck">
            <ChuckRandomJokes />
          </Route>

          <Route exact path="/doggo">
            <DiscoveryDoggo />
          </Route>

          <Route exact path="/">
            <Redirect to="/sinner" />
          </Route>
        </IonRouterOutlet>


        <IonTabBar slot="bottom">

          <IonTabButton tab="sinner" href="/sinner">
            <IonIcon className="devil-icon" />
            <IonLabel>Sinner</IonLabel>
          </IonTabButton>

          <IonTabButton  tab="yoda" href="/yoda">
            <IonIcon className="yoda-icon" ></IonIcon>
            <IonLabel>Yoda</IonLabel>
          </IonTabButton>

          <IonTabButton tab="ChuckRandomJokes" href="/chuck">
            <IonIcon className="chuck-icon" />
            <IonLabel>Chuck Norris</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Doggos" href="/doggo">
            <IonIcon className="doggo-icon" />
            <IonLabel>Doggos</IonLabel>
          </IonTabButton>

        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
