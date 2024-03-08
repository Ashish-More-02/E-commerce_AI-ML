import { LookingSimilar } from '@algolia/recommend-react';
import recommend from '@algolia/recommend';

const recommendClient = recommend('9GCJP6SEBP', '4608cbcc0ba990a4ab0673acf5a439de');
const indexName = 'YOUR_INDEX_NAME';

function LookingSimilarItems({ item }) {
  return (
    <pre>
      <code>{JSON.stringify(item)}</code>
    </pre>
  );
}

function App({ currentObjectID }) {
  // ...

  return (
    <LookingSimilar
      recommendClient={recommendClient}
      indexName={indexName}
      objectIDs={[currentObjectID]}
      itemComponent={LookingSimilarItem}
    />
  );
}

export default LookingSimilarItems ;