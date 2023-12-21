// ATTENTION: JSON Server must be running! -> npm install / npm npm start

const postsRESTServerURL = 'http://localhost:3000/';
const postsRoute = 'posts';
const commentsRoute = 'comments';

async function getJson(url) {
  const response = await fetch(url);
  return response.json();
}

async function postJson(url, json) {
  const response = await fetch(url, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(json),
  });
  return response.json();
}

async function deleteResource(url) {
  const response = await fetch(url, {
    method: 'delete',
  });
  return response.json();
}

async function getPosts() {
  return await getJson(postsRESTServerURL + postsRoute);
}

async function getComments() {
  return await getJson(postsRESTServerURL + commentsRoute);
}

async function submitPost(post) {
  return await postJson(postsRESTServerURL + postsRoute, post);
}

async function submitComment(comment) {
  return await postJson(postsRESTServerURL + commentsRoute, comment);
}

async function deleteComment(commentId) {
  return await deleteResource(postsRESTServerURL + commentsRoute + '/' + commentId);
}

export default {getPosts, getComments, submitPost, submitComment, deleteComment};