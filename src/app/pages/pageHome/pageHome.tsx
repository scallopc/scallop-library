import React, { useState, useEffect } from "react";
import { Container } from "../properties/styles";
import { useTranslation } from "react-i18next";
import { Header } from "./header/header";

export function PageHome() {
     const { t } = useTranslation();
     return (
          <>
          <Header />
          <Container>
               <h1>{t("welcome")}</h1>
          </Container>
          </>
     );
}
