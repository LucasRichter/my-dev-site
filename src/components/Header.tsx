import React from 'react'
import { Heading } from 'styled-typography'
import { Flex } from '@rebass/grid'

const Header: React.FC = () => {
  return (
    <Flex px={6} py={4} width={1} as="header">
      <Heading level={3}>{'<LucasDev/>'}</Heading>
    </Flex>
  )
}

export default Header
