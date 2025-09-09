const input = document.querySelector('#input')


function reverseValue(str) {
  return str.split("").reverse().join("")
}

function valid() {
  const value = input.value
  const reverse = reverseValue(value)
  
  if (value === reverse) {
    alert("PALINDROME")
  }else{
    alert("Not Correct!")
  }
}