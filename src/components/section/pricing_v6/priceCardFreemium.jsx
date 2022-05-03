import React, { useEffect, useState } from "react";

import {
  TitleWrapper,
  Image,
  Icon,
  AnnualWrapper,
  CardWrapper,
  PriceWrapper,
  H2,
  P,
  A,
  Label,
  Button,
  LinkWrapper,
} from "./styled";
import Checkbox from "./Checkbox";
import Arrow from "./Arrow";
import Route from "../../../localization";
import Link from "../../utils/link";
import { ButtonSecondary, ButtonBorderGrey, ButtonWhite, ButtonBlue } from "../../button";
import MixpanelHelper from "../../utils/segment";
import tp from "../../../localization/tracking.json";
import { SpaceH } from "../../space";
import { graphql, useStaticQuery } from "gatsby";

const PriceCard = ({
  id,
  beta,
  lets_talk,

  customize_your_plan,
  button_label,

  common,
  title,
  description,
  icon,
  price,
  priceString,
  starting_at,
  lang,
  event_plan,
  border,
  button_type,
  t,
  key,
}) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            loginOrganizer
          }
        }
      }
    `
  );

  return (
    <CardWrapper border={border}>
      {/* <AnnualWrapper border={border}>{lang === "fr-fr" ? "Contrat à l'année" : "Billed annually"}</AnnualWrapper> */}

      <div>
        <TitleWrapper>
          <div>
            <Icon className={icon || "icons8-star-filled"} src={icon} />
            <H2>{title}</H2>
          </div>
          {common ? (
            <P align="right" width={50} fs={12}>
              {common}
            </P>
          ) : null}
        </TitleWrapper>
        <P>{description}</P>
      </div>
      <div>
        <P mt={24} fs={13}>
          {starting_at}
        </P>
        <PriceWrapper>
          {price >= 0 ? (
            <div>
              <H2>{priceString}</H2>
              <P>/{t.month}</P>
            </div>
          ) : (
            <>
              <H2>{lets_talk}</H2>
              {/* <Label>{beta}</Label> */}
            </>
          )}
        </PriceWrapper>
        <SpaceH of={20} />
        {button_type === "contact_us" && (
          <MixpanelHelper
            analytics-location={tp["button_location"]["pricing"]}
            analytics-category={tp["button_value"]["demo_request"]}
            analytics-label={button_label}
          >
            <ButtonSecondary to={Route[lang]["about/contact/sales/v2"]}>{button_label}</ButtonSecondary>
          </MixpanelHelper>
        )}
        {button_type === "talk_us" && (
          <MixpanelHelper
            analytics-location={tp["button_location"]["pricing"]}
            analytics-category={tp["button_value"]["demo_request"]}
            analytics-label={button_label}
          >
            <ButtonBlue color={"blue"} to={Route[lang]["about/contact/sales/v2"]}>
              {button_label}
            </ButtonBlue>
          </MixpanelHelper>
        )}

        {button_type === "signup" && (
          <MixpanelHelper
            analytics-location={tp["button_location"]["pricing"]}
            analytics-category={tp["button_value"]["signup"]}
            analytics-label={button_label}
          >
            <ButtonBorderGrey to={data.site.siteMetadata.loginOrganizer}>{button_label}</ButtonBorderGrey>
          </MixpanelHelper>
        )}
        {/* {price >= 0 ? (
          <ButtonBorderGrey to={data.site.siteMetadata.loginOrganizer}>{button_signup_free}</ButtonBorderGrey>
        ) : (
          <ButtonSecondary to={data.site.siteMetadata.loginOrganizer} color={"blue"}>
            {button_signup_free}
          </ButtonSecondary>
        )} */}
        <SpaceH of={16} />
        {customize_your_plan ? (
          <LinkWrapper color={button_type === "contact_us" ? "#00CC88" : ""}>
            <Link to={Route[lang]["pricing/build-plan"]}>{customize_your_plan}</Link>

            <span
              style={{ position: "absolute", top: "0px", right: "-0px", display: "inline-block" }}
              className="icons8-right-pointing-arrow"
            />
          </LinkWrapper>
        ) : (
          <SpaceH of={17.6} />
        )}
      </div>
    </CardWrapper>
  );
};

export default PriceCard;
