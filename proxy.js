const proxyUrl = 'https://ssolang.duckdns.org/';
fetch(event.request)
  .then(response => response.text())
  .then(data => {
    const proxyResponse = new Response(data, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    });
    return proxyResponse;
  });
