var label = {
  'day': '天',
  'hour': '小时',
  'minute': '分钟',
  'second': '秒',
  'millisecond': '毫秒'
};

var weightInfoList = [
  {id: 'day', weight: 1e3 * 60 * 60 * 24},
  {id: 'hour', weight: 1e3 * 60 * 60},
  {id: 'minute', weight: 1e3 * 60},
  {id: 'second', weight: 1e3},
  {id: 'millisecond', weight: 1}
];

module.exports = function (time) {
  var info = [];

  weightInfoList.forEach(function (weightInfo) {
    var count = Math.floor(time / weightInfo.weight);

    if (count) {
      info.push(count + label[weightInfo.id]);

      time -= count * weightInfo.weight;
    }
  });

  if (!info.length) {
    info.push(0 + label[weightInfoList[weightInfoList.length - 1].id]);
  }

  return info.join('');
};
