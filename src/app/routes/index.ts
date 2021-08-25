import { Router } from "express";
import '../Database/index'
import { postsRouter } from "./posts.routes";


const routes = Router();

routes.get('/teste', (request, response)=>{
  response.json({message: "App running! "})
});

routes.use(postsRouter)

export { routes }