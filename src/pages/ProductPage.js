import { useState } from 'react';
// components
import Page from '../components/Page';
import Charter from '../components/Charter';
import ProductsGallery from '../components/ProductsGallery';
// ----------------------------------------------------------------------

export default function ProductPage() {
  const [charterText, setCharterText] = useState('BODY_COLLECTION');
  const handleChange = (e) => {
    setCharterText(e);
  };
  return (
    <Page title="About Page" sx={{ position: 'relative' }}>
      <Charter text={charterText} />
      <ProductsGallery handleChange={handleChange} filterText={charterText} />
    </Page>
  );
}
