import React, { useEffect, useState } from 'react';
import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardTitle, IonChip, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonLoading, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { closeCircle, refresh, sad, skullOutline } from 'ionicons/icons';

import { GetChuckJokes } from "../../hooks/chuckJokes"

import './ChuckRandomJokes.css';



const ChuckRandomJokes: React.FC = () => {

  const { newChuckJokes, requestChuckJokes } = GetChuckJokes()
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(false)
}, [newChuckJokes]);




  return (
    <IonPage class="third-tab-page">

    <IonHeader class="third-tab-header">
      <IonToolbar>
        <IonTitle>Chuck Norris Jokes</IonTitle>
        <IonText>This feature is using the "Chuck Norris" API</IonText>
      </IonToolbar>
    </IonHeader>

    <IonContent class="third-tab-content" fullscreen>

      <IonGrid>
        <IonRow>
          <IonCol>


          {/* <IonItem  className="card-pointer"></IonItem> */}

          <IonCard className="ion-card-speak" >
                <IonItem>
                  <IonIcon className="chuck-card-icon" size="large" slot="start" />

                  <IonCardTitle> Chuck 24:69</IonCardTitle>

                  {/* <IonButton color="danger" fill="outline" slot="end" onClick={() => { setShowLoading(true); requestChuckJokes() }}>Refresh</IonButton> */}
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
