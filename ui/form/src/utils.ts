export const fieldToLabelMap = {
  name: 'Введите имя',
  phone: '+7',
  telegram: '@telegram',
}

export const getFieldDataByLanguage = (content, field: string): string =>
  content?.filter(({ label }) => fieldToLabelMap[field].includes(label))[0]?.label
