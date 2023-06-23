import axiosInstance from "./axiosInstance";
const productApi={
    getAll(params){
        const url = '/products'
        return axiosInstance.get(url,{params})
    },
    get(id){
        const url = `products/${id}`
        return axiosInstance.get(url)
    },
    add(data){
        const url = `products`
        return axiosInstance.post(url,data)
    },
    getBySlug(slug){
        const url=`products.showBySlug/${slug}`
        return axiosInstance.get(url)
    },
    update(data){
        const url = `products/${data.id}`
        return axiosInstance.patch(url,data)
    },
    del(id){
        const url = `products/${id}`
        return axiosInstance.delete(url)
    },
    restore(id){
        const url = `products.restore/${id}`
        return axiosInstance.get(url)
    },

    trash(params){
        const url = `products.trash`
        return axiosInstance.get(url,{params})
    },
    remove(id){
        const url = `products.remove/${id}`
        return axiosInstance.delete(url)
    }
}
export default productApi;