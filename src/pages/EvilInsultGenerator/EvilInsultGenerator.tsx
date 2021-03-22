import { useEffect, useState } from 'react'

import { skullOutline} from 'ionicons/icons';
import { IonContent, IonPage, IonIcon, IonGrid, IonRow,
         IonCol, IonCard, IonCardTitle,
         IonCardContent, IonItem, IonButton, IonLoading  } from '@ionic/react';

import { GetInsult } from '../../hooks/getInsult';

import './EvilInsultGenerator.css';

const EvilInsultGenerator: React.FC = () => {

  const { newInsult, requestInsult } = GetInsult();
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(false)
}, [newInsult]);

  return (
    <IonPage>

      <IonContent fullscreen>

        <IonGrid>
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
