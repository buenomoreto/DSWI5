import http from '../config/Banco';


export const listarProfessores = async () => {
    return(
        http({
            method:'get',
            url:'/professor/lista',
        }).then((response)=>{
             return response.data;
        })
    )
}

export const incluirProfessor = async (professor) => {
    return (
        http({
            method: 'post',
            url: '/professor/incluir',
            data: professor
        }).then((response) => {
            return response.data;
        })
    )
}