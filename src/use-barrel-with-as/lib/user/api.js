export const fetchUsers = async () => {
  const response = await fetch('/api/users')
  return response.json()
}

export const fetchUser = async (userId) => {
  const response = await fetch(`/api/users/${userId}`)
  return response.json()
}
