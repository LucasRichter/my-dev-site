import React from 'react'
import { Flex, Box } from '@rebass/grid'
import { Heading, Text } from 'styled-typography'
import { withTranslation } from '../../../../i18n'
import animationData from '../../../lottie/skills.json'
import Lottie from 'react-lottie'

const Skills: React.FC = ({ t, namespacesRequired = ['home'] }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <Flex
      flexDirection={['column', 'column', 'row-reverse']}
      justifyContent="space-between"
      alignItems="center"
      px={6}
      py={4}
    >
      <Box flex="0 47%">
        <Heading level={2}>{t('skillsTitle')}</Heading>

        <Box pt={4}>
          <Text>{t('skillsSubtitle')}</Text>
        </Box>
      </Box>

      <Box flex="0 47%">
        <Lottie options={defaultOptions} />
      </Box>
    </Flex>
  )
}

export default withTranslation('home')(Skills)
