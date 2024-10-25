const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
//marvel_heros.push(dc_heros)
//console.log(marvel_heros); 
const allHeros=marvel_heros.concat(dc_heros)
console.log(marvel_heros);
const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros);
const real_another_array=another_array.flat(Infinity) 
console.log(real_another_array); 
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"hitesh"}))//intersreting thing for the interview