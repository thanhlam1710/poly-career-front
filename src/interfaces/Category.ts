export interface Category {
  id: number
  parent_id: string
  name: string
  created_at: string
}

export interface CategoryState {
  listCategories: Category[]
}
