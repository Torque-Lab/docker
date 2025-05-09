import express from "express";
import { PrismaClient } from "C:/Users/profe/OneDrive/Desktop/docker-compose/src/generated/prisma";
const app = express();
app.use(express.json());
const prismaClient = new PrismaClient();
app.get("/me", async (req, res) => {
  const username = req.body.username;
  const user = await prismaClient.user.findFirst({
    where: {
      email: username,
    },
  });
  if (!user) {
    res.json({
      msg: "user not exist",
    });
  }

  res.json({
    msg: "Yours User Credentials",
    id: user?.id,
    username: user?.email,
    name: user?.name,
  });
});
app.get("/health", (req, res) => {
  res.status(200).json({
    msg: "sever is running",
  });
});
app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  console.log(req.body);
  if (!username) {
    return;
  }
  try {
    const user = await prismaClient.user.create({
      data: {
        email: username,
        password: password,
        name: name,
      },
    });
    res.json({
      msg: "user created successfully",
      id: user.id,
    });
  } catch (e) {
    console.log(e);
  }
});

app.listen(3000, () => {
  console.log("sever running on port..3000");
});
