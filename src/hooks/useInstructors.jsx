import { useEffect } from "react"
import { useState } from "react"

const useInstructors = () => {
    const [instructors, setInstructors] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://summer-camp-photography-server-greatattack1971-gmailcom.vercel.app/instructors')
        .then(res => res.json())
        .then(data => {
            setInstructors(data);
            setLoading(false);
        })
    },[])
    return [instructors, loading]


}

export default useInstructors;