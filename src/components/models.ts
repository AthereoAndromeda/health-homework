interface InjuryExample {
    title: string;
    description: string;
    link: string;
}

export interface Injury {
  title: string;
  imgUrl: string;
  caption: string;
  description: string;
  examples?: InjuryExample[];
  speed?: number;
}

export interface SourceCard {
  title: string;
  link: string;
  author: string;
}