export class Post {
  
    constructor(
    public title: string,
    public description: string,
    public imgPath: string,
    public author: string,
    public datetimeCreated: Date,
    public likes: number,
  ) {
  }

}
