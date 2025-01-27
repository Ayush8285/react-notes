import { useEffect, useState } from "react";

function useCurrencyInfo(currrency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://api.fastforex.io/fetch-all?from=${currrency}&api_key=ad0e63c73e-dddf5b31c7-sqra09`)
        .then((res) => res.json())
        .then((res) => setData(res["results"]))
        
    }, [currrency])

    console.log(data);
    return data
}

export default useCurrencyInfo;
