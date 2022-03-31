import React from 'react'
import { Box, Flex } from '@rebass/grid'
import { Heading } from 'styled-typography'
import { withTranslation } from '../../../../i18n'
import Button from '../../../styles/Buttons'

const MainSection: React.FC<{
  title: string
  t: (str: string) => string,
  image: string
}> = ({
  t,
  title,
  image
}) => {
  return (
    <Box bg="#153956" as="section">
      <Flex
        width={1}
        flexDirection={['column', 'column', 'row']}
        justifyContent="space-between"
        px={[4, 4, 6]}
        alignItems="center"
      >
        <Box css={{ zIndex: 9 }} flex={['0 100%', '0 100%', '0 47%']}>
          <Heading level={1}>
            {title}
          </Heading>

          <Box width={[1, 240, 240]}>
            <Button as="a" href="#contact">
              {t('button')}
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default withTranslation('blog')(MainSection)
