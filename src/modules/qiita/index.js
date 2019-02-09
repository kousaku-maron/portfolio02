export const createChartData = (data) => {
  return () => {
    const tags = []
    const names = []

    data.map(item => {
      item.tags.map(tag => {
        if(names.indexOf(tag.name) >= 0) {
          tags[names.indexOf(tag.name)].count++;
        }
        else {
          names.push(tag.name)
          tags.push({name: tag.name, count: 1})
        }
      })
    })
    
    return tags
  }
}
