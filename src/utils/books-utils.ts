import { BookApiEntity } from '@/lib/types/entities'

export function formatBooksToSideContent(
  books: BookApiEntity[],
): BookApiEntity[] {
  return books.filter((item: BookApiEntity, index: number) => {
    return index < 4
  })
}
