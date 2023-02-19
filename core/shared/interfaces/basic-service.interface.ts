export interface IBasicService<T> {
  findById(id: number): Promise<T>
  findAll(): Promise<T[]>
}