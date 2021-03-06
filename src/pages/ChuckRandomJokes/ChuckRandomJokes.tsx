import React, { useEffect, useState } from 'react';
import { IonButtons, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonItem, IonLoading, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { sad } from 'ionicons/icons';

import { GetChuckJokes } from "../../hooks/chuckJokes"

import './ChuckRandomJokes.css';



const ChuckRandomJokes: React.FC = () => {

  const { newChuckJokes, requestChuckJokes, newError} = GetChuckJokes()
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(false)
}, [newChuckJokes, newError]);




  return (
    <IonPage class="third-tab-page">

    <IonHeader class="third-tab-header">
      <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton menu="main-menu"></IonMenuButton>
          </IonButtons>
        <IonTitle>Chuck Norris Jokes</IonTitle>
        <IonText>This feature is using the "Chuck Norris" API</IonText>
      </IonToolbar>
    </IonHeader>

    <IonContent class="third-tab-content" fullscreen>

      <IonGrid>
        <IonRow>
          <IonCol>
          <IonCard className="ion-card-speak" >
                <IonItem>
                  <IonIcon className="chuck-card-icon" size="large" slot="start" />
                  <IonCardTitle> Chuck 24:69</IonCardTitle>
                </IonItem>
                <IonCardContent> { newChuckJokes.value } </IonCardContent>
          </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonLoading
                spinner="lines-small"
                cssClass="chuck-prophecy"
                isOpen={showLoading}
                onDidDismiss={() => setShowLoading(false)}
                message={'👊🏼 Loading a new chuck prophecy'}
                duration={5000}
              />

      <IonFab   vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton color="warning" onClick={() => { setShowLoading(true); requestChuckJokes() }} >
          <IonIcon icon={sad}></IonIcon>
        </IonFabButton>
      </IonFab>

    </IonContent>

  </IonPage>
  );
};

export default ChuckRandomJokes;
