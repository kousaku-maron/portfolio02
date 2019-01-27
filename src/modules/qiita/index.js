import axios from 'axios'

const endpoint = 'https://qiita.com/api/v2'

export const getUserItems = () => {
  return axios({
    method: 'get',
    url: endpoint + '/users/kousaku-maron/items',
    params: {
      page: 1,
      per_page: 100,
    }
  })
  .then((result) => {
    const data = result.data
    return { result: data }
  })
  .catch(error => (
    { error }
  ))
}