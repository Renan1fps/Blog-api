
import { Router } from "express";
import { PostController } from "../Controller/PostController";

const postsRouter = Router()
const postsController = new PostController()

postsRouter.get('/posts', postsController.getAllPosts)
postsRouter.post('/posts', postsController.createPost)

export { postsRouter }

