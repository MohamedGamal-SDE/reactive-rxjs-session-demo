export function generateRandomNumber(): number {
  const randomMultiplier = Math.floor(Math.random() * 1000) + 1;
  const timestamp = Date.now();
  const randomFactor = Math.floor(Math.random() * 100) + 1;
  const randomNumber = timestamp * randomMultiplier + randomFactor;
  return randomNumber;
}
