/**
 *
 * GoldenType
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const goldenRatio = 1.618;

function calculateGoldenRatio() {
  return 1.618;
}

function calculateScale(fontSize, goldenRatio) {
  // f1 fphi^2
  // f2 fphi^3/2
  // f3 fphi
  // f4 fphi^1/2
  // f5 f
  // f6 f/phi^1/2
  return fontSize * goldenRatio;
}

function calculateLineHeightBasedOnWidth(fontSize, goldenRatio, lineWidth) {
  return (
    fontSize *
    (3 -
      goldenRatio +
      (2 * goldenRatio - 3) * (lineWidth / (lineWidth * goldenRatio)))
  );
}

function calculateLineHeight(fontSize, goldenRatio) {
  return fontSize * goldenRatio;
}

function calculateLineWidth() {}

function calculateCPLWidth(CPL, fontSize, goldenRatio) {
  return CPL * (fontSize / goldenRatio);
}

function calculateAverageCharacterWidth(lineWidth, CPL) {
  return lineWidth / CPL;
}

function calculateUHeight(fontSize, characterWidth) {
  return fontSize / characterWidth;
}

function GoldenType(Component) {
  return (
    <div
      style={{
        fontSize: calculateScale(),
        maxWidth: calculateCPLWidth(),
        lineHeight: calculateLineHeightBasedOnWidth(),
      }}
    >
      <Component />
    </div>
  );
}

GoldenType.propTypes = {};

export default GoldenType;
