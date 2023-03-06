
import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import ShowMensagem from '../../components/mensagem/ShowMensagem';
import { PROFESSOR, ERROR_PROF } from './professor';
import { listarCidades } from '../../services/CidadeService';
import Mensagem from '../../components/mensagem/Mensagem';
import { incluirProfessor } from '../../services/ProfessorService';

const Incluir = () => {
   const [professor, setProfessor] = useState(PROFESSOR);
   const [error, setError] = useState(ERROR_PROF);

   const [idProfessor, setIdProfessor] = useState(null);
   const [codProfessor, setCodProfessor] = useState(null);
   const [nomeProfessor, setNomeProfessor] = useState(null);
   const [cidade, setCidade] = useState(null);

   const [cidades, setCidades] = useState([]);
   useEffect(() => {
      const getCidades = async () => {
         const resp = await listarCidades();
         console.log(resp);
         setCidades(resp);
      }
      getCidades();
   });

   const onSubmitProfessor = async (e) => {
      e.preventDefault();
      setProfessor({ idProfessor, nomeProfessor, codProfessor, cidade })
      const response = await incluirProfessor(professor);
      console.log(response);                                                                                            
      // if (!idProfessor) {
      //    error.idProfessor = 'O id do professor deve ser informado'
      // }
      // if (!codProfessor) {
      //    error.codProfessor = 'O código do professor deve ser informado'
      // }
      // if (!nomeProfessor) {
      //    error.nomeProfessor = 'O nome do professor deve ser informado'
      // }
      // if (!cidade) {
      //    error.cidade = 'A cidade do professor deve ser informado'
      // }
   }

   return (
      <Fragment>
         <div className="app-content">
            <ShowMensagem
               titulo="Cadastro de Professores"
               iconTitulo={<GiIcons.GiTeacher />}
               iconReturn={<FaIcons.FaListAlt />}
               url="/professor/lista"
               tituloUrl="Página Principal"
            />
            <div className="row justify-content-center">
               <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                  <div className="cadastro">

                     <form className='mt-3'>

                        <div className='row mb-3'>
                           <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                              <div className='form-group'>
                                 <label htmlFor='idProfessor' className='control-label'>Id:</label>
                                 <input
                                    id='idProfessor'
                                    name='idProfessor'
                                    value={idProfessor}
                                    className={error.idProfessor ? "form-control is-invalid" : "form-control"}
                                    onChange={(e) => setIdProfessor(e.target.value)}
                                 />
                                 {
                                    error.idProfessor ? <Mensagem mensagm={error.idProfessor} /> : null
                                 }
                              </div>
                           </div>
                        </div>
                        <div className='row mb-3'>
                           <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                              <div className='form-group'>
                                 <label htmlFor='codProfessor' className='control-label'>Código:</label>
                                 <input
                                    id='codProfessor'
                                    name='codProfessor'
                                    value={codProfessor}
                                    className={error.codProfessor ? "form-control is-invalid" : "form-control"}
                                    onChange={(e) => setCodProfessor(e.target.value)}
                                 />
                                 {
                                    error.codProfessor ? <Mensagem mensagm={error.codProfessor} /> : null
                                 }
                              </div>
                           </div>
                        </div>
                        <div className='row mb-3'>
                           <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                              <div className='form-group'>
                                 <label htmlFor='nomeProfessor' className='control-label'>Nome:</label>
                                 <input
                                    id='nomeProfessor'
                                    name='nomeProfessor'
                                    value={nomeProfessor}
                                    className={error.nomeProfessor ? "form-control is-invalid" : "form-control"}
                                    onChange={(e) => setNomeProfessor(e.target.value)}
                                 />
                                 {
                                    error.nomeProfessor ? <Mensagem mensagm={error.nomeProfessor} /> : null
                                 }
                              </div>
                           </div>
                        </div>

                        <div className='row mb-3'>
                           <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                              <div className='form-group'>
                                 <label htmlFor='idCidade' className='control-label'>Cidade:</label>
                                 <select
                                    id='idCidade'
                                    name='idCidade'
                                    value={cidade}
                                    className={error.cidade ? "form-control is-invalid" : "form-control"}
                                    onChange={(e) => setCidade(e.target.value)}
                                 >
                                    {
                                       cidades.map((cidade) => (<option key={cidade.idCidade} value={cidade.idCidade} >{cidade.nomeCidade}</option>))
                                    }
                                 </select>
                                 {
                                    error.cidade ? <Mensagem mensagm={error.cidade} /> : null
                                 }
                              </div>
                           </div>
                        </div>

                        <div>
                           <button
                              onClick={(e) => onSubmitProfessor(e)}
                              className='btn btn-primary btn-lg'
                           >Salvar</button>
                           <Link
                              to='/professor/lista'
                              type='button'
                              className='btn btn-secondary btn-lg'
                           >Cancelar</Link>
                        </div>




                     </form>


                  </div>

               </div>

            </div>
         </div>
      </Fragment>
   )
}

export default Incluir

