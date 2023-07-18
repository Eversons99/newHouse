import ListService from "../services/list.js"
class ListController {
    async list(request, response) {
        try {
            const listService = new ListService()
            const getList = await listService.list()

            return response.json(getList)
        } catch (error) {
            return request.status(400).json(error)
        }
    }

    async addList(request, response) {
       try {   
            const allItems = request.body

            if (Object.keys(allItems).length == 0) return response.status(400).json({ "message": "Inform a Array with all items" })
            
            const addService = new ListService()
            const addItem = await addService.createItem(allItems)
 
            return response.json(addItem)

       } catch (error) {
            return response.status(400).json(error)
       } 
    }
}

export default ListController