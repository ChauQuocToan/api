import axiosInstance from "./axiosInstance.js";

const categoryApi={
    getAll(){
        const url =`/categories`
        return axiosInstance.get(url)
    },
    get(id){
        const url=`categories/${id}`
        return axiosInstance.get(url)
    },
    add(data){
        const url =`categories`
        return axiosInstance.post(url,data)
    },
    update(data){
        const url=`categories/${data.id}`
        return axiosInstance.patch(url,data)
    },
    del(id){
        const url=`categories/${id}`
        return axiosInstance.delete(url)
    },
    restore(id){
        const url =`categories.restore/${id}`
        return axiosInstance.get(url)
    },
    remove(id){
        const url =`categories.remove/${id}`
        return axiosInstance.delete(url)
    }
}
export default categoryApi;