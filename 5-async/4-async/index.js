async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  let result = await fetch(url, {
    headers: { 'content-type': 'application/json' },
    method: 'Get'
  }).then(response => response.json());
  document.writeln(result.name);

  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
