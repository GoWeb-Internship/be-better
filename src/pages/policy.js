import React from 'react';
import Seo from 'components/seo';
import Policy from 'components/Pk';
import ButtonUp from 'components/ButtonUp';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Pk = () => {
  const { t, i18n } = useTranslation();
  const seo = t('seo', { returnObjects: true });

  return (
    <div>
      <Seo
        title={seo.title}
        description={seo.description}
        lang={i18n.language}
      />
      <Policy />
      <ButtonUp />
    </div>
  );
};

export default Pk;
