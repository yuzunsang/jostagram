export interface Post {
  id: number;
  nickname: string;
  text: string;
  heart: number;
  imgUrl: string;
  postImgUrl: string;
  chat: {
    id: number;
    nickname: string;
    imgUrl: string;
    text: string;
  }[];
}
