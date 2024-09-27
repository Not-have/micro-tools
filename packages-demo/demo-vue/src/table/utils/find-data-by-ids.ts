export default function findDataByIds(items, idArray) {
  return items.filter(item => idArray.includes(item.id));
}
