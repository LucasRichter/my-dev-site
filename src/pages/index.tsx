import React from 'react'
import { withTranslation } from '../../i18n'
import Layout from '../components/Layout'
import Skills from '../components/pages/Home/Skills'
import { NextPage } from 'next'
import Goals from '../components/pages/Home/Goals'
import Contact from '../components/pages/Home/Contact'
import MainSection from '../components/pages/Home/MainSection'
import CompanySection from '../components/pages/Home/CompanySection'

const Home: NextPage<any> = ({ t, namespacesRequired = ['home'] }) => {
  return (
    <Layout title="Lucas Richter - Developer" description={t('subtitle')}>
      <MainSection />
      <Skills />
      <CompanySection />
      <Goals />
      <Contact />
    </Layout>
  )
}

export default withTranslation('home')(Home)
