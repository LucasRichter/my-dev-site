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
import { NextPage } from 'next'
import Goals from '../components/pages/Home/Goals'
import Contact from '../components/pages/Home/Contact'

const Home: NextPage<any> = ({ t }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Developer,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      progressiveLoad: true
    }
  }
  return (
    <Layout title="Lucas Richter - Developer">
      <Flex
        width={1}
        flexDirection={['column', 'column', 'row']}
        justifyContent="space-between"
        px={[4, 4, 6]}
        bg="#153956"
        alignItems="center"
      >
        <Box css={{ zIndex: 9 }} flex="0 47%">
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

        <Box flex="0 47%">
          <Lottie options={defaultOptions} />
        </Box>
      </Flex>
      <Box
        css={{ pointerEvents: 'none', zIndex: -1 }}
        as="img"
        bg="#153956"
        src="/static/assets/images/wave.svg"
        width={1}
        mt={-132}
      />

      <Goals />
      <Skills />
      <Contact />
    </Layout>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['home']
})

export default withTranslation('home')(Home)
