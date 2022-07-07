import { useContext } from "react"
import AlertContext from "../../Context/alert/AlertContext"
import {MdError} from "react-icons/md"

function Alert() {
    const {alert} = useContext(AlertContext)
    return alert !== null && (

        <div className="flex items-start mb-4 space-x-2">
            <MdError className="block text-3xl" />
            <p className="flex-1 text-base font-semibold leading-7 text-white">
                <strong>{alert.msg}</strong>
            </p> 
        </div>
  )
}

export default Alert