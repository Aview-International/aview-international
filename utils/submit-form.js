function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export function submitForm(name, data) {
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

export const uploadResume = (data) => {
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: data,
  })
    .then(() => {
      console.log('Success');
    })
    .catch((error) => {
      console.log(error);
    });
};
