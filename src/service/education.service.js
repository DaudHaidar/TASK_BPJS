const EducationService = ( educationRepo) =>{
    const{create,list,getById,remove,update}= educationRepo()

    const add = async(payload,id)=>{
        try {
            return await create(payload,id)
        } catch (err) {
            throw err
        }
    }

    const get = async ()=>{
        try {
            return await list()
        } catch (error) {
            
        }
    }

    const getId = async (id) => {
        try {
            return  await getById(id)
        } catch (err) {
            return err.message
        }
    }

    const erase = async(id,profileCode)=>{
        try {
            return await remove(id,profileCode)
        } catch (error) {
            return err.message
        }
    }

    const edit = async (payload,id,profileCode) => {
        try {
            return await update(payload,id,profileCode);
        } catch (err) {
            return err.message
        }
    }


    return{add,get,getId,erase,edit}
}

module.exports = EducationService
