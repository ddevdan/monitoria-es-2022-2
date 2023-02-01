import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const method = req.method;
  const id = req.query;

  if (method == "PUT") {
    const updatedId = id.id;
    const contactData = req.body;

    const updatedUser = await prisma.contact.update({
      where: {
        id: Number(updatedId),
      },
      data: contactData,
    });

    res.status(200).json(updatedUser);
  }

  if (method == "DELETE") {
    const deleteId = id.id;

    const deletedContact = await prisma.contact.delete({
      where: {
        id: Number(deleteId),
      },
    });

    res.status(200).json(deletedContact);
  }
}
