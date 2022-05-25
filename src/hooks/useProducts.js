import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner";


const useProducts = () => {
    // const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('http://localhost:5000/parts').then(res => res.json()));

    // if(isLoading){
    //     return <Spinner></Spinner>
    // }
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [parts]);


    return [parts];
}

export default useProducts;