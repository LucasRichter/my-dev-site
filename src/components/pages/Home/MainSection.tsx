import React from 'react'
import { Box, Flex } from '@rebass/grid'
import { Text, Heading } from 'styled-typography'
import { withTranslation } from '../../../../i18n'
import Lottie from 'react-lottie'
import Developer from '../../../lottie/developer.json'
import Typewriter from 'typewriter-effect'
import Button from '../../../styles/Buttons'

const MainSection: React.FC<any> = ({ t, namespacesRequired = ['home'] }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Developer,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <Box as="section">
      <Flex
        width={1}
        flexDirection={['column', 'column', 'row']}
        justifyContent="space-between"
        px={[4, 4, 6]}
        bg="#153956"
        alignItems="center"
      >
        <Box css={{ zIndex: 9 }} flex={['0 100%', '0 100%', '0 47%']}>
          <Heading level={1}>
            {t('title')}

            <Typewriter
              onInit={() => {}}
              options={{
                strings: t('words', { returnObjects: true }),
                autoStart: true,
                loop: true
              }}
            />
          </Heading>

          <Box py={4}>
            <Text>{t('subtitle')}</Text>
          </Box>

          <Box width={[1, 240, 240]}>
            <Button as="a" href="#contact">
              {t('button')}
            </Button>
          </Box>
        </Box>

        <Box flex={['0 100%', '0 100%', '0 47%']}>
          <Lottie options={defaultOptions} />
        </Box>
      </Flex>
      <Box
        alg="Wave"
        as="img"
        bg="#153956"
        css={{ pointerEvents: 'none', zIndex: -1 }}
        mt={-132}
        src="/static/assets/images/wave.svg"
        width={1}
      />
    </Box>
  )
}

export default withTranslation('home')(MainSection)
