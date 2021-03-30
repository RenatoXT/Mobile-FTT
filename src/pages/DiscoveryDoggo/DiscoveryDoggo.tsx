import { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel,
              IonGrid, IonRow, IonCol, IonCard, IonLoading, IonText, IonButton, IonCardContent,
              IonTextarea, IonCardHeader, IonCardTitle} from '@ionic/react';

import { YodaTranslator } from "../../hooks/yodaTranslator"

import './DiscoveryDoggo.css';


const DiscoveryDoggo: React.FC = () => {
  const { newTranslate, requestTranslate } = YodaTranslator()

  const [text, setText] = useState<string>("");
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(false)
  }, [newTranslate]);

  return (
    <IonPage class="fourth-tab-page">

      <IonHeader class="fourth-tab-header">
        <IonToolbar>
          <IonTitle>Discovery Doggo</IonTitle>
          <IonText>This feature are using the "The Dog API" API</IonText>
        </IonToolbar>
      </IonHeader>

      <IonContent class="fourth-tab-content " fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>

                {/* <IonCardHeader>
                  <IonCardTitle> Doggo</IonCardTitle>
                </IonCardHeader> */}

              </IonCard>

              <IonLoading
                spinner="lines-small"
                isOpen={showLoading}
                onDidDismiss={() => setShowLoading(false)}
                message={'Loading your happiness pill'}
              />

            </IonCol>
          </IonRow>
        </IonGrid>
        </IonContent>
    </IonPage>
  );
};

export default DiscoveryDoggo;
