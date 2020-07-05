export interface Post {
    id?: number,
    title?: string,
    body?: string
}

export interface PostRepository {
    getPostById(id: number): Promise<Post>
    getPosts(): Promise<Post[]>
}


function getInstance(repo: PostRepository) {
    return {
        getPostById(id: number): Promise<Post> {
            return repo.getPostById(id)
        },
        getPosts(): Promise<Post[]> {
            return repo.getPosts()
        }
    }
}


export default getInstance