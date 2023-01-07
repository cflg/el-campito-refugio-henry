const { json } = require("express");
const { usersModel } = require("../models");

const adminUsers = async (req, res) => {
  try {

    // const users = await usersModel.find({isDelete: false}) 
    const users = await usersModel.find({}) 

    const userMapping = users.map((user, index) => {
      const { image: img, ...data } = user.toObject();

      return {
        ...data,
        image: { src: img || "", index },
      };
    });
    res.status(201).send(userMapping);
  } catch (e) {
    res.status(404).send({ error: e });
  }
};

const adminUsersId = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const users = await usersModel.findById({ _id: id });

    const { image: img, ...data } = users.toObject();

    res.json({
      ...data,
      image: {
        src: img,
        index: 0,
      },
    });
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

    const id = req.params.id; 
    const { query: { filter} } = req; 

    if (!filter) {
      let userDelete = await usersModel.findByIdAndUpdate({ _id: id }, { isDelete: true },
        {
          returnOriginal: false,
        });

      res.status(201).send(userDelete);

    } else {

      let { id } = JSON.parse(filter); 
      let listDeleteUsers = []; 

      for(let user of id){
        let usersDeletes = await usersModel.findByIdAndUpdate({ _id: user }, { isDelete: true },
          {
            returnOriginal: false,
          });
        listDeleteUsers.push(usersDeletes)
      }

      res.status(200).send(listDeleteUsers)
    }
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
