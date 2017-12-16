import axios from 'axios'

//extract data here and .then all the calls
//rename axiosCalls to utils and index.js to api.js

const extractData = (response) => response.data

export function getProfile(id) {
  return axios.get('http://localhost:3000/profiles/edit/' + id).then(extractData);
}

export function getProfileByName(name) {
  return axios.get('http://localhost:3000/profiles/find/' + name).then(extractData);
}

export function addProfile(user) {
  const data = new FormData();

  for (const key in user) {
    data.append(key, user[key])
  }
  return axios.post('http://localhost:3000/profiles/add/', data).then(extractData);
}

export function getProfiles() {
  return axios.get('http://localhost:3000/profiles/').then(extractData);
}

export function updateProfile(id, user) {
  const data = new FormData();

  for (const key in user) {
    data.append(key, user[key])
  }

  return axios.post('http://localhost:3000/profiles/update/' + id, data).then(extractData);
}

export function deleteProfile(id) {
  return axios.get('http://localhost:3000/profiles/delete/' + id);
}
