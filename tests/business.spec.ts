import { expect } from 'chai';

import business, { Post, PostRepository } from '../business'
import framework from '../framework'

/**
 * # Dependency injection #
 * 
 * I can use framework that retrieve data from API or 
 * create another, like, fake framework with mock data.
 */
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

describe('First test',
    () => {
        it('should return Post ID 3', async () => {
            const post: Post = await business(repo).getPostById(3)
            const result = post.id
            expect(result).to.equal(3);
        });
    });

describe('Second test',
    () => {
        it('should return Posts array with length > 0', async () => {
            const posts: Post[] = await business(repo).getPosts()
            const result = posts.length
            expect(result).to.gt(0);
        });
    });