export default function FetchData(query: string) {
  return new Promise<{title: string; id: string; year: string}[]>(async (resolve) => {
    return resolve([
      {title: 'a', id: 'a', year: '1990'},
      {title: 'ab', id: 'ab', year: '1991'},
      {title: 'cb', id: 'cb', year: '1992'},
    ].filter(it => it.title.includes(query)));
  })
}
