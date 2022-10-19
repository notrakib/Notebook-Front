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

const PostShareNote = async note => {
  return fetch(`${global.Base_URL}/post-share-note`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
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

const GetShareNote = async () => {
  return fetch(`${global.Base_URL}/get-share-note`)
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

const PostComment = async comment => {
  return fetch(`${global.Base_URL}/post-comment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
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

export {SendNote, FetchNote, PostShareNote, GetShareNote, PostComment};
