import { getCustomRepository } from "typeorm";
import { IPost } from "../Contracts/IPost";
import { PostRepository } from "../Database/repository/PostRepository";
import { Posts } from "../Models/Post";
import moment from "moment";

class PostService {

  public static async getAllPosts(): Promise<Posts[] | undefined> {
    let response;
   
    try{

      const postEntity = getCustomRepository(PostRepository)
      response = await postEntity.find({where:{ deleted_at: null}})

    }catch(err){
      console.error(err)
    }

    return response;
    
  }

  public static async createPost({title, body}: IPost): Promise<Posts | undefined> {
    let response;

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

  public static async deletePost(id: string): Promise<Posts | string | undefined>{
    let response;

    try{

      const postEntity = getCustomRepository(PostRepository)
      const existPost = await postEntity.findOne({where:{deleted_at: null, id: id}})
      if(existPost){
        existPost.deleted_at = moment().toDate()
        response = await postEntity.save(existPost)
      }else{
        return 'anime not found'
      }

    }catch (err) {
      console.error(err)
    }
     return response
  }
}



export { PostService }


