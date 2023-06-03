const DebounceTime = () => {

  const handleChange = (event) =>{
    console.log(event.target.value);
  }

  return (
    <>
     <input onKeyDown={handleChange} type="text" name="" id="" />
    </>
  )
}

export default DebounceTime