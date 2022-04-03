import api from './api';
import { TIMEOUT, BAD_REQUEST, CONFLICT } from './apiConstants';

const twitterEndpoint = '';

const create_tweet = async (text) => {
    try {
        const new_twit = {
            'text'  : text
        }
        const endpoint = twitterEndpoint + '/create_tweet';
        const response = await api.post(endpoint, new_twit, {
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        return { status : response.status, data : response.data }
    } catch(err){
        if(err.response){
            if(err.response.status === BAD_REQUEST){
                return { status : err.response.status }
            } else if (err.response.status === CONFLICT){
                return { status : err.response.status }
            }
            return { status : err.response.status }
        } else {
            return { status : TIMEOUT }
        }
    }
}

const delete_tweet = async (id) => {
    try {
      const endpoint = `${twitterEndpoint}?id=${id}`;
      const response = await api.delete(endpoint, { headers: { 'Content-Type': 'application/json'}});
      return response.data;
    } catch(err) {
      if(err.response) {
        return { status : err.response.status };
      } else {
        return { status : TIMEOUT }
      }
    }
  }

const like_tweet = async (id) => {
    try {
        const endpoint = `${twitterEndpoint}?id=${id}`;
        const response = await api.post(endpoint, {}, {
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        return { status : response.status, data : response.data }
    } catch(err){
        if(err.response){
            if(err.response.status === BAD_REQUEST){
                return { status : err.response.status }
            } else if (err.response.status === CONFLICT){
                return { status : err.response.status }
            }
            return { status : err.response.status }
        } else {
            return { status : TIMEOUT }
        }
    }
}

const unlike_tweet = async (id) => {
    try {
      const endpoint = `${twitterEndpoint}/unlike_tweet?id=${id}`;
      const response = await api.delete(endpoint, { headers: { 'Content-Type': 'application/json'}});
      return response.data;
    } catch(err) {
      if(err.response) {
        return { status : err.response.status };
      } else {
        return { status : TIMEOUT }
      }
    }
  }

const retweet = async (id) => {
    try {
        const endpoint = twitterEndpoint + '/retweet?id=' + id;
        const response = await api.post(endpoint, {}, {
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        return { status : response.status, data : response.data }
    } catch(err){
        if(err.response){
            if(err.response.status === BAD_REQUEST){
                return { status : err.response.status }
            } else if (err.response.status === CONFLICT){
                return { status : err.response.status }
            }
            return { status : err.response.status }
        } else {
            return { status : TIMEOUT }
        }
    }
}

const unretweet = async (id) => {
    try {
      const endpoint = `${twitterEndpoint}/unretweet?id=${id}`;
      const response = await api.delete(endpoint, { headers: { 'Content-Type': 'application/json'}});
      return response.data;
    } catch(err) {
      if(err.response) {
        return { status : err.response.status };
      } else {
        return { status : TIMEOUT }
      }
    }
  }

const unfollow = async (user) => {
    try {
        const endpoint = `${twitterEndpoint}/unfollow?id=${user}`;
        const response = await api.delete(endpoint, { headers: { 'Content-Type': 'application/json'}});
        return response.data;
    } catch(err) {
        if(err.response) {
        return { status : err.response.status };
        } else {
        return { status : TIMEOUT }
        }
    }
}

const follow = async (user) => {
    try {
        const endpoint = twitterEndpoint + '/follow?user=' + user;
        const response = await api.post(endpoint, {}, {
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        return { status : response.status, data : response.data }
    } catch(err){
        if(err.response){
            if(err.response.status === BAD_REQUEST){
                return { status : err.response.status }
            } else if (err.response.status === CONFLICT){
                return { status : err.response.status }
            }
            return { status : err.response.status }
        } else {
            return { status : TIMEOUT }
        }
    }
}

const see_likes = async(userId) => {
  try {
    const endpoint = `${twitterEndpoint}?user=${userId}`;
    const response = await api.get(endpoint);
    return response.data;
  } catch(err) {
    if(err.response) {
      return { status : err.response.status };
    } else {
      return { status : TIMEOUT }
    }
  }
}

const search = async(query) => {
    try {
      const endpoint = `${twitterEndpoint}/search?query=${query}`;
      const response = await api.get(endpoint);
      return response.data;
    } catch(err) {
      if(err.response) {
        return { status : err.response.status };
      } else {
        return { status : TIMEOUT }
      }
    }
}
  

const TwitterService = {
    create_tweet,
    delete_tweet,
    like_tweet,
    unlike_tweet,
    see_likes,
    unretweet,
    retweet,
    unfollow,
    follow,
    search
}

export default TwitterService;
