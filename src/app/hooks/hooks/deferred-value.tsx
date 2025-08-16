import {Suspense, use, useDeferredValue, useState} from 'react';
import FetchData from "@/app/hooks/fetch-data";

function SearchResults({ query }: {query: string}) {
  if (query === '') {
    return null;
  }
  const albums = use(FetchData(query));

  if (albums.length === 0) {
    return <p>No matches for <i>{'\"'}{query}{'\"'}</i></p>;
  }
  return (
    <ul>
      {albums.map(album => (
        <li key={album.id}>
          {album.title} ({album.year})
        </li>
      ))}
    </ul>
  );
}

export default function DeferredValue() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;

  return (
    <>
      在新内容加载期间显示旧内容。
      <label>
        Search albums:
        <input className={'border'} value={query} onChange={e => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchResults query={query} />
        <div style={{
          opacity: isStale ? 0.5 : 1,
          transition: isStale ? 'opacity 1s 1s linear' : 'opacity 1s 1s linear'
        }}>
          <SearchResults query={query} />
        </div>
      </Suspense>
    </>
  );
}
