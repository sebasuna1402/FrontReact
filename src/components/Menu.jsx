import menuJson from '../utils/json/categories.json'

const Menu = () => {
    console.log(menuJson);
  return (
    <pre>{JSON.stringify(menuJson)}</pre>
  )
}

export default Menu