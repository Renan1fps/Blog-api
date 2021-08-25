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

  public async deletePost(request: Request, response: Response): Promise<Response>{
    const { id } = request.params

    const post = await PostService.deletePost(id)
    if(post === 'anime not found'){
      return response.status(400).json(post)
    }else{
      return response.status(200).json('ok')
    }
  }
}

export { PostController }
