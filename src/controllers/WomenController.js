const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const women = await connection("women").select("*");
    return response.json(women);
  },

  async create(request, response) {
    const { name, description, image, linkedin } = request.body;
    const id = crypto.randomBytes(4).toString("HEX");

    await connection("women").insert({
      id,
      name,
      description,
      image,
      linkedin
    });

    return response.json({ id });
  },

  async update(request, response) {
    const { id } = request.params;
    const { name, description, image, linkedin } = request.body;
    await connection("women")
      .where("id", "=", id)
      .update({
        id,
        name,
        description,
        image,
        linkedin
      });

    const womenUpdated = await connection("women").where("id", "=", id);

    return response.json(womenUpdated);
  },

  async delete(request, response) {
    const { id } = request.params;

    await connection("women")
      .where("id", id)
      .delete();

    return response.status(204).send();
  }
};
