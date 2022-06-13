export function submitForm(name, data) {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': name,
      ...data,
    }),
  })
    .then(() => console.log('Success'))
    .catch((error) => alert(error));
}

export const submitFile = (data) => {
  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  };
  fetch('/', {
    body: encode(data),
    method: 'POST',
  })
    .then(() => {
      console.log('Success');
    })
    .catch((error) => {
      console.log(error);
    });
};
