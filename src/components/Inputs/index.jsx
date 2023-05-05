import { Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { changeEmail } from "../../store/user/userSlice";

const InputEmail = () => {
    const { email } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const value = e.target.value;
        dispatch(changeEmail(value))
    }
    
    return ( 
        <Input placeholder='Email adress' value={email} onChange={handleChange}/>
     );
}
 
export default InputEmail;