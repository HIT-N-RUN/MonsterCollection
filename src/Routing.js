import { Main, MonsterCollection } from './page';

const RouteList = [
  { path: '/', value: 'main', text: 'MAIN', Component: Main},
  { path: '/monster-collection', value: 'monster-collection', text: 'MONSTER-COLLECTION-CLASSIFIER', Component: MonsterCollection}
]

export default RouteList;