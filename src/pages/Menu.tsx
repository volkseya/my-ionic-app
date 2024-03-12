import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Redirect, Route } from "react-router";
import List from "./List";
import Settings from "./Settings";
import { homeOutline, logOutOutline, newspaperOutline } from "ionicons/icons";

const Menu: React.FC = () => {
  const paths = [
    { name: "Home", url: "/app/list", icon: homeOutline },
    { name: "Settings", url: "/app/settings", icon: newspaperOutline },
  ];
  return (
    <IonPage>
      <IonSplitPane contentId="main" when="sm">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar color={"secondary"}>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            {paths.map((path, index) => (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem detail={true} routerLink={path.url} routerDirection={"none"}>
                  <IonIcon slot="start" icon={path.icon} />
                  {path.name}
                </IonItem>
              </IonMenuToggle>
            ))}
            <IonMenuToggle autoHide={false}>
              <IonButton expand="full" routerLink="/" routerDirection={"root"}>
                <IonIcon slot="start" icon={logOutOutline} />
                Log out
              </IonButton>
            </IonMenuToggle>
          </IonContent>
        </IonMenu>
        <IonRouterOutlet id="main">
          <Route exact path="/app/list" component={List} />
          <Route path="/app/settings" component={Settings} />
          <Route exact path="/app">
            <Redirect to="/app/list" />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;
