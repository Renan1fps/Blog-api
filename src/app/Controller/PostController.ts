import { Request, Response } from "express";
import { PostService } from "../Service/PostsService";


class PostController {

  public async getAllPosts(request: Request, response: Response): Promise<Response> {

    const posts = await PostService.getAllPosts()
    return response.status(200).json(posts)
  }

  public async createPost(request: Request, response: Response): Promise<Response> {
    const { title, body } = request.body

    const post = await PostService.createPost({title, body})
    return response.status(200).json(post)
  }
}

export { PostController }
