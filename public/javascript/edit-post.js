// LANDLORD CAN DELETE (RESOLVE) MAINTENANCE REQUEST

const idPost = document.querySelector('input[name="post-id"]').value;

async function deletePost() {
  await fetch(`/api/post/${idPost}`, {
    method: 'DELETE'
  });
  if (response.ok) {
    document.location.replace('/home');
  } else {
    alert(response.statusText);
  }
};

