import dbList from "../database/models/listSchema.js"

class ListService {
    async list() {
        try {
            const items = await dbList.find({})
            return items

        } catch (error) {
            return {'message': `Occurred an erro to check the database. Error: ${error}`}
        }
    }

    async createItem(items){

        try {
            await dbList.insertMany(items)
        } catch (error) {
            return {'message': `Occurred an erro to add items on database. Error: ${error}`}
        }
    }
}

export default ListService