const SkillService = ( skillRepo) =>{
    const{create,list,getById,remove,update}= skillRepo()

    const add = async(id, payload)=>{
        try {
            return await create(id, payload)
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

    const erase = async(profileCode, id)=>{
        try {
            return await remove(profileCode, id)
        } catch (error) {
            return err.message
        }
    }

    const edit = async (id, payload) => {
        try {
            return await update(id, payload);
        } catch (err) {
            return err.message
        }
    }


    return{add,get,getId,erase,edit}
}

module.exports = SkillService