const WorkingExperienceService = ( workingExperienceRepo) =>{
    const{create,list,getById,update}= workingExperienceRepo()

    const add = async(id,payload)=>{
        try {
            return await create(id,payload)
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

    const edit = async (payload,profileCode) => {
        try {
            return await update(payload,profileCode);
        } catch (err) {
            return err.message
        }
    }


    return{add,get,getId,edit}
}

module.exports = WorkingExperienceService
