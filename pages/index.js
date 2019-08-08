import React from 'react'
import PropTypes from 'prop-types'

import { i18n, Link, withTranslation } from '../i18n'
import { Plural } from 'react-i18next/icu.macro';

import Header from '../components/Header'
import Footer from '../components/Footer'

const itemsCount = 5;

const Homepage = ({ t }) => (
  <React.Fragment>
    <main>
      <Header title={t('h1')} />
      <Plural
        i18nKey="itemCount"
        count={itemsCount}
        $0="There is no item."
        one="There is # item."
        other="There are # items."
      />
      <div>
        <button
          type='button'
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
        >
          {t('change-locale')}
        </button>
        <Link href='/second-page'>
          <button
            type='button'
          >
            {t('to-second-page')}
          </button>
        </Link>
      </div>
    </main>
    <Footer />
  </React.Fragment>
)

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Homepage)
