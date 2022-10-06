import express from "express"
import { v4 as uuidv4 } from "uuid"

import { createUser, getUser } from "../controllers/users"

const router = express.Router()

let users = []

// All routes in here are stating with /users
router.get("/", getUser)

router.post("/", createUser)

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

  const user = users.find((user) => user.id === id)

  if (firstName) user.firstName = firstName

  if (lastName) user.lastName = lastName

  if (age) user.age = age

  res.send(`User with the id ${id} has been updated.`)
})

export default router
