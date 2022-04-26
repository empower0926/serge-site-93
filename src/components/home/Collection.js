import { Box } from '@mui/material';
import CollectionSlide from './CollectionSlide';
import HomeConfig from './HomeConfig';

export default function Collection() {
  return (
    <Box sx={{mt: '120px'}}>
      {HomeConfig.map((e, index) => (
        <CollectionSlide key={index} title={e.title} bgColor={e.bgColor} src={e.src}/>
      ))}
    </Box>
  );
}
