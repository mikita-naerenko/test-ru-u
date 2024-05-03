import React from 'react';
import ColorPalette from '../components/collor-palette/color-pallete';
import { CenteredContainer } from '../components/ui'

const PalettePage = () => {
  return (
    <CenteredContainer>
      <h1>Палитра</h1>
      <ColorPalette />
    </CenteredContainer>
  );
};

export default PalettePage;

