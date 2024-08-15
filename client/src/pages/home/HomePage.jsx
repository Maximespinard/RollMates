import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  return <p>{t('home_title')}</p>;
};
export default HomePage;
