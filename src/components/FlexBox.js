/* @flow */
import React from 'react';
import type { ComponentType } from 'react'
import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props=> props.flexDirection? props.flexDirection : "row"};
  flex-wrap: ${props=> props.flexWrap? props.flexWrap : "nowrap"};
  justify-content: ${props=> props.justifyContent? props.justifyContent: "flex-start"};
  align-items: ${props=> props.alignItems? props.alignItems: "flex-start"};
  align-content: ${props=> props.alignContent? props.alignContent: "flex-start"};
`
export const Item = styled.div`
  order: ${props=> props.order? props.order : 0};
  flex-grow: ${props=> props.flexGrow? props.flexGrow: 1};
  flex-shrink: ${props=> props.flexShrink? props.flexShrink: 1};
  flex-basis: ${props=> props.flexBasis? props.flexBasis: "auto"};
  align-self: ${props=> props.alignSelf? props.alignSelf: "auto"};
`
