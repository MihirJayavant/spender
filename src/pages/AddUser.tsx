import React from 'react'
import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonInput, IonItem, IonLabel, IonButton } from '@ionic/react'
import { RouterProps } from 'react-router'

export const AddUser = (props: RouterProps) => {
  const onCLick = () => {
    props.history.push('/home')
  }

  return (
    <IonPage>
      <IonContent>
        <div className="hero">
          <div className="title">Spender</div>
          <div className="sub-title">Analyze your expenditure</div>
        </div>
        <IonGrid className="ion-padding">
          <IonRow>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating">Name</IonLabel>
                <IonInput type="text" required={true} />
              </IonItem>
            </IonCol>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="floating">Monthly Income</IonLabel>
                <IonInput type="number" required={true} />
              </IonItem>
            </IonCol>
            <IonCol size="12">
              <IonButton type="button" color="success" expand="full" size="large" onClick={onCLick}>
                Next
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}
