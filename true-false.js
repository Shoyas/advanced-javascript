// 0 returns false.
// -, + with any number without 0 that returns true.
// undefined value returns false.
// null returns false.
// NaN returns false.
// " ", "0", [] returns true.


const name = NaN;

if(name){
    console.log("Condition is true");
}
else{
    console.log("condition is false");
}