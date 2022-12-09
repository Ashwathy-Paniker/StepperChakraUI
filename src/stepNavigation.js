import React from "react";
import Step from "./step";
import {Container,Box} from "@chakra-ui/react";
export default function StepNavigation(props) {
  return (
    <Box className="stepWrapper">
      {props.labelArray.map((item, index) => (
        <Step
          key={index}
          index={index}
          label={item}
          updateStep={props.updateStep}
          selected={props.currentStep === index + 1}
        ></Step>
      ))}
    </Box>
  );
}
