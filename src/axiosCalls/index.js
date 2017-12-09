import axios from 'axios'

export function getProfile(id) {
  return axios.get('http://localhost:3000/profiles/edit/' + id);
}

export function addProfile({ photo, name, description }) {
  return axios.post('http://localhost:3000/profiles/add/', {
    photo: photo,
    name: name,
    description: description
  });
}

export function getProfiles() {
  return axios.get('http://localhost:3000/profiles/');
}

export function updateProfile(id, { photo, name, description }) {
  return axios.post('http://localhost:3000/profiles/update/' + id, {
    photo: photo,
    name: name,
    description: description
  });
}
