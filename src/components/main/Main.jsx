import React from "react";
import {
  Takeover,
  StripNotice,
  ModerEnterprise,
  LatestNews,
  EnergiseEngineers,
  SignificantEnterprise,
  PublicCloud,
  CarrierGradePrivateCloud,
  MultiCloudKubernetes,
  UltraSecureThings,
  WorkstationsDesktops,
  DataCentreAutomation,
  SmartRobotsShapesSizes,
  MultiCloudApplicationsPAAS,
} from "./index";
import { OpenSourceSecurity } from "./OpenSourceSecurity";

export const Main = () => {
  return (
    <>
      <Takeover />
      <StripNotice />
      <ModerEnterprise />
      <LatestNews />
      <EnergiseEngineers />
      <OpenSourceSecurity />
      <SignificantEnterprise />
      <PublicCloud />
      <CarrierGradePrivateCloud />
      <MultiCloudKubernetes />
      <UltraSecureThings />
      <WorkstationsDesktops/>
      <DataCentreAutomation/>
      <SmartRobotsShapesSizes/>
      <MultiCloudApplicationsPAAS/>
    </>
  );
};
