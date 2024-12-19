import React from "react";
import Spline from "@splinetool/react-spline";
import { Suspense } from "react";

const Footer = () => {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <Spline scene="https://prod.spline.design/B2EYCvXqjYG9N8Bn/scene.splinecode" />
    </Suspense>
  );
};

export default Footer;
