export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const myArray = new Int8Array(length);
  myArray.fill(value, position, position + 1);
  return new DataView(myArray.buffer);
}
