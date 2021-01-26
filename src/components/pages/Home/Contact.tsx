import React from 'react'
import { Box, Flex } from '@rebass/grid'
import { Text, Heading } from 'styled-typography'
import { withTranslation } from '../../../../i18n'
import AnimatedBox from '../../AnimationBox'
import Lottie from 'react-lottie'
import message from '../../../lottie/message.json'
import { Linkedin, GitHub } from 'react-feather'

type Props = {
  t: (key: string) => string
  namespacesRequired?: [string]
}

const Contact: React.FC<Props> = ({ t, namespacesRequired = ['home'] }) => {
  const defaultOptions = {
    loop: true,
    animationData: message,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <AnimatedBox bg="white">
      <Flex
        flexDirection={['column', 'column', 'row']}
        justifyContent="center"
        mt={-90}
        alignItems="center"
        mx={[4, 4, 6]}
        bg="#153956"
        css={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          boxShadow: '0px 20px 50px rgba(33, 47, 64, 0.1)'
        }}
      >
        <Box
          textAlign={['center', 'center', 'left']}
          pt={[4, 4, 0]}
          px={[4, 4, 0]}
          flex={['0 100%', '0 100%', '0 47%']}
        >
          <Heading level={2}>{t('contactTitle')}</Heading>
          <Box pt={4}>
            <Text>{t('contactSubtitle')}</Text>
          </Box>
          <Box pt={4}>
            <Box
              as="a"
              mr={3}
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/lucasrichtergonzaga/"
            >
              <Linkedin color="#f2a278" size={44} />
            </Box>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/LucasRichter"
            >
              <GitHub color="#f2a278" size={44} />
            </a>
          </Box>
        </Box>

        <Box flex={['0 100%', '0 100%', '0 47%']}>
          <Lottie options={defaultOptions} />
        </Box>
      </Flex>
    </AnimatedBox>
  )
}

export default withTranslation('home')(Contact)
