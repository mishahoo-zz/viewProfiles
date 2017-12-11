import axios from 'axios'

//extract data here and .then all the calls
//rename axiosCalls to utils and index.js to api.js

export function getProfile(id) {
  return axios.get('http://localhost:3000/profiles/edit/' + id);
}

export function getProfileByName(name) {
  console.log('inside getProfileByName axios', name)
  return axios.get('http://localhost:3000/profiles/find/' + name);
}

export function addProfile(user) {
  // console.log('in axiosCalls/index.js user', user);
  const data = new FormData();

  for (const key in user) {
    data.append(key, user[key])
  }
  // console.log('in axiosCalls/index.js data', data);
  return axios.post('http://localhost:3000/profiles/add/', data);
}

export function getProfiles() {
  return axios.get('http://localhost:3000/profiles/');
}

export function updateProfile(id, user) {
  const data = new FormData();

  for (const key in user) {
    data.append(key, user[key])
  }

  return axios.post('http://localhost:3000/profiles/update/' + id, data);
}

export function deleteProfile(id) {
  return axios.get('http://localhost:3000/profiles/delete/' + id);
}
