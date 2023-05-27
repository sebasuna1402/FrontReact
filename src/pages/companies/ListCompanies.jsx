import { useQuery } from "react-query"
import { getCompanies } from "../../services/CompanyService"

const ListCompanies = () => {

  const { data, isLoading, isError } = useQuery('companies', getCompanies);

  if(isLoading)
    return <div>Loading...</div>

  if(isError)
    return <div>Error</div>


  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default ListCompanies