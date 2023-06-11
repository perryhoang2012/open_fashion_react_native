export interface PaginationParams {
  limit: number;
  page: number;
  totalRows: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface ListParams {
  page?: number;
  limit?: number;
  filter?: string;
  sort?: 'asc' | 'desc';

  [key: string]: any;
}
export interface Timestamp {
  createdAt: string;
  updatedAt: string;
}
