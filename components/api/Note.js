import global from '../../global';

const SendFile = async formData => {
  return fetch(`${global.Base_URL}/post-note`, {
    method: 'POST',
    body: formData,
  })
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(returnObj => {
      if (returnObj.error) {
        console.log(returnObj.error);
      } else {
        return returnObj;
      }
    })
    .catch();
};

export {SendFile};
