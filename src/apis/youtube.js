import axios from 'axios'

const KEY = "AIzaSyBrujKmYLzpdiDsfHci6Hz1m3lClaCzoTo"

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  },
})