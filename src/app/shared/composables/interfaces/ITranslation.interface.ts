
export interface ITranslation {
  translate({ key, options }:{ key: string, options?: Record<string, unknown>}): string,
  setNewTranslationLocale( newLocale: string ): void
}