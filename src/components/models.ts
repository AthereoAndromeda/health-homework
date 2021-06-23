export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Injury {
  title: string;
  imgUrl: string;
  caption: string;
  description: string;
  speed?: number;
}

export interface SourceCard {
  title: string;
  link: string;
  author: string;
}