import React from "react";

import { Layout } from "../style";

export const LayoutMaxWidth = ({ children, spacing, wrap }) => {
  return (
    <Layout
      gridTemplateColumns={{ xxs:"repeat(4, minmax(0,1fr))",sm: "repeat(6, minmax(0,1fr))", md: "repeat(12, 1fr)" }}
      columnGap="2rem"
    >
      {children}
    </Layout>
  );
};
