import React, { useState, useEffect } from "react";
import { Container } from "../../components/properties/styles";
import { useTranslation } from "react-i18next";
import { Header } from "./header/header";
import { HomeContainer } from "./styles";

export function PageHome() {
     const { t } = useTranslation();
     return (
          <>
          <Header />
          <HomeContainer>
               <h1>{t("welcome")}</h1>
          </HomeContainer>
          </>
     );
}
