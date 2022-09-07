const ProfileService = ( profileRepo) =>{
    const{create,list,getById,remove,update}= profileRepo()

    const add = async(payload)=>{
        try {
            return await create(payload)
        } catch (err) {
            throw err
        }
    }

    const get = async (payload)=>{
        try {
            return await list(payload)
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

    const erase = async(id)=>{
        try {
            return await remove(id)
        } catch (error) {
            return err.message
        }
    }

    const edit = async (payload) => {
        try {
            return await update(payload);
        } catch (err) {
            return err.message
        }
    }


    return{add,get,getId,erase,edit}
}

module.exports = ProfileService