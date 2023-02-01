import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const method = req.method;

  if (method == "POST") {
    const { name, lastName, phone, avatar } = req.body;
    const contactCreated = await prisma.contact.create({
      data: {
        name: name,
        lastName: lastName,
        phone: phone,
        avatar: avatar,
      },
    });
    res.status(201).json(contactCreated);
  }

  if (method == "GET") {
    const allContacts = await prisma.contact.findMany();

    res.status(201).json(allContacts);
  }
}
