import React from 'react'
import { Flex, Box } from '@rebass/grid'
import { Heading } from 'styled-typography'
import { withTranslation } from '../../../../i18n'
import Image from 'next/image'
import skills from '../../../helpers/skills'
import AnimatedBox from '../../AnimationBox'
import { LogoBox } from '../../../styles/pages/Home'

type Props = {
  t: (key: string) => string
  namespacesRequired?: [string]
}

const Skills: React.FC<Props> = ({ t, namespacesRequired = ['home'] }) => {
  return (
    <AnimatedBox
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      px={[4, 4, 6]}
      pb={7}
      id="skills"
      width={1}
      textAlign="center"
    >
      <Heading level={2}>{t('skillsTitle')}</Heading>
      <Flex width={1} pt={5} justifyContent="space-between">
        {skills.map(s => (
          <LogoBox css={{ position: 'relative' }} key={s}>
            <Image
              alt={s}
              src={`/static/assets/logos/${s}.png`}
              width={128}
              height={128}
            />
          </LogoBox>
        ))}
      </Flex>
    </AnimatedBox>
  )
}

export default withTranslation('home')(Skills)
