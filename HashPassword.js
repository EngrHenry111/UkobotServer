import bcrypt from "bcryptjs"

const run = async () => {
  const hash = await bcrypt.hash("ukobot", 10)
  console.log("Hashed password:", hash)
}

run()