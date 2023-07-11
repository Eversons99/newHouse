import SaveService from "../services/saveUser.js"

class UserController {
    async saveUser(request, response) {
        try {        
            const { name, whatsapp, gifts } = request.body

            if (!name || !whatsapp || !gifts) return response.status(400).json({'message': 'Parametros necessários (nome, whats e gifts) não recebidos'})

            const save = new SaveService()
            const saveUser = await save.recordUser({name, whatsapp, gifts})

            return response.json(saveUser)
            
        } catch (error) {
            console.log(error)
            return response.status(400).json(error)
        }
    }
}

export default UserController