const Repository = require("./core/repository");

class DataInteraction {
  constructor(table) {
    this.repository = null;
  }

  async initialize(prisma, model) {
    this.repository = new Repository(prisma, model);
  }
  /**
   *
   * @param data
   * @returns {Promise<document>}
   */
  async create(data) {
    return this.repository.create(data);
  }

  /**
   *
   * @param whereClause
   * @param data
   * @returns {Promise<Query|*>}
   */
  async update(whereClause, data) {
    return this.repository.update({ ...whereClause }, data);
  }

  /**
   *
   * @param whereClause
   * @param data
   * @returns {Promise<Query|*>}
   */
  async updateMany(whereClause, data) {
    return this.repository.updateMany({ ...whereClause }, data);
  }

  /**
   *
   * @param whereClause
   * @param projection
   * @returns {Promise<Promise<*>|Query|void|Promise<*|undefined>>}
   */
  async findUnique(whereClause, projection = null) {
    return this.repository.findUnique({ ...whereClause }, projection);
  }

  /**
   *
   * @param whereClause
   * @param projection
   * @returns {Promise<Promise<*>|Query|void|Promise<*|undefined>>}
   */
  async findMany(whereClause) {
    return this.repository.findMany(whereClause);
  }

  /**
   *
   * @param whereClause
   * @param data
   * @returns {Promise<Query|*>}
   */
  async upsert(whereClause, update, create) {
    return this.repository.upsert({ ...whereClause }, update, create);
  }
  /**
   *
   * @param whereClause
   * @param projection
   * @returns {Promise<Promise<*>|Query|void|Promise<*|undefined>>}
   */
  async findManyWithRelationship(
    whereClause,
    projection = {},
    orderBy = {},
    select = {}
  ) {
    return this.repository.findManyWithRelationship(
      { ...whereClause },
      projection,
      orderBy
    );
  }
}

module.exports = {
  DataInteraction,
};
