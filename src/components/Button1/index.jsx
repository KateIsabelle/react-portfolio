import React from "react";
import { Link } from 'react-router-dom';
import { MainContainer, ButtonHorizontal, ButtonVertical } from './element';



export default function Button() {
  return (
      <MainContainer>
        Hello
        <ButtonHorizontal />
        <ButtonVertical />
      </MainContainer>
  )
}

// <button class="button">
//   Fancy Button
//   <div class="button__horizontal"></div>
//   <div class="button__vertical"></div>
// </button>
