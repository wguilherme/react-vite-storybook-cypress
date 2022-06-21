export function formatDate(date: Date | string){
  return new Date(date).toLocaleString('pt-br', {dateStyle: 'medium',timeStyle: 'medium'})
}