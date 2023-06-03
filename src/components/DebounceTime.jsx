

const DebounceTime = () => {

  let debounceTime = null;

  const callBackFunction = (value) => {

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  const handleChange = (event) => {
    
    console.log(event.target.value);

    clearTimeout(debounceTime);

    debounceTime = setTimeout(() => {
        callBackFunction(event.target.value)        
    }, 500);   

  }

  return (
    <>
     <input onKeyDown={handleChange} type="text" name="" id="" />
    </>
  )
}

export default DebounceTime