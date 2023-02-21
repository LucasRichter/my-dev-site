import React from 'react'
import { Heading } from 'styled-typography'
import { Flex } from '@rebass/grid'

const Header: React.FC = () => {
  return (
    <Flex
      css={{
        boxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);'
      }}
      px={[4, 4, 6]}
      py={4}
      bg="#153956"
      width={1}
      as="header"
    >
      <Heading level={3}>{'<LucasDev>'}</Heading>
      <Heading as="a" level={3} href="https://blog.richterlucas.dev">Blog</Heading>
    </Flex>
  )
}

export default Header
