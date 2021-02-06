import React from 'react'
import { Flex, Box } from '@rebass/grid'
import { Text, FontWeight } from 'styled-typography'
import { withTranslation } from '../../../../i18n'
import AnimatedBox from '../../AnimationBox'
import { LogoBox } from '../../../styles/pages/Home'
import Image from 'next/image'
import companies from '../../../helpers/companies'

const CompanySection: React.FC<any> = ({
  t,
  namespacesRequired = ['home']
}) => {
  return (
    <Box
      id="company"
      css={css`
        background-image: url(/static/assets/images/wave-2.svg);
        background-size: cover;
        background-position: top center;
        background-repeat: repeat-x;
      `}
      px={[4, 4, 6]}
      width={1}
      pb={3}
    >
      <AnimatedBox width={1} justifyContent="center" alignItems="center">
        <Text fontWeight={FontWeight.SemiBold} displayLevel={4}>
          {t('companyTitle')}
        </Text>
        <Flex width={1} pt={3} justifyContent="space-between">
          {companies.map(c => (
            <LogoBox
              as="a"
              flex="1 0 auto"
              href={c.link}
              textAlign="center"
              target="_blank"
              css={{ position: 'relative' }}
              key={c.name}
            >
              <Image
                alt={c.name}
                src={`/static/assets/logos/${c.name}.svg`}
                width={200}
                height={200}
              />
            </LogoBox>
          ))}
        </Flex>
      </AnimatedBox>
    </Box>
  )
}

export default withTranslation('home')(CompanySection)
