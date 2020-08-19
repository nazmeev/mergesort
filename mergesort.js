let mergeSort = function(array){ 
  
    function merge(left, right){
      let result = []
      let il = 0
      let ir = 0    
      while (il < left.length && ir < right.length){
        if (left[il] < right[ir]){
          result.push(left[il++])
        } else {
          result.push(right[ir++])
        }
      }
      return result.concat(left.slice(il)).concat(right.slice(ir))
    }  
    function merge_sort(items){
      if (items.length < 2){
        return items
      }     
      let middle = Math.floor(items.length / 2)
      let left = items.slice(0, middle)
      let right = items.slice(middle)
      return merge(merge_sort(left), merge_sort(right))
    }  
    return merge_sort(array)
  }