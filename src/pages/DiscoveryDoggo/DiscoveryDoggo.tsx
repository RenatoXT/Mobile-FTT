import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel,
              IonGrid, IonRow, IonCol, IonCard, IonLoading, IonText, IonButton, IonCardContent,
              IonTextarea, IonCardHeader, IonCardTitle, IonCardSubtitle, IonThumbnail, IonImg} from '@ionic/react';

import { DiscoveryDog } from "../../hooks/theDogApi"

import './DiscoveryDoggo.css';


const DiscoveryDoggo: React.FC = () => {
  const { newDoggo, requestDoggo } = DiscoveryDog()

  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(false)
  }, [newDoggo]);

  return (
    <IonPage className="fourth-tab-page">

      <IonHeader className="fourth-tab-header">
        <IonToolbar>
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
                  <IonCardSubtitle> { "Temperament: " + newDoggo.temperament } </IonCardSubtitle>
                  <IonCardTitle> { "Name: " + newDoggo.name } </IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                  <IonText> { "Height: " + newDoggo.height} </IonText>
                  <br/>
                  <IonText> { "Width: " + newDoggo.width} </IonText>
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
