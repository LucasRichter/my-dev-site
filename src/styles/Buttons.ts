import styled from 'styled-components'

const Button = styled.button`
  background-color: #f07b61;
  color: #153956;
  appearance: none;
  border: none;
  user-select: none;
  transition: all ease-in-out 0.365s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;
  font-family: Work Sans, sans-serif;
  font-size: 21px;
  padding: 0 15px;
  font-weight: 700;
  text-decoration: none;
  border-radius: 6px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;

  :hover {
    background-color: transparent;
    border: 1px solid #f07b61;
    color: #f07b61;
  }
`

export default Button
