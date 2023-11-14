
//Tariq Batch 510
import * as promptSync from 'prompt-sync';
const prompt=promptSync();
function describe_city(City1: String, Country1: String) 
{
    if (City1=='' && Country1=='')
    {
        console.log('Karachi in Pakistan\n')
    }
    else{
      console.log(City1 + 'is in' +Country1 +'\n')
    }
}

for(;;){
    let City2=prompt("Enter City, 0 to Exit ")
    let Country2=prompt("Enter Country ")
    if(City2=='0'){break}
    describe_city(City2,Country2)
    
}
