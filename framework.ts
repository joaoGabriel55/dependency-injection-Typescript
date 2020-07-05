import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

export default {
    async getById<T>(id: number): Promise<T> {
        try {
            const data = await (await axios.get(BASE_URL)).data
            return data.filter((elem: { id: number }) => elem.id == id)[0]
        } catch (e) {
            return null
        }

    },
    async getAll<T extends T[]>(): Promise<[]> {
        try {
            const data = await (await axios.get(BASE_URL)).data
            return data
        } catch (e) {
            return []
        }
    }
}