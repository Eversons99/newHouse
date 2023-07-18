import OwnerService from "../services/saveOwner.js"

class OwnerController {
    async saveOwner(request, response) {
        try {        
            const { name, whatsapp, gifts } = request.body

            if (!name || !whatsapp || !gifts) return response.status(400).json({'message': 'Parametros necessários (nome, whats e gifts) não recebidos'})

            const save = new OwnerService()
            const saveUser = await save.assignOwner({name, whatsapp, gifts})

            return response.json(saveUser)
            
        } catch (error) {
            return response.status(400).json(error)
        }
    }
}

export default OwnerController