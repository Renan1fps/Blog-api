import { EntityRepository, Repository } from "typeorm";
import { Posts } from "../../Models/Post";

@EntityRepository(Posts)
class PostRepository extends Repository<Posts>{

  public async findByName(name: string): Promise<Posts | undefined> {
     
    const findName = this.findOne({
      where:{
        str_title: name
      }
    })

    return
  }

}

export { PostRepository }