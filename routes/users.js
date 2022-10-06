import express from "express"
import { v4 as uuidv4 } from "uuid"

const router = express.Router()

let users = []

// All routes in here are stating with /users
router.get("/", (req, res) => {
  console.log(users)

  res.send(users)
})

router.post("/", (req, res) => {
  const user = req.body

  // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

  const userWithId = { ...user, id: uuidv4() }

  users.push(userWithId)

  res.send(`User with the name ${user.firstName} added to the database.`)
})

router.get("/:id", (req, res) => {
  const { id } = req.params

  const foundUser = users.find((user) => user.id === id)

  res.send(foundUser)
})

router.delete("/:id", (req, res) => {
  const { id } = req.params

  users = users.filter((user) => user.id !== id)

  res.send(`User with the id ${id} deleted from the database.`)
})

export default router
