import {
  CreateAnimation,
  Gesture,
  GestureDetail,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  createGesture,
  useIonViewDidEnter,
} from "@ionic/react";
import React, { useRef } from "react";

const Tab2: React.FC = () => {
  const animationRef = useRef<CreateAnimation>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  useIonViewDidEnter(() => {
    animationRef.current?.animation.play();
    const gesture: Gesture = createGesture({
      el: elementRef.current!,
      gestureName: "my-gesture",
      threshold: 0,
      onStart: (e) => onStartHandler(e),
      onMove: (e) => onMoveHandler(e),
      onEnd: (e) => onMoveEndHandler(e),
    });
    gesture.enable();
  });

  const onStartHandler = (detail: GestureDetail) => {
    elementRef.current!.style.transition = "none";
  };

  const onMoveHandler = (detail: GestureDetail) => {
    const x = detail.currentX - detail.startX;
    const y = detail.currentY - detail.startY;

    elementRef.current!.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onMoveEndHandler = (detail: GestureDetail) => {
    elementRef.current!.style.transition = "500ms ease-out";
    elementRef.current!.style.transform = "translate(0px, 0px)";
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"primary"}>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Tab2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" scrollY={false}>
        <CreateAnimation
          ref={animationRef}
          duration={2000}
          iterations={Infinity}
          delay={1000}
          keyframes={[
            { offset: 0, transform: "scale(1)", opacity: "1" },
            { offset: 0.5, transform: "scale(1.5)", opacity: "0.5" },
            { offset: 1, transform: "scale(1)", opacity: "1" },
          ]}
        >
          <IonButton expand="block" color={"tertiary"} className="ion-margin">
            Join Ionic Academy
          </IonButton>
        </CreateAnimation>
        <div
          ref={elementRef}
          style={{ width: 50, height: 50, backgroundColor: "red" }}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
