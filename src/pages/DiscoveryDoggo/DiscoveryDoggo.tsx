import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonGrid, IonRow, IonCol, IonCard, IonLoading, IonText, IonButton, IonCardContent,
              IonCardHeader, IonCardTitle, IonButtons, IonMenuButton} from '@ionic/react';

import { DiscoveryDog } from "../../hooks/theDogApi"

import './DiscoveryDoggo.css';


const DiscoveryDoggo: React.FC = () => {
  const { newDoggo, requestDoggo, newError  } = DiscoveryDog()

  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(false)
  }, [newDoggo, newError]);

  return (
    <IonPage className="fourth-tab-page">

      <IonHeader className="fourth-tab-header">
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton menu="main-menu"></IonMenuButton>
          </IonButtons>
          <IonTitle>Discovery Doggo</IonTitle>
          <IonText>This feature is using the "The Dog API" API</IonText>
        </IonToolbar>
      </IonHeader>

      <IonContent className="fourth-tab-content " fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <img  className="doggo-img" src={newDoggo.url} alt={ "Código do registro: " + newDoggo.id } />

                <IonCardHeader>
                  <IonCardTitle> { "Breed name: " + newDoggo.name } </IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                  <IonText> { "Temperament: " + newDoggo.temperament }  </IonText>
                </IonCardContent>

                <IonItem>
                      <IonButton
                        color="warning"
                        fill="solid"
                        size="default"
                        slot="end"
                        onClick={() => {setShowLoading(true);  requestDoggo() }}
                      >New Doggo</IonButton>
                    </IonItem>

              </IonCard>

              <IonLoading
                spinner="lines-small"
                isOpen={showLoading}
                onDidDismiss={() => setShowLoading(false)}
                message={'🐶  Loading your happiness pill '}
              />

            </IonCol>
          </IonRow>
        </IonGrid>
        </IonContent>
    </IonPage>
  );
};

export default DiscoveryDoggo;
