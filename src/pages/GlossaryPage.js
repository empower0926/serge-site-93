// hooks
import useLocales from '../hooks/useLocales';
// components
import Page from '../components/Page';
import Charter from '../components/Charter';
import About from '../components/About';
// ----------------------------------------------------------------------

export default function GlossaryPage() {
  const { translate } = useLocales();
  return (
    <Page title="About Page" sx={{ position: 'relative' }}>
      <Charter text={'Glossary'} />
      This is Glossary page!
    </Page>
  );
}
