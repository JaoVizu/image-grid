import axios from 'axios'

const CLIENT_ID = 'zDVxaBDoHIhKzILAMsywY0NjXphqt51rZYThmcLKhzY'

const api = axios.create({
  baseURL: `https://api.unsplash.com/`
})

const randomPhotoEndPoint = '/photos/random'

export const getRandomPhotos = async query => {
  try{
    const res = await api.get(randomPhotoEndPoint ,{
      params: {
        client_id: CLIENT_ID,
        count: 15,
        query: query
      }
    })
    return res.data
  }catch(err) {
    console.log(err)
  }
}