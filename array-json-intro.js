values = [2,5,10,3,50,7];
console.log("Before sorted array", values);
for(let i=0; i<values.length; i++){
    for(let j=i+1; j<values.length; j++) {
        if(values[i] > values[j]) {
            let temp = values[i]
            values[i] = values[j];
            values[j]=temp; 
        }
    }
}
console.log("sorted array values", values)

//json object

let nameObject = [{name: "Anil", id: 2}];
nameObject.forEach((element) => {
    console.log("value", element.name);
});
