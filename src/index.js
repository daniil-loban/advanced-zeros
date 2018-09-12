module.exports = function getZerosCount(number, base) {

    var isPrime = function(num) {
      for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
      return num !== 1;
    }

    var getPrimaryMultipliers = function(baseNumber){
        var allPrimes = {};
        var divider = 2;
        var tempNumber = baseNumber;
        while(divider <= baseNumber){
            if (isPrime(divider)){
                while ( tempNumber % divider == 0){
                    tempNumber = tempNumber / divider;
                    if (allPrimes[divider]){
                       allPrimes[divider]+=1;
                    } else {
                       allPrimes[divider]=1;     
                    }
                }   
            } 
            divider++;
            tempNumber = baseNumber;    
        }
        return allPrimes;    
    }

    primaryMultipliers = getPrimaryMultipliers(base);
    var maxPow         = 26; // up it if need a bigger power
    var sumPowParts    = {}
    var results        = []

    for (i in primaryMultipliers){
        sumPowParts[i]=0
        for (var j = 1; j <= maxPow; j++) {
            sumPowParts[i] += Math.floor(number / Math.pow(i, j));
        }
        results.push(sumPowParts[i]/primaryMultipliers[i]);
    }

    var result = Math.trunc(Math.min.apply(Math, results));

    return result;
};

