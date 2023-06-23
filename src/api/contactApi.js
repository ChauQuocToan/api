import axiosInstance from "./axiosInstance.js";

const contactyApi = {
    getAll() {
        const url = `/contacts`
        return axiosInstance.get(url)
    },
    get(id) {
        const url = `contacts/${id}`
        return axiosInstance.get(url)
    },
    add(data) {
        const url = `contacts`
        return axiosInstance.post(url, data)
    },
    update(data) {
        const url = `contacts/${data.id}`
        return axiosInstance.patch(url, data)
    },
    del(id) {
        const url = `contacts/${id}`
        return axiosInstance.delete(url)
    },
    restore(id) {
        const url = `contacts.restore/${id}`
        return axiosInstance.get(url)
    },
    remove(id) {
        const url = `contacts.remove/${id}`
        return axiosInstance.delete(url)
    }
}
export default contactyApi;