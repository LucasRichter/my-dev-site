import styled, { keyframes, css } from 'styled-components'
import { Box } from '@rebass/grid'

const floating = keyframes`
  from { transform: translate(0,  0px); }
  65%  { transform: translate(0, 10px); }
  to   { transform: translate(0, -0px); }
`

export const LogoBox = styled(Box)`
  animation-name: ${floating};
  animation-duration: 2s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`

export const GoalCard = styled(Box)`
  background: #ffffff;
  box-shadow: 0px 20px 50px rgba(33, 47, 64, 0.1);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const UnknownBox = styled(Box)`
  transition: all 0.365s ease-in-out;
  :hover {
    transform: translateX(60%);
  }

  ${p =>
    p.spy &&
    css`
      transform: translateX(60%);
    `}
`
