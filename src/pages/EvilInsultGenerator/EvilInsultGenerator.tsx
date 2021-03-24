import { useEffect, useState } from 'react'

import { skullOutline} from 'ionicons/icons';
import { IonContent, IonPage, IonIcon, IonGrid, IonRow,
         IonCol, IonCard, IonCardTitle, IonHeader, IonToolbar,
         IonCardContent, IonItem, IonButton, IonLoading, IonTitle, IonText } from '@ionic/react';

import { GetInsult } from '../../hooks/getInsult';

import './EvilInsultGenerator.css';

const EvilInsultGenerator: React.FC = () => {

  const { newInsult, requestInsult } = GetInsult();
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(false)
}, [newInsult]);

  return (
    <IonPage class="first-tab-page">

      <IonHeader class="first-tab-header">
        <IonToolbar>
          <IonTitle>Hell Pills</IonTitle>
          <IonText>Essa feature foi implementada usando a API "Evil Insult Generator"</IonText>
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
                message={'Selecionando o melhor insulto'}
              />

            </IonCol>

          </IonRow>
        </IonGrid>



        {/* <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => requestInsult()}>
            <IonIcon icon={sad}></IonIcon>
          </IonFabButton>
        </IonFab> */}

      </IonContent>

    </IonPage>
  );
};

export default EvilInsultGenerator;
