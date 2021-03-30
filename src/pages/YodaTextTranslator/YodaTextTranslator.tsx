
import { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel,
              IonGrid, IonRow, IonCol, IonCard, IonLoading, IonText, IonButton, IonCardContent,
              IonTextarea, IonCardHeader, IonCardTitle} from '@ionic/react';

import { YodaTranslator } from "../../hooks/yodaTranslator"

import './YodaTextTranslator.css';





const YodaTextTranslator: React.FC = () => {
  const { newTranslate, requestTranslate } = YodaTranslator()

  const [text, setText] = useState<string>("");
  const [showLoading, setShowLoading] = useState(false);

  // Sugiro  fazer um acompanhamento pra entender o código 💚
  //
  // Bolo de Caneca
  //
  // 1min 15s no microondas
  //
  // 4 Colheres de sopa de farinha de trigo
  // 2 colheres de sopa de achocolato
  // 1 Colher de chá de fermento químico
  // 4 Colheres de sopa de Leite
  // 2 Colheres de sopa de oleo


  useEffect(() => {
    setShowLoading(false)
  }, [newTranslate]);

  return (
    <IonPage class="second-tab-page">

      <IonHeader class="second-tab-header">
        <IonToolbar>
          <IonTitle>Yoda Translator</IonTitle>
          <IonText>This feature are using the Yoda Translator API</IonText>
        </IonToolbar>
      </IonHeader>

      <IonContent class="second-tab-content " fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>

                <IonCardHeader>
                  <IonCardTitle> Translated: { newTranslate.contents.translated }</IonCardTitle>
                </IonCardHeader>


                <IonCardContent>
                  <IonItem>
                    <IonLabel position="stacked" color="primary" >Translate to Yoda </IonLabel >
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
