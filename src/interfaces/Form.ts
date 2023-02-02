export interface SubmitFormProps<T> {
  initialValue?: T
  onSubmitForm: (value: T) => void
  isEdit?: boolean
}
