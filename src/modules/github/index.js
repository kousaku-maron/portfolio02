import axios from 'axios'

const endpoint = 'https://api.github.com'

export const getUsers = () => {
  return axios({
    method: 'get',
    url: endpoint + '/users/kousaku-maron',
  })
  .then((result) => {
    const data = result.data
    return { result: data }
  })
  .catch(error => (
    { error }
  ))
}