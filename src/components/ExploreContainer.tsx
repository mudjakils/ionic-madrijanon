import './ExploreContainer.css';
import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    
    <IonCard>
    <img alt="Silhouette of mountains" src="image -23.png" />
    <IonCardHeader>
      <IonCardTitle>Hello world</IonCardTitle>
      <IonCardSubtitle>gwapo ko</IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
  </IonCard>
  );
};

export default ExploreContainer;
