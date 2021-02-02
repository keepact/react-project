export const convertDate = (date: number, config: object) => {
  const dateWithMilliseconds = date * 1000;
  const dateObject: Date = new Date(dateWithMilliseconds);
  const dateString = dateObject.toLocaleDateString('en-US', config);

  return dateString;
}

export const { format: formatPrice } = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});