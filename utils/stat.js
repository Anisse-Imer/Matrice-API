function softmax(arr) {
    return arr.map(function(value,index) { 
      return Math.exp(value) / arr.map( function(y /*value*/){ return Math.exp(y) } ).reduce( function(a,b){ return a+b })
    })
}

// Get posts - return primary tags to work on
module.exports.primaryTags = async (posts) =>{
  var tagCounts = posts.reduce((acc, document) => {
    document.tags.forEach((tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});
  var values = Object.values(tagCounts);
  var probValue = softmax(values);
  var index = 0;
  tagStats = {}
  for( tag in tagCounts){
    tagStats[tag] = probValue[index];
    index++;
  }
  const categoriesArray = Object.entries(tagStats);
  categoriesArray.sort((a, b) => b[1] - a[1]);
  const top5Categories = categoriesArray.slice(0, 5);
  const total = top5Categories.reduce((acc, category) => acc + category[1], 0);
  const proportions = top5Categories.map(category => [category[0], Math.round((category[1] / total) * 100 / 10) * 10]);
  return proportions;
}