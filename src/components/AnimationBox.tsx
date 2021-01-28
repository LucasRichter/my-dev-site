import TrackVisibility from 'react-on-screen'

import styled, { css } from 'styled-components'
import { Flex } from '@rebass/grid'
import React from 'react'

const Animate = styled(Flex)`
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.6s ease-in-out;

  ${p =>
    p.isVisible &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}
`

const AnimatedBox: React.FC<any> = props => (
  <TrackVisibility tag="section" once partialVisibility>
    {({ isVisible }) => (
      <Animate flexWrap="wrap" {...props} isVisible={isVisible} />
    )}
  </TrackVisibility>
)

export default AnimatedBox
