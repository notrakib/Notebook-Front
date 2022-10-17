import global from '../../global';

const SendNote = async note => {
  return fetch(`${global.Base_URL}/post-note`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({note}),
  })
    .then(res => {
      return res.json();
    })
    .then(returnObj => {
      if (returnObj.error) {
      } else {
        return returnObj;
      }
    })
    .catch();
};

const FetchNote = async note => {
  return fetch(`${global.Base_URL}/get-note`)
    .then(res => {
      return res.json();
    })
    .then(returnObj => {
      if (returnObj.error) {
      } else {
        return returnObj;
      }
    })
    .catch();
};

export {SendNote, FetchNote};
