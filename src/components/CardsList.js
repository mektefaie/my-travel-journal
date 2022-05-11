import Card from './Card';
import data from '../shared/data';

export default function CardsList() {
  const cards = data.map(item => {
    return <Card item={item} />;
  });
  return { cards };
}
