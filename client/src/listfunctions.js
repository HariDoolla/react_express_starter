import axios from "axios";

export const getList = () => {
  return axios
    .get("localhost:5000/notes", {
      headers: { "Content-Type": "application/json" }
    })
    .then(res => {
      return res.data;
    });
};

export const addToList = term => {
  return axios
    .post(
      "localhost:5000/notes",
      {
        title: term,
        isDone: false
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(function(response) {
      console.log(response);
    });
};

export const deleteItem = term => {
  axios
    .delete('localhost:5000/notes/${term}', {
      headers: { "Content-Type": "application/json" }
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};

export const updateItem = (term, id) => {
  return axios
    .put(
      'localhost:5000/notes/${id}',
      {
        title: term,
        isDone: false
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    )
    .then(function(response) {
      console.log(response);
    });
};
