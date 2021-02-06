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
  filter: grayscale(1);
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
  position: absolute;
  transform: ${p => (p.index % 2 === 0 ? 'rotate(-30deg)' : 'rotate(30deg)')};
  top: ${p => p.index * 20}%;
  left: ${p => (p.index % 2 === 0 ? '-100px' : 'unset')};
  right: ${p => (p.index % 2 !== 0 ? '-100px' : 'unset')};
  transition: all 0.9s ease-in-out;

  ${p =>
    p.konami &&
    css`
      top: 50%;
      left: calc(38% + ${p.index * 120}px);
      transform: translate(-100%, -100%);
      right: unset;
    `}

  ${p =>
    p.spy &&
    css`
      transform: translateX(${p.index % 2 === 0 ? 50 : -50}%);
    `}
`
