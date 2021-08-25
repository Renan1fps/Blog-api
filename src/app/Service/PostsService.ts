import { getCustomRepository } from "typeorm";
import { IPost } from "../Contracts/IPost";
import { PostRepository } from "../Database/repository/PostRepository";
import { Posts } from "../Models/Post";

class PostService {

  public static async getAllPosts(): Promise<Posts[] | undefined> {
    let response;
   
    try{

      const postEntity = getCustomRepository(PostRepository)
      response = await postEntity.find()

    }catch(err){
      console.error(err)
    }

    return response;
    
  }

  public static async createPost({title, body}: IPost): Promise<Posts | undefined> {
    let response;

    console.log(`O resultado é esse ${body} e ${title}`)

    const postDTO = {
      str_title: title,
      str_body: body
    }

    try{

      const postEntity = getCustomRepository(PostRepository)
      const postToSave = postEntity.create(postDTO)
      response = await postEntity.save(postToSave)

    }catch(err){
      console.error(err)
    }


    return response
    
  }
}



export { PostService }


