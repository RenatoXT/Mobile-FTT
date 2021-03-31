import React, { useEffect, useState } from 'react'

import { skullOutline} from 'ionicons/icons';
import { IonContent, IonPage, IonIcon, IonGrid, IonRow,
         IonCol, IonCard, IonCardTitle, IonHeader, IonToolbar,
         IonCardContent, IonItem, IonButton, IonLoading, IonTitle, IonText, IonButtons, IonMenuButton } from '@ionic/react';

import { GetInsult } from '../../hooks/getInsult';
import { CheckMobile } from '../../hooks/checkMobile'

import './EvilInsultGenerator.css';

const EvilInsultGenerator: React.FC = () => {

  const { newInsult, requestInsult } = GetInsult();
  const { newDevice , isDeviceMobile } = CheckMobile()
  const [showLoading, setShowLoading] = useState(false);


  useEffect(() => {
    setShowLoading(false)
}, [newInsult]);

  return (
    <IonPage class="first-tab-page">

      <IonHeader class="first-tab-header">
        <IonToolbar>
          <IonButtons>
            <IonMenuButton menu="main-menu"></IonMenuButton>
          </IonButtons>

          <IonTitle>Hell Pills</IonTitle>
          <IonText>This feature is using the Evil Insult Generator API</IonText>
        </IonToolbar>
      </IonHeader>

      <IonContent class="first-tab-content" fullscreen>

        <IonGrid >
          <IonRow>
            <IonCol>
              <IonCard>
                <IonItem>
                  <IonIcon icon={skullOutline} size="large" slot="start" />

                  <IonCardTitle>Heeeello Little Sinner </IonCardTitle>

                  <IonButton color="danger" fill="outline" slot="end" onClick={() => {setShowLoading(true); requestInsult() }}>Refresh</IonButton>
                </IonItem>

                <IonCardContent> { newInsult?.insult } </IonCardContent>

              </IonCard>

              <IonLoading
                spinner="lines-small"
                isOpen={showLoading}
                onDidDismiss={() => setShowLoading(false)}
                message={'🔥😈  Choosing our best insult'}
              />

            </IonCol>

          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default EvilInsultGenerator;
