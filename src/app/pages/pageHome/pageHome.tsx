import React, { useState, useEffect } from "react";
import { Container } from "../../components/properties/styles";
import { useTranslation } from "react-i18next";

export function PageHome() {
     const { t } = useTranslation();
     return (
          <>
               <h1>{t("welcome")}</h1>
          </>
     );
}
