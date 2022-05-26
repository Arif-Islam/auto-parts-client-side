import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner";


const useProducts = () => {
    // const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('https://pure-inlet-40571.herokuapp.com/parts').then(res => res.json()));

    // if(isLoading){
    //     return <Spinner></Spinner>
    // }
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('https://pure-inlet-40571.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [parts]);


    return [parts];
}

export default useProducts;