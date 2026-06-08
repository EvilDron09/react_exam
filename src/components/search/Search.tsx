import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

export const Search = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const page = Number(searchParams.get('page'))||1
    const totalPage = 500;

    const handlerPage = (newPage:number)=>{
        setSearchParams({page:String(newPage)})
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
        })
    }, [page]);

    return (
        <div>
            <button onClick={() => handlerPage(Math.max(page -1,1) )} disabled={page === 1}>Back</button>
            <h3>{page}</h3>
            <button onClick={() => handlerPage(Math.min(page +1 ,totalPage))} disabled={page === totalPage}>Forward</button>
        </div>
    );
};
