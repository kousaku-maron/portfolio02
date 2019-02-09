import axios from 'axios'

const endpoint = 'https://api.github.com'

export const getUsers = () => {
  return axios({
    method: 'get',
    url: `${endpoint}/users/kousaku-maron`,
  })
  .then((result) => {
    const data = result.data
    return { result: data }
  })
  .catch(error => (
    { error }
  ))
}

export const getRepos = () => {
  return axios({
    method: 'get',
    url: `${endpoint}/users/kousaku-maron/repos`,
  })
  .then((result) => {
    const data = result.data
    return { result: data }
  })
  .catch(error => (
    { error }
  ))
}

export const getEvents = () => {
  return axios({
    method: 'get',
    url: `${endpoint}/users/kousaku-maron/events`,
  })
  .then((result) => {
    const data = result.data
    return { result: data }
  })
  .catch(error => (
    { error }
  ))
}
