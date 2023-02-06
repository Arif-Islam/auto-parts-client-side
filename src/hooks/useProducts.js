import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner";


const useProducts = () => {
    // const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('https://auto-parts-backend.vercel.app/parts').then(res => res.json()));

    // if(isLoading){
    //     return <Spinner></Spinner>
    // }
    const [parts, setParts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://auto-parts-backend.vercel.app/parts')
            .then(res => res.json())
            .then(data => setParts(data))
        setIsLoading(false);
    }, [parts]);


    return [parts, isLoading];
}

export default useProducts;