
// eslint-disable-next-line react/prop-types
const Menu = ({data}) => {

  const handleClick = (e) => {
   let element =  document.getElementById(e.target.id).parentElement;
   let ulElements = element.getElementsByTagName("ul");
   
   Array.from(ulElements).forEach(ulElement => {
    if(ulElement?.classList.contains("collapsed"))
      ulElement?.classList.remove("collapsed");
    else
      ulElement?.classList.add("collapsed");
   });
  };

  return (
    <>
      {data?.map((item) =>
       <ul className="ulItem" key={item.Id}> 
          <li>
           <h3 onClick={handleClick} className="menuItem" id={item.Id}>{item.Title}</h3> 
           <Menu data={item.Child}/>
          </li>
      </ul>
      )}              
    
    </>
  )
}

export default Menu