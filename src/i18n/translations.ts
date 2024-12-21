interface Translations {
  [key: string]: {
    washingTitle: string;
    dryingTitle: string;
    load: {
      title: string;
      subtitle: string;
    };
    payment: {
      title: string;
      subtitle: string;
    };
    program: {
      washTitle: string;
      washSubtitle: string;
      dryTitle: string;
      drySubtitle: string;
    };
    start: {
      title: string;
      subtitle: string;
    };
  };
}

export const translations: Translations = {
  en: {
    washingTitle: "Washing instructions",
    dryingTitle: "Drying instructions",
    load: {
      title: "Load the washing machine and close the door.",
      subtitle: "Remember to close pockets and zippers."
    },
    payment: {
      title: "Make payment.",
      subtitle: "Soap, ozone and fabric softener included in price."
    },
    program: {
      washTitle: "Select wash program.",
      washSubtitle: "The display indicates the remaining process time.",
      dryTitle: "Select drying program.",
      drySubtitle: "The display shows the remaining process time. You can open the door at any time to check the degree of drying of the laundry when you close the door press start"
    },
    start: {
      title: "Press start.",
      subtitle: "35 minute wash cycle."
    }
  },
  de: {
    washingTitle: "Waschanleitung",
    dryingTitle: "Trocknungsanleitung",
    load: {
      title: "Waschmaschine beladen und Tür schließen.",
      subtitle: "Denken Sie daran, Taschen und Reißverschlüsse zu schließen."
    },
    payment: {
      title: "Zahlung vornehmen.",
      subtitle: "Waschmittel, Ozon und Weichspüler im Preis inbegriffen."
    },
    program: {
      washTitle: "Waschprogramm auswählen.",
      washSubtitle: "Das Display zeigt die verbleibende Prozesszeit an.",
      dryTitle: "Trocknungsprogramm auswählen.",
      drySubtitle: "Das Display zeigt die verbleibende Prozesszeit an. Sie können die Tür jederzeit öffnen, um den Trocknungsgrad der Wäsche zu überprüfen. Nach dem Schließen der Tür Start drücken."
    },
    start: {
      title: "Start drücken.",
      subtitle: "35-minütiger Waschzyklus."
    }
  }
};