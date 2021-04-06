import api from './api.js'

const randomPhotoEndPoint = '/photos/random'

export const getRandomPhotos = async query => {
  try{
    const res = await api.get(randomPhotoEndPoint ,{
      params: {
        client_id: process.env.VUE_APP_CLIENT_ID,
        count: 15,
        query: query
      }
    })
    return res.data
  }catch(err) {
    console.log(err)
  }
}