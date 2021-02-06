import React from 'react'
import { Box } from '@rebass/grid'
import { Heading, Text } from 'styled-typography'
import { withTranslation } from '../../../../i18n'
import AnimatedBox from '../../AnimationBox'
import Lottie from 'react-lottie'
import Developer from '../../../lottie/developer-2.json'
type Props = {
  t: (key: string) => string
  namespacesRequired?: [string]
}

const Skills: React.FC<Props> = ({ t, namespacesRequired = ['home'] }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Developer,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <Box id="skills" pt={5} bg="#02577a" width={1}>
      <AnimatedBox
        justifyContent="space-between"
        flexDirection={['column', 'column', 'row-reverse']}
        px={[4, 4, 6]}
        pb={6}
        alignItems="center"
        width={1}
      >
        <Box flex={['0 100%', '0 100%', '0 40%']}>
          <Heading level={2}>{t('skillsTitle')}</Heading>
          <Box pt={3}>
            <Text>
              <span dangerouslySetInnerHTML={{ __html: t('skillsText') }} />
            </Text>
          </Box>
        </Box>
        <Box flex={['0 100%', '0 100%', '0 40%']}>
          <Lottie options={defaultOptions} />
        </Box>
      </AnimatedBox>
    </Box>
  )
}

export default withTranslation('home')(Skills)
