import { FallingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div>
            <FallingLines
            color="#4fa94d"
            width="50"
            visible={true}
            ariaLabel='falling-lines-loading'/>
    </div>
  )
}

export default Loader