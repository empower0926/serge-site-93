// hooks
import useLocales from '../hooks/useLocales';
// components
import Page from '../components/Page';
import Charter from '../components/Charter';
import FaqBox from '../components/Faq/FaqBox';
import About from '../components/About';
// ----------------------------------------------------------------------

export default function AboutPage() {
  const { translate } = useLocales();
  return (
    <Page title="About Page" sx={{ position: 'relative' }}>
      <Charter text={'ABOUT'} />
      <About />
    </Page>
  );
}
