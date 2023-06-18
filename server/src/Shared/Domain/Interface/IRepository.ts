export interface IRepository<T> {
  find(filter: any): Promise<any>;
  findOne(filter: any): Promise<any>;
  save(entity: T): Promise<void>;
  delete(filter: any): Promise<void>;
  update(entity: T): Promise<void>;
}
