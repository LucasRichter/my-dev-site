import React from 'react'
import { Heading } from 'styled-typography'
import { Box, Flex } from '@rebass/grid'
import { Linkedin, GitHub } from 'react-feather'
const Footer: React.FC = () => {
  return (
    <Flex
      px={[4, 4, 6]}
      py={4}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width={1}
      bg="#153956"
      as="footer"
      css={{ borderTop: '2px solid #89d6fb' }}
    >
      <Heading level={4}>© 2021 Lucas Dev</Heading>
    </Flex>
  )
}

export default Footer
