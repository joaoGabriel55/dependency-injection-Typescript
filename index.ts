import business, { Post, PostRepository } from './business'
import framework from './framework'

const repo: PostRepository = {
    async getPostById(id: number): Promise<Post> {
        const data: any = await <any>framework.getById(id)
        const post: Post = { id: data.id, title: data.title, body: data.body }
        return post
    },
    async getPosts(): Promise<Post[]> {
        const data: [] = await <any>framework.getAll()
        return data.map((elem: { id: number; title: string; body: string }) => {
            const post: Post = { id: elem.id, title: elem.title, body: elem.body }
            return post
        })
    }
}

async function getPosts() {
    const post: Post = await business(repo).getPostById(3)
    console.log(post)
    const posts: Post[] = await business(repo).getPosts()
    console.log(posts)
    return post
}
getPosts()
