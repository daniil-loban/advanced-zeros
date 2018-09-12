// ADVANCED
module.exports = function getZerosCount(number, base) {

    var isPrime = function(num) {
      for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
      return num !== 1;
    }

    var maxSimpleMultiplier = function(number){
        //var all = [1];
        var div = 2;
        while(number > 1){
            if (isPrime(div) || isPrime(Math.floor(number/div) )){
                while( number % div == 0){
                    number = number / div;
                    //all.push(div)
                }
            }    
            div++;
        }
        //console.log(all);    
        return --div;    
    }

    var getFactorialZerosCount = function(number, base){
       var result = 0
       for (var i = 1; i <= number; i++) {
           var temp = i
           while (temp % base == 0){ 
                 temp /= base
                 result++
           }
       }
       return result
    }

    maxMul = maxSimpleMultiplier(base)
    //console.log("maxMul", maxMul)
    return getFactorialZerosCount(number, maxMul);

};


