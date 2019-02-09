import firebase from 'firebase/app'
import 'firebase/firestore'
import config from './config'

firebase.initializeApp(config)

const db = firebase.firestore()

export const getQiitaArticles = () => {
  return db.collection('qiita_articles').get()
  .then(snapshot => {
    const result = []
    snapshot.forEach(doc => {
      result.push(doc.data())
    })
    return { result }
  })
  .catch(error => {
    console.log(error)
    return { error }
  })
}
