import React, { useEffect, useState } from 'react'

import { IonContent, IonPage, IonIcon, IonGrid, IonRow,
         IonCol, IonCard, IonCardTitle, IonHeader, IonToolbar,
         IonCardContent, IonItem, IonButton, IonLoading, IonTitle, IonText, IonButtons, IonMenuButton } from '@ionic/react';

import { GetInsult } from '../../hooks/getInsult';
// import { CheckMobile } from '../../hooks/checkMobile'

import './EvilInsultGenerator.css';

const EvilInsultGenerator: React.FC = () => {

  const { newInsult, requestInsult, newError  } = GetInsult();
  // const { newDevice , isDeviceMobile } = CheckMobile()
  const [showLoading, setShowLoading] = useState(false);


  useEffect(() => {
    setShowLoading(false)
}, [newInsult, newError ]);

  return (
    <IonPage class="first-tab-page">

      <IonHeader class="first-tab-header">
        <IonToolbar>
          <IonButtons slot="start">
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
                  <IonIcon className="sinner-icon" size="large" slot="start" />

                  <IonCardTitle>Heeeello Little Sinner </IonCardTitle>

                  <IonButton color="danger" fill="outline" slot="end" onClick={() => {setShowLoading(true); requestInsult() }}>Refresh</IonButton>
                </IonItem>

                <IonCardContent> { newInsult?.insult } </IonCardContent>

                  {
                    newError && <>
                      <br/>
                      <IonButton color="warning" expand="full" target="_blank" rel="noopener noreferrer" href="https://cors-anywhere.herokuapp.com/corsdemo">Request Cors-Anywhere Access</IonButton>
                    </>
                  }
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
