// Implement cartTotal here. See README.md for the specification.
export function cartTotal(items, options) {
  if (items.length === 0) return 0

  let subtotal = 0
  for (const { price, qty } of items) {
    if (price < 0 || !Number.isInteger(qty) || qty <= 0) {
      throw new RangeError('Invalid price or quantity')
    }
    subtotal += price * qty
  }

  const { vatRate, freeShipFrom, shipFee } = options
  const shipping = subtotal >= freeShipFrom ? 0 : shipFee
  return Math.round(subtotal + subtotal * vatRate + shipping)
}
