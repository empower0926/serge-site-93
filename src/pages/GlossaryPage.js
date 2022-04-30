// hooks
import useLocales from '../hooks/useLocales';
// components
import Page from '../components/Page';
import Charter from '../components/Charter';
import About from '../components/About';
import Glossary from '../components/Glossary';
// ----------------------------------------------------------------------

export default function GlossaryPage() {
  const { translate } = useLocales();
  return (
    <Page title="Glossary Page" sx={{ position: 'relative' }}>
      <Charter text={'GLOSSARY'} />
      <Glossary />
    </Page>
  );
}
