export default {
  evenOrOdd: state => state.count % 2 === 0 ? '偶數' : '奇數',
  bigNumber: state => state.count >10 ? '大' : '小',
}
