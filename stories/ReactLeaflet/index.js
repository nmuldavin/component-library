import L from 'leaflet';
import { storiesOf } from '@kadira/storybook';
import 'leaflet/dist/leaflet.css';
import basicMapDemo from './basicMap.story';

/**
 * pointing to hosted leaflet images for now,
 * we probably won't use defaults in real projects anyways
 */
L.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/';

export default () => storiesOf('React Leaflet', module)
  .addWithInfo(...basicMapDemo);
