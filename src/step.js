import React from "react";
import {
    Card,
    CardBody,
    Button,
    Stack,Box,Container,Text
  } from "@chakra-ui/react";
export default function Step(props) {
    return (
        <Box className={"stepBlock" + (props.selected ? " selected" : "")}>
            <Box className="circleWrapper" onClick={() => props.updateStep(props.index + 1)}>
                <Box className="circle">{props.index + 1}</Box>
            </Box>
            <Text textStyle='h1'>{props.label}</Text>
        </Box>
    )
}