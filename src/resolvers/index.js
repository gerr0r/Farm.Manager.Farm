const db = require("../db/models");
const { hasRights } = require("../helpers/auth");

module.exports = {
  Query: {
    async getFarms(parent, args, context) {
      const { token } = context;
      const adminId = hasRights(token, "admin");
      if (!adminId) throw new Error("Unauthorized");
      return await db.Farm.findAll({ where: { ownerId: adminId } });
    },
    async getFarmFields(parent, args, context) {
      const { token } = context;

      // HACK: find a way to check user access for given farm
      if (hasRights(token, "user")) {
        return await db.Field.findAll({ where: { farmId: args.farmId } });
      }

      const adminId = hasRights(token, "admin");
      if (!adminId) throw new Error("Unauthorized");

      // check ownership of requested farm
      const farm = await db.Farm.findOne({
        where: {
          id: args.farmId,
          ownerId: adminId,
        },
      });

      if (!farm) throw new Error("Farm not found/Unathorized");

      return await db.Field.findAll({ where: { farmId: args.farmId } });
    },

    async getFieldCrops(parent, args, context) {
      const { token } = context;

      // HACK: find a way to check user access for given farm
      if (hasRights(token, "user")) {
      return await db.FieldCrop.findAll({ where: { fieldId: args.fieldId } });
      }

      const adminId = hasRights(token, "admin");
      if (!adminId) throw new Error("Unauthorized");

      // todo: check admin rights for this field

      return await db.FieldCrop.findAll({ where: { fieldId: args.fieldId } });
    },

    async getFarmMachines(parent, args, context) {
      const { token } = context;

      // HACK: find a way to check user access for given farm
      if (hasRights(token, "user")) {
        return await db.FarmMachine.findAll({ where: { farmId: args.farmId } });
      }

      const adminId = hasRights(token, "admin");
      if (!adminId) throw new Error("Unauthorized");

      // todo: check admin rights for this farm

      return await db.FarmMachine.findAll({ where: { farmId: args.farmId } });
    },
  },

  Mutation: {
    async addFarm(parent, args, context) {
      const { token } = context;
      const ownerId = hasRights(token, "admin");
      if (!ownerId) throw new Error("Unauthorized");

      const { name, regionId } = args;
      // TODO Protect: get country from regionId and check if account has an assignment

      try {
        const farm = await db.Farm.create({
          name,
          regionId,
          ownerId,
        });
        return farm;
      } catch (error) {
        console.log(error);
        throw new Error(error.message);
      }
    },
  },

  Farm: {
    async __resolveReference(farm) {
      return await db.Farm.findByPk(farm.id);
    },
    async region(farm) {
      return { __typename: "Region", id: farm.regionId };
    },
  },

  Field: {
    async __resolveReference(field) {
      return await db.Field.findByPk(field.id);
    },
  },

  Region: {
    country(region) {
      return { __typename: "Country", code: region.countryId };
    },
  },

  FieldCrop: {
    async __resolveReference(fieldCrop) {
      return await db.FieldCrop.findByPk(fieldCrop.id);
    },
    crop(fieldCrop) {
      return { __typename: "Crop", id: fieldCrop.cropId };
    },
  },

  FarmMachine: {
    async __resolveReference(farmMachine) {
      return await db.FarmMachine.findByPk(farmMachine.id);
    },
    machine(farmMachine) {
      return { __typename: "Machine", id: farmMachine.machineId };
    },
  },
};
