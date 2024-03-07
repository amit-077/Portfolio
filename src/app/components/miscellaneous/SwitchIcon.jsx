"use client";

import { Box } from "@chakra-ui/react";
import React from "react";

const SwitchIcon = ({ lightMode, setLightMode }) => {
  return (
    <Box>
      <label class="bb8-toggle">
        <input
          class="bb8-toggle__checkbox"
          type="checkbox"
          onClick={() => {
            setLightMode(!lightMode);
            // console.log(lightMode);
          }}
        />
        <div class="bb8-toggle__container">
          <div class="bb8-toggle__scenery">
            <div class="bb8-toggle__star"></div>
            <div class="bb8-toggle__star"></div>
            <div class="bb8-toggle__star"></div>
            <div class="bb8-toggle__star"></div>
            <div class="bb8-toggle__star"></div>
            <div class="bb8-toggle__star"></div>
            <div class="bb8-toggle__star"></div>
            <div class="tatto-1"></div>
            <div class="tatto-2"></div>
            <div class="gomrassen"></div>
            <div class="hermes"></div>
            <div class="chenini"></div>
            <div class="bb8-toggle__cloud"></div>
            <div class="bb8-toggle__cloud"></div>
            <div class="bb8-toggle__cloud"></div>
          </div>
          <div class="bb8">
            <div class="bb8__head-container">
              <div class="bb8__antenna"></div>
              <div class="bb8__antenna"></div>
              <div class="bb8__head"></div>
            </div>
            <div class="bb8__body"></div>
          </div>
          <div class="artificial__hidden">
            <div class="bb8__shadow"></div>
          </div>
        </div>
      </label>
    </Box>
  );
};

export default SwitchIcon;
