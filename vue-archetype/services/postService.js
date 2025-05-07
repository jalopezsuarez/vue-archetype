export async function postNewEntry({ title, body }) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body, userId: 1 })
  });

  if (!response.ok) {
    throw new Error('Error en la solicitud');
  }

  return await response.json();
}

export async function getAllPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Error al obtener los posts');
  }
  return await response.json();
}

export async function getWelcomePost() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  if (!response.ok) {
    throw new Error('Error al obtener el mensaje de bienvenida');
  }
  return await response.json();
}
