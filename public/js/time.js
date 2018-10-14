function newtime(sthr, stmin, endhr,endmin)
{
  var arr = [sthr*60 + stmin, endhr *60 + endmin];
  return arr;
}

function inBetween(a, b) {
    var new_arr = [];
    //var a_sttot = a[0]* 60 + a[1];
    //var b_sttot = b[0]* 60 + b[1];
    a_sttot = a[0];
    a_endtot = a[1];
    b_sttot = b[0];
    b_endtot = b[1];
    
    //var a_endtot = a[2] * 60 + a[3];
    //var b_endtot = b[2] * 60 + b[3];
    
    //if time a and this do not merge
    if (b_endtot < a_sttot || a_endtot < b_sttot)
    {
      new_arr.push(a);
      new_arr.push(b);
    }
    
    else if (b_sttot >= a_sttot && b_endtot <= a_endtot)
    {
     new_arr.push(a);
    }
    
    else if (b_sttot <= a_sttot && b_endtot >= a_endtot)
    {
      new_arr.push(b)
    }
    
    else if (b_sttot < a_sttot && b_endtot <= a_endtot)
    {
      new_arr.push([b_sttot, a_endtot]);
    }
    
    else if (b_sttot >= a_sttot && b_endtot > a_endtot)
    {
      new_arr.push([a_sttot, b_endtot]);
    }
    return new_arr;
  }

  function merge_schedule(obj)
  {
      var result = [];
      for (var key in obj)
      {
        if(key == "id")
        {
          result[key] = obj[key];
        }
        else
        {
          result[key] = merge_time(obj[key]);
        }
      }
      return result;
  }
  
  function merge_time(array)
  {
    //if startmin == other startmin, return b else return a
    var arr = array.sort();
    var tmp = inBetween(arr[0], arr[1]);
    var index;
    
    for (index = 2; index < arr.length; index++)
    {
      var at_tmp = inBetween(tmp[tmp.length - 1],arr[index]);
      if (at_tmp.length != 2 && at_tmp[0][0] == tmp[tmp.length-1][0])
      {
        tmp[tmp.length-1] = at_tmp[0];
      }
      tmp = tmp.concat(at_tmp);
    }
    
    for (var i = 0; i < tmp.length; i++)
    {
      for (var j = 0; j < tmp.length; j++)
      {
        if (tmp[i][0] == tmp[j][0])
        {
          if (tmp[i][1] >= tmp[j][1])
          {
            tmp[j] = tmp[i];
          }
          else
          {
            tmp[i] = tmp[j];
          }
        }
      }
    }
    var new_set = new Set(tmp);
    f_result = [...new_set];
    
    return f_result;
  }
  
    function remaining_schedule(obj)
  {
    var result = [];
    for (var key in obj)
    {
      if(key == "id")
      {
        result[key] = obj[key];
      }
      else
      {
        result[key] = reamin_time(obj[key]);
      }
    }
    return result;
  }
  
  function remain_time(array){
    var start_range = 420;
    var end_range = 1440;
    var nxt;
    var rm = [];
    
    for(var i = 0; i < array.length; i++){
      nxt = array[i][0];
      rm.push([start_range,nxt]);
      start_range = array[i][1];
    }
    rm.push([start_range,end_range]);
    return rm;
  }