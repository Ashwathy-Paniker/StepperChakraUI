import React, { useState } from "react";
import StepNavigation from "./stepNavigation";
import {
  Card,
  CardBody,
  Button,
  Stack,Box,Container,Text
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
function App() {
  const labelArray = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
  const [currentStep, updateCurrentStep] = useState(1);

  function updateStep(step) {
    updateCurrentStep(step);
  }

  return (
    <Container>
      <Card >
        <CardBody>
          <StepNavigation
            labelArray={labelArray}
            currentStep={currentStep}
            updateStep={updateStep}
          ></StepNavigation><br/>
          <Text textStyle='h1'>Selected Step: {currentStep}</Text><br/>

          <Stack direction="row" spacing={20} align="center">
            <Button
              variant="solid"
              colorScheme="green"
              disabled={currentStep === 1}
              onClick={() => updateStep(currentStep - 1)}
            >
              Previous Step
            </Button>
            <Button
              variant="solid"
              colorScheme="green"
              rightIcon={<FiArrowRight />}
              disabled={currentStep === labelArray.length}
              onClick={() => updateStep(currentStep + 1)}
            >
              Next Step
            </Button>
          </Stack>
          {/* <Box bgColor="brand.100">Welcome</Box> */}
        </CardBody>
      </Card>
    </Container>
  );
}

export default App;

