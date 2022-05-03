import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import styled from "styled-components";

const Icon = styled.i`
  font-size: 30px;
  margin-right: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
`;

const stories = storiesOf("Icones", module);

stories.add("Default", () => {
  const IconesList = [
    "icons8-access-granted",
    "icons8-agreement",
    "icons8-aide",
    "icons8-air-play-button",
    "icons8-alarme",
    "icons8-apartment-building",
    "icons8-approve",
    "icons8-arrow-pointing-to-right",
    "icons8-attirer",
    "icons8-banni-re",
    "icons8-building",
    "icons8-bulle",
    "icons8-business-card-scanner",
    "icons8-calendrier-14",
    "icons8-carte-contact",
    "icons8-casque----couteurs",
    "icons8-chat-room",
    "icons8-checked",
    "icons8-checked-2",
    "icons8-checkout",
    "icons8-circular-arrow-pointing-to-left",
    "icons8-cl",
    "icons8-classroom",
    "icons8-client-base",
    "icons8-close-button",
    "icons8-close-button-2",
    "icons8-close-button-3",
    "icons8-cloud-sync",
    "icons8-collaboration",
    "icons8-collapse-arrow",
    "icons8-comma",
    "icons8-comma-2",
    "icons8-commercial",
    "icons8-conf-rence",
    "icons8-conf-rence-premier-plan-s-lectionn",
    "icons8-confiance",
    "icons8-contacts",
    "icons8-content",
    "icons8-data-encryption",
    "icons8-data-protection",
    "icons8-database",
    "icons8-database-administrator",
    "icons8-database-symbol",
    "icons8-database-view",
    "icons8-design",
    "icons8-diabetes",
    "icons8-diffusion",
    "icons8-document",
    "icons8-donn-es-dans-les-deux-directions",
    "icons8-download-from-cloud",
    "icons8-drop-down-arrow",
    "icons8-e-mail",
    "icons8-edit",
    "icons8-employ",
    "icons8-entra-nement",
    "icons8-ev-nement-accept",
    "icons8-ev-nement-accept--provisoirement",
    "icons8-exposant",
    "icons8-fl-che-droite",
    "icons8-get-quote",
    "icons8-graphique-combin",
    "icons8-green-check-mark",
    "icons8-green-check-mark-2",
    "icons8-green-check-mark-3",
    "icons8-green-check-mark-4",
    "icons8-grid",
    "icons8-groupe-d-apos-utilisateurs-homme-homme",
    "icons8-handshake-heart",
    "icons8-hard-to-find",
    "icons8-haussier",
    "icons8-heures-suppl-mentaires",
    "icons8-histogramme",
    "icons8-home",
    "icons8-id-e",
    "icons8-imac",
    "icons8-image-frame",
    "icons8-infinite",
    "icons8-intelligence-artificielle",
    "icons8-interface-utilisateur-naturelle-2",
    "icons8-invisible",
    "icons8-invitation",
    "icons8-iphone",
    "icons8-iphone-x",
    "icons8-job-seeker",
    "icons8-key",
    "icons8-left-arrow",
    "icons8-licence",
    "icons8-lien",
    "icons8-light-on",
    "icons8-line-chart",
    "icons8-line-graphic",
    "icons8-lock-outline",
    "icons8-lock-smartphone",
    "icons8-locked-smartphone",
    "icons8-mail",
    "icons8-mail-2",
    "icons8-main-avec-stylo",
    "icons8-marqueur",
    "icons8-messages",
    "icons8-micro",
    "icons8-minuteur",
    "icons8-money",
    "icons8-moniteur",
    "icons8-montre",
    "icons8-note",
    "icons8-notification",
    "icons8-nuage",
    "icons8-ok",
    "icons8-organisation",
    "icons8-people",
    "icons8-phone",
    "icons8-phone-receiver",
    "icons8-pi-ces-de-monnaie",
    "icons8-planificateur",
    "icons8-play",
    "icons8-play-2",
    "icons8-play-button-circled",
    "icons8-play-property",
    "icons8-podium",
    "icons8-podium-avec-audience",
    "icons8-podium-sans-intervenant",
    "icons8-podium-with-speaker",
    "icons8-poign-e-de-main",
    "icons8-poste-de-travail",
    "icons8-pouce-en-l-apos-air",
    "icons8-pr-sentation",
    "icons8-product",
    "icons8-punaise",
    "icons8-push-notifications",
    "icons8-qr-code",
    "icons8-questionnaire",
    "icons8-quick-mode-on",
    "icons8-quitter-la-queue",
    "icons8-quote-left",
    "icons8-r--quilibrer-le-portefeuille",
    "icons8-r-seau",
    "icons8-r-servation",
    "icons8-r-union",
    "icons8-rafra-chir",
    "icons8-relation-homme-homme",
    "icons8-remarque-importante",
    "icons8-rendez-vous-p-riodique",
    "icons8-restaurant-building",
    "icons8-right-pointing-arrow",
    "icons8-right-pointing-arrow-2",
    "icons8-right-pointing-arrow-3",
    "icons8-right-pointing-arrow-4",
    "icons8-right-pointing-arrow-5",
    "icons8-rounded-arrow",
    "icons8-safety-care",
    "icons8-schedule",
    "icons8-search",
    "icons8-security",
    "icons8-shield-outline",
    "icons8-shop",
    "icons8-signature",
    "icons8-star-filled",
    "icons8-statistics",
    "icons8-stop-hand-in-a-circle",
    "icons8-submit-document",
    "icons8-support-en-ligne",
    "icons8-sync",
    "icons8-synchroniser",
    "icons8-team",
    "icons8-technologie-lifestyle",
    "icons8-telescope",
    "icons8-troph-e",
    "icons8-twitter",
    "icons8-uninstalling-updates",
    "icons8-update",
    "icons8-user-male",
    "icons8-utilisateur",
    "icons8-utilisateur-sexe-neutre",
    "icons8-valuations",
    "icons8-vers-l-apos-avant",
    "icons8-vers-le-bas",
    "icons8-vers-le-bas-2",
    "icons8-vers-le-bas-3",
    "icons8-visible",
    "icons8-visible-2",
    "icons8-visual-studio",
    "icons8-volume-moyen",
    "icons8-warranty",
    "icons8-web",
    "icons8-webcam-man",
    "icons8-wifi--teint"
  ];

  return (
    <Flex>
      {IconesList.map(i => (
        <Wrapper>
          <Icon className={i} />
          <p style={{ fontSize: "13px" }}>{i}</p>
        </Wrapper>
      ))}
    </Flex>
  );
});
