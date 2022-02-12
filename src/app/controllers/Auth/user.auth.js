const HttpStatusCode = require("http-status-codes/index");
// import Model from the models directory
const user_model = require("../../models/user.model");

const get_user = async (request, reply) => {
  // run a model
  try {
    const return_data = await user_model.findMany(request.body);
    reply.send({data:return_data});
  } catch (e) {
    return reply.code(500).send({ error: e });
  }
};

module.exports = {
  get_user,
};
