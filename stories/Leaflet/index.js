import L from 'leaflet';
import { storiesOf } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';
import 'leaflet/dist/leaflet.css';
import basicMapDemo from './basicMap.story';
import geoJSONDemo from './geoJSON.story';

/**
 * pointing to hosted leaflet images for now,
 * we probably won't use defaults in real projects anyways
 */
L.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/';

export default () => storiesOf('React Leaflet', module)
  .addDecorator(withKnobs)
  .addWithInfo(...basicMapDemo)
  .addWithInfo(...geoJSONDemo);
