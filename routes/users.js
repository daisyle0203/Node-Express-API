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

router.patch("/:id", (req, res) => {
  const { id } = req.params
  const { firstName, lastName, age } = req.body

  const updatedUser = users.find((user) => user.id === id)

  if (firstName) {
    updatedUser.firstName = firstName
  }

  if (lastName) {
    updatedUser.lastName = lastName
  }

  if (age) {
    updatedUser.age = age
  }
})

export default router
