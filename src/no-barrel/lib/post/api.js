export const fetchPosts = async () => {
  const response = await fetch('/api/posts')
  return response.json()
}

export const fetchPost = async (postId) => {
  const response = await fetch(`/api/posts/${userId}`)
  return response.json()
}
