import dbList from "../database/models/listSchema.js"

class OwnerService {

    async assignOwner({name, whatsapp, gifts}) {
        try {
            for (const gift of gifts) {
                await dbList.updateOne({'name': gift}, {
                    "status": 'unavailable',
                    "whatsapp": whatsapp,
                    "owner": name
                })
                console.log(gift +'Item Atualizado')
            }
            return {"message": "Dados registrados com sucesso"}

        } catch (error) {
            console.log(error)
            return {
                "message": "Erro ao registrar dados no banco"
            }
        }
    }   
}

export default OwnerService