export const defaultTitle: string = 'Portal de Transparencia de El Salvador'
export const defaultDescription: string = 'Información pública de Presidencia, ministerios, entidades autónomas, gobernaciones departamentales, hospitales y alcaldías.'

export const title = (title: string): string => {
  return [title, defaultTitle].join(' | ')
}
