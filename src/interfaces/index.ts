export interface IWork {
  id: number;
  imageDefault: string;
  imageWebp: string;
  title: string;
  subtitle: string;
}

export interface IWorkDetails extends IWork {
  category: string;
  client: string;
  descrption: string;
  github: string;
  website: string;
  stack: string[];
}

export interface IPortfolioService {
  getWork(id: number): Promise<IWorkDetails>;
  getWorks(): Promise<Array<IWorkDetails>>;
}
