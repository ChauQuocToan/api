import axiosInstance from "./axiosInstance.js";

const BrandApi = {
    getAll() {
        const url = `/brands`
        return axiosInstance.get(url)
    },
    get(id) {
        const url = `brands/${id}`
        return axiosInstance.get(url)
    },
    add(data) {
        const url = `brands`
        return axiosInstance.post(url, data)
    },
    update(data) {
        const url = `brands/${data.id}`
        return axiosInstance.patch(url, data)
    },
    del(id) {
        const url = `brands/${id}`
        return axiosInstance.delete(url)
    },
    restore(id) {
        const url = `brands.restore/${id}`
        return axiosInstance.get(url)
    },
    remove(id) {
        const url = `brands.remove/${id}`
        return axiosInstance.delete(url)
    }
}
export default BrandApi;