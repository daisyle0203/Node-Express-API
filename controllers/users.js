export const createUser = (req, res) => {
  const user = req.body

  const userWithId = { ...user, id: uuidv4() }

  users.push(userWithId)

  res.send(`User with the name ${user.firstName} added to the database.`)
}

export const getUser = (req, res) => {
  res.send(users)
}
