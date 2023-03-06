import http from '../config/Banco';


export const listarCidades = async () => {
    return(
        http({
            method:'get',
            url:'/cidade/lista',
        }).then((response)=>{
             return response.data;
        })
    )
}