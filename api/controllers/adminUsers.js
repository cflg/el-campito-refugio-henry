const { usersModel } = require("../models");

const adminUsers = async (req, res) => {
  try {
    const filtro = JSON.parse(req.query.filter);
    let users = [];
    const ordenar = JSON.parse(req.query.sort);
    let orden = ordenar[1].toLowerCase() || "asc";

    if (filtro) {
      if (filtro.name) {
        const { name } = filtro;
        console.log(filtro);
        users = await usersModel
          .find({ name: new RegExp(name, "i"), isDelete: false })
          .sort({ name: orden });
      } else {
        users = await usersModel.find(filtro).sort({ name: orden });
      }
    } else {
      users = await usersModel.find({}).sort({ name: orden });
    }
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send({ error: "Error en la solicitud" });
  }
};

const adminUsersId = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const users = await usersModel.findById({ _id: id });
    res.json(users);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminUpdateUser = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const user = await usersModel.findByIdAndUpdate({ _id: id }, body, {
      returnOriginal: false,
    });

    res.json({ data: user });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminCreateUser = async (req, res) => {
  try {
    const { body } = req;
    const user = await usersModel.create(body);
    res.status(200).send({ data: user });
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminDeleteUser = async (req, res) => {
  try {
    // const { body } = req;
    const id = req.params.id;

    const userDelete = await usersModel.findByIdAndUpdate(
      { _id: id },
      { isDelete: true },
      {
        returnOriginal: false,
      }
    );

    res.status(201).send(userDelete);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

module.exports = {
  adminCreateUser,
  adminDeleteUser,
  adminUsers,
  adminUpdateUser,
  adminUsersId,
};
