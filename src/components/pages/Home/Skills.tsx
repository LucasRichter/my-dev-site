import React from 'react'
import { Flex, Box } from '@rebass/grid'
import { Heading, Text } from 'styled-typography'
import { withTranslation } from '../../../../i18n'
import animationData from '../../../lottie/skills.json'
import Lottie from 'react-lottie'
import Image from 'next/image'
import skills from '../../../helpers/skills'

type Props = {
  t: (key: string) => string
  namespacesRequired?: [string]
}

const Skills: React.FC<Props> = ({ t, namespacesRequired = ['home'] }) => {
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
      width={1}
    >
      <Box flex="0 47%">
        <Heading level={2}>{t('skillsTitle')}</Heading>

        <Box py={4}>
          <Text>{t('skillsSubtitle')}</Text>
        </Box>

        <Flex justifyContent="space-between">
          {skills.map(s => (
            <Box css={{ position: 'relative' }} key={s}>
              <Image
                src={`/static/assets/logos/${s}.png`}
                width={64}
                height={64}
              />
            </Box>
          ))}
        </Flex>
      </Box>

      <Box flex="0 47%">
        <Lottie options={defaultOptions} />
      </Box>
    </Flex>
  )
}

export default withTranslation('home')(Skills)
