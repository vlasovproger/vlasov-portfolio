export interface IWork {
  category: string;
  client: string;
  descrption: string;
  github: string;
  id: number;
  imageDefault: string;
  imageWebp: string;
  title: string;
  subtitle: string;
  website: string;
  stack: string[];
}

export interface IPortfolioService {
  getWork(id: number): Promise<IWork>;
  getWorks(): Promise<Array<IWork>>;
}
