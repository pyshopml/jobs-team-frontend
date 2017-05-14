function fetchVacanciesFromServer(url: string) {
  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  };

  return fetch(url, options)
}

export async function fetchVacancies(pageNum: number, done: (data) => any, error: (msg: string) => any) {
  try {
    const url = `${config.apiUrl}vacancies/?page=${pageNum}`;
    const res = await fetchVacanciesFromServer(url);

    if (res.ok) {
      let data = await res.json();
      done(data);
    }

    error(res.statusText);
    
  } catch (e) {
    error(e.message);
  }
}
