export const waiting = () => {
  return new Promise((resolve, reject) => setTimeout(resolve, 3000))
}