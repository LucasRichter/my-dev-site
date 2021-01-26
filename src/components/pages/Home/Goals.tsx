import React, { useEffect, useState } from 'react'
import { Flex, Box } from '@rebass/grid'
import { Heading, Text } from 'styled-typography'
import { withTranslation } from '../../../../i18n'
import AnimatedBox from '../../AnimationBox'
import { GoalCard, UnknownBox } from '../../../styles/pages/Home'
import Lottie from 'react-lottie'
import Image from 'next/image'

const Goals: React.FC<any> = ({ t, namespacesRequired = ['home'] }) => {
  const goals = t('goals', { returnObjects: true })
  const [spy, setSpy] = useState(undefined)

  useEffect(() => {
    setInterval(() => setSpy(Math.floor(Math.random() * 5)), 3000)
  }, [])
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <AnimatedBox
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      px={[4, 4, 6]}
      py={6}
      width={1}
      bg="white"
      css={{ position: 'relative' }}
    >
      <Heading level={2}>{t('goalsTitle')}</Heading>
      <Flex
        width={1}
        pt={5}
        flexDirection={['column', 'column', 'row']}
        justifyContent="space-between"
      >
        {Object.entries(goals).map(([key, value]: [string, any]) => (
          <GoalCard
            mb={[4, 4, 0]}
            flex={['0 100%', '0 100%', '0 30%']}
            key={key}
          >
            <Lottie
              width="200px"
              height="200px"
              options={{
                ...defaultOptions,
                animationData: require(`../../../lottie/${key}.json`)
              }}
            />
            <Box py={3}>
              <Heading level={4}>{value.title}</Heading>
            </Box>
            <Text level={5} color="#333">
              {value.subTitle}
            </Text>
          </GoalCard>
        ))}
      </Flex>
      {'lucas'.split('').map((c, index) => (
        <Box
          key={c}
          css={{
            position: 'absolute',
            transform: index % 2 === 0 ? 'rotate(-30deg)' : 'rotate(30deg)',
            top: `${20 * index}%`,
            left: index % 2 === 0 ? '-100px' : 'unset',
            right: index % 2 !== 0 ? '-100px' : 'unset'
          }}
        >
          <UnknownBox spy={spy === index}>
            <Image
              width="100px"
              height="100px"
              src={`/static/assets/unknows/${c}.png`}
            />
          </UnknownBox>
        </Box>
      ))}
    </AnimatedBox>
  )
}

export default withTranslation('home')(Goals)
