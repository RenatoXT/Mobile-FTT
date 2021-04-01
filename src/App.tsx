import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle,
  IonRouterOutlet, IonTab, IonTabBar, IonTabButton, IonTabs, StackContext,} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


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
import './theme/navigation.css'

import { ActivePage } from "./hooks/activePage"

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>

        <IonMenu menuId="main-menu"  contentId="main" >
          <IonContent>

            <div className="menu-header-bg"></div>
            <div className="header-content">
              <IonIcon className="ftt-logo"/>
              <IonLabel>
                <h2>FTT</h2>
                <p>Computer Engineering</p>
              </IonLabel>
            </div>

            <IonList className="menu-items" lines="none">
              <IonMenuToggle  >
                <IonItem routerLink="/sinner">
                  <IonIcon className="devil-icon  side-icon" />
                  <IonLabel>Sinner</IonLabel>
                </IonItem>
              </IonMenuToggle>

              <IonMenuToggle>
                <IonItem  routerLink="/yoda">
                  <IonIcon className="yoda-icon  side-icon" ></IonIcon>
                  <IonLabel>Yoda</IonLabel>
                </IonItem>
              </IonMenuToggle>

              <IonMenuToggle>
                <IonItem routerLink="/chuck">
                  <IonIcon className="chuck-icon  side-icon" />
                  <IonLabel>Chuck Norris</IonLabel>
                </IonItem>
              </IonMenuToggle>

              <IonMenuToggle>
                <IonItem routerLink="/doggo">
                  <IonIcon className="doggo-icon  side-icon" />
                  <IonLabel>Doggos</IonLabel>
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </IonContent>
        </IonMenu>


      <IonTabs>

        <IonRouterOutlet id="main">
          <Route path="/sinner" component={EvilInsultGenerator} exact />
          <Route path="/yoda" component={YodaTextTranslator} exact />
          <Route path="/chuck" component={ChuckRandomJokes} exact />
          <Route path="/doggo" component={DiscoveryDoggo} exact />
          <Route exact path="/" > <Redirect to="/sinner" /> </Route>
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
