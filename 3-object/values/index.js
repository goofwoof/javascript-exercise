export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  return Object.values(source).reduce(function(prev, cur) {
    return parseInt(prev) + parseInt(cur);
  }, 0);
}
