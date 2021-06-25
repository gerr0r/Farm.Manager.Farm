const db = require('../db/models')
const { hasRights } = require('../helpers/auth')

module.exports = {
    Query: {
        async getFarms(parent, args, context) {
            const { token } = context
            const adminId = hasRights(token, 'admin')
            if (!adminId) throw new Error('Unauthorized')
            return await db.Farm.findAll({ where: { ownerId: adminId } })
        },
        async getFarmFields(parent, args, context) {
            const { token } = context
            const adminId = hasRights(token, 'admin')
            if (!adminId) throw new Error('Unauthorized')

            // check ownership of requested farm
            const farm = await db.Farm.findOne({ 
                where: {
                    id: args.farmId,
                    ownerId: adminId
                }
            })

            if (!farm) throw new Error('Farm not found/Unathorized')

            return await db.Field.findAll({ where: {farmId: args.farmId}})
        }
    },

    Farm: {
        async __resolveReference(farm) {
            return await db.Farm.findByPk(farm.id)
        }
    },

    Field: {
        async __resolveReference(field) {
            return await db.Field.findByPk(field.id)
        }
    }
}