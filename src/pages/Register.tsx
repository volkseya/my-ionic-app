import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import { checkmarkDoneOutline } from "ionicons/icons";
import React from "react";

const Register: React.FC = () => {
  const router = useIonRouter();
  const register = (event: any) => {
    event.preventDefault();
    console.log("registered");
    router.goBack();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Create account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" scrollY={false}>
        <IonContent className="ion-padding" scrollY={false}>
          <IonGrid fixed>
            <IonRow class="ion-justify-content-center">
              <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                <IonCard>
                  <IonCardContent>
                    <form onSubmit={register}>
                      <IonInput
                        label="email"
                        labelPlacement="floating"
                        fill="outline"
                        type="email"
                        placeholder="abc@mail.com"
                      ></IonInput>
                      <IonInput
                        label="password"
                        labelPlacement="floating"
                        fill="outline"
                        type="password"
                        className="ion-margin-top"
                      ></IonInput>
                      <IonButton
                        type="submit"
                        className="ion-margin-top"
                        expand="full"
                      >
                        Create my account
                        <IonIcon icon={checkmarkDoneOutline} slot="end" />
                      </IonButton>
                    </form>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonContent>
      <IonFooter>
        <IonToolbar>asdf</IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Register;
