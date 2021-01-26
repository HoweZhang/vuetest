import {ref,reactive} from 'vue'
export default (function(){
  const myName = ref("")
  const address = ref("")
  const personArr = reactive([])
  const addPerson = () => {
    console.log(myName)
    console.log(personArr)
    personArr.push({
      name:myName.value,
      address:address.value,
    })
  }
  return {myName, address, personArr, addPerson}
})()