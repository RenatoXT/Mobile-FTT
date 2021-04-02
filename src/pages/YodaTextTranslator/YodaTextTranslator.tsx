
import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel,
              IonGrid, IonRow, IonCol, IonCard, IonLoading, IonText, IonButton, IonCardContent,
              IonTextarea, IonCardHeader, IonCardTitle, IonButtons, IonMenuButton} from '@ionic/react';

import { YodaTranslator } from "../../hooks/yodaTranslator"

import './YodaTextTranslator.css';





const YodaTextTranslator: React.FC = () => {
  const { newTranslate, requestTranslate, newError  } = YodaTranslator()

  const [text, setText] = useState<string>("");
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(false)
  }, [newTranslate, newError ]);

  return (
    <IonPage class="second-tab-page">

      <IonHeader class="second-tab-header">
        <IonToolbar>
        <IonButtons slot="start">
            <IonMenuButton menu="main-menu"></IonMenuButton>
          </IonButtons>
          <IonTitle>Yoda Translator</IonTitle>
          <IonText>This feature is using the Yoda Translator API</IonText>
        </IonToolbar>
      </IonHeader>

      <IonContent class="second-tab-content " fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>

                <IonCardHeader>
                  <IonCardTitle>
                    Translated:
                    <br/>
                    { newTranslate.contents.translated }
                    </IonCardTitle>
                </IonCardHeader>


                <IonCardContent>
                  <IonItem>
                    <IonLabel position="stacked" color="dark"  >English to Yoda Wise Words </IonLabel >
                    <IonTextarea
                      value={text}
                      autoGrow= {true}
                      color= "dark"
                      placeholder= "Here your training, insert,Padawan"
                      onIonChange={e => setText(e.detail.value!)}
                      ></IonTextarea>
                  </IonItem>
                </IonCardContent>

                    <IonItem>
                      <IonButton
                        color="success"
                        fill="solid"
                        size="default"
                        slot="end"
                        onClick={() => {setShowLoading(true);  requestTranslate(text) }}
                      >Traduzir</IonButton>
                    </IonItem>

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
                message={'Translating to wise yoda words'}
              />

            </IonCol>

          </IonRow>
        </IonGrid>


        </IonContent>
    </IonPage>
  );
};

export default YodaTextTranslator;
