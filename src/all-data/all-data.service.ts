import { Inject, Injectable } from '@nestjs/common';
import { Blogger } from 'src/blogger/blogger.entity';
import { Post } from 'src/posts/post.entity';
import { Video } from 'src/videos/videos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AllDataService {
  constructor(
    @Inject('VIDEO_REPOSITORY')
    private readonly videoRepository: Repository<Video>,
    @Inject('BLOGGER_REPOSITORY') 
    private readonly bloggerRepository: Repository<Blogger>,
    @Inject('POST_REPOSITORY')
    private readonly postRepository: Repository<Post>,
  ) {}

  deleteAllData(): void {
    this.videoRepository.delete({})
    this.postRepository.delete({})
    this.bloggerRepository.delete({})
  }
  
}