import dbUser from "../database/models/userSchema.js"

class SaveService {

    async recordUser({name, whatsapp, gifts}) {
        try {
            await dbUser.create({name, whatsapp, gifts})
            return {"message": "Dados registrados com sucesso"}
        } catch (error) {
            console.log(error)
            return {
                "message": "Erro ao registrar dados no banco"
            }
        }
    }   
}

export default SaveService