import React from 'react'
import { withTranslation } from '../../i18n'
import { Heading, Text } from 'styled-typography'
import Typewriter from 'typewriter-effect'
import { Flex, Box } from '@rebass/grid'
import Button from '../styles/Buttons'
import Lottie from 'react-lottie'
import Developer from '../lottie/developer.json'
import Layout from '../components/Layout'
import Skills from '../components/pages/Home/Skills'

const Home: React.FC = ({ t }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Developer,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <Layout title="Lucas Richter - Developer">
      <Flex
        width={1}
        flexDirection={['column', 'column', 'row']}
        justifyContent="space-between"
        px={6}
        alignItems="center"
      >
        <Box flex="0 47%">
          <Heading level={1}>
            {t('title')}

            <Typewriter
              options={{
                strings: t('words', { returnObjects: true }),
                autoStart: true,
                loop: true
              }}
            />
          </Heading>

          <Box width={[1, 1, 580]} py={4}>
            <Text>{t('subtitle')}</Text>
          </Box>

          <Box width={[1, 240, 240]}>
            <Button as="a" href="#contact">
              {t('button')}
            </Button>
          </Box>
        </Box>

        <Box flex="0 47%">
          <Lottie options={defaultOptions} />
        </Box>
      </Flex>
      <Box
        css={{ pointerEvents: 'none' }}
        as="img"
        src="/static/assets/images/wave.svg"
        width={1}
        mt={-192}
      />

      <Skills />
    </Layout>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['home']
})

export default withTranslation('home')(Home)
