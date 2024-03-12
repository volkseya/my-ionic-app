import {
  IonButton,
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
  useIonLoading,
  useIonRouter,
} from "@ionic/react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import logo from "../assets/vercel.svg";
import React, { useEffect, useState } from "react";
import Intro from "../components/Intro";
import { Preferences } from "@capacitor/preferences";

const INTRO_KEY = "intro-seen";

const Login: React.FC = () => {
  const router = useIonRouter();
  const [introSeen, setIntroSeen] = useState(false);
  const [present, dismiss] = useIonLoading();
  useEffect(() => {
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTRO_KEY });
      console.log("Preferences seen: ", seen);
      setIntroSeen(seen.value === "true");
    };
    checkStorage();
  }, []);
  const login = async (event: any) => {
    event.preventDefault();
    console.log("logged in");
    await present("Logging in...");
    setTimeout(async () => {
      dismiss();
      router.push("/app", "root");
    }, 2000);
    // root transitions with no animation
    // forward has the slide animation
    // router.push('/home')
  };
  const finishIntro = () => {
    console.log("FIN");
    setIntroSeen(true);
    Preferences.set({ key: INTRO_KEY, value: "true" });
  };
  const seeIntroAgain = () => {
    setIntroSeen(false);
    Preferences.remove({ key: INTRO_KEY });
  };

  return (
    <>
      {!introSeen ? (
        <Intro onFinish={finishIntro} />
      ) : (
        <IonPage>
          <IonHeader>
            <IonToolbar color="tertiary">
              <IonTitle>Login</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding" scrollY={false}>
            <IonGrid fixed>
              <IonRow class="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                  <div className="ion-text-center ion-padding">
                    <img src={logo} alt="logo" width={"50%"} />
                  </div>
                </IonCol>
              </IonRow>
              <IonRow class="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                  <IonCard>
                    <IonCardContent>
                      <form onSubmit={login}>
                        {/* Mode is used to set the stying to material design or ios */}
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
                          expand="block"
                        >
                          Log in
                          <IonIcon icon={logInOutline} slot="end" />
                        </IonButton>
                        <IonButton
                          type="button"
                          className="ion-margin-top"
                          color="secondary"
                          expand="block"
                          routerLink="/register"
                        >
                          Create an account
                          <IonIcon icon={personCircleOutline} slot="end" />
                        </IonButton>
                        <IonButton
                          type="button"
                          size="small"
                          fill="clear"
                          className="ion-margin-top"
                          color="medium"
                          expand="full"
                          onClick={seeIntroAgain}
                        >
                          Watch Intro
                          <IonIcon icon={personCircleOutline} slot="end" />
                        </IonButton>
                      </form>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
          <IonFooter>
            <IonToolbar>asdf</IonToolbar>
          </IonFooter>
        </IonPage>
      )}
    </>
  );
};

export default Login;
