class Repository {
  constructor(prisma, model) {
    this.prisma = prisma;
    this.model = model;
    this.prisma.$connect();
  }

  /**
   *
   * @param document
   * @returns {Promise<document>}
   */
  async create(document) {
    return this.model.create({
      data: document,
    });
  }

  /**
   *
   * @param whereClause
   * @param document
   * @returns {Promise<Query|*>}
   */
  async update(whereClause = {}, document) {
    return this.model.update({
      where: whereClause,
      data: document,
    });
  }

  /**
   *
   * @param whereClause
   * @param projection
   * @returns {Promise<Promise<*>|Query|void|Promise<*|undefined>|Promise<*>>}
   */
  async findUnique(whereClause = {}, document = null) {
    return this.model.findUnique({
      where: whereClause,
      include: document,
    });
  }
  /**
   *
   * @param whereClause
   * @param projection
   * @returns {Promise<Promise<*>|Query|void|Promise<*|undefined>|Promise<*>>}
   */
   async findFirst(whereClause = {}, document = null) {
    return this.model.findFirst({
      where: whereClause
    });
  }

  /**
   *
   * @param whereClause
   * @param projection
   * @returns {Promise<*>}
   */
  async findMany(whereClause = {}, projection = {}) {
    return this.model.findMany(whereClause, projection);
  }

  /**
   *
   * @param whereClause
   * @param projection
   * @returns {Promise<*>}
   */
  async delete(whereClause = {}, projection = {}) {
    return this.model.delete(whereClause, projection);
  }

  /**
   *
   * @param whereClause
   * @param document
   * @returns {Promise<Query|*>}
   */
  async upsert(whereClause = {}, update, create) {
    return this.model.upsert({
      where: whereClause,
      update: update,
      create: create,
    });
  }

  /**
   *
   * @param whereClause
   * @param projection
   * @returns {Promise<*>}
   */
  async findManyWithRelationship(
    whereClause = {},
    projection = {},
    orderBy = {}
  ) {
    return this.model.findMany({
      where: whereClause,
      include: projection,
      orderBy: orderBy,
    });
  }
}

module.exports = Repository;
