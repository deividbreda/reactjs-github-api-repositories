import { useEffect, useState } from "react";
import { ReposItem } from "./ReposItem";
import logo from '../images/logo.png';
import perfil from '../images/perfil.jpg';

export interface Repositorio {
    name: string,
    description: string,
    html_url: string,
    language: string,
    visibility: string,
}

export function ReposList(){
    const [repositorios, setRepositorios]= useState<Repositorio[]>([]);
    const [pesquisa, setPesquisa]= useState('');

    const lowerPesquisa = pesquisa.toLowerCase();
    const filtroRepositorios = repositorios.filter((repositorio) => repositorio.name.toLowerCase().includes(lowerPesquisa))

    useEffect(() => {
        fetch('https://api.github.com/users/deividbreda/repos')
            .then(response => response.json())
            .then(data => setRepositorios(data))
    }, [repositorios])

    return( 
        <>
        <div id="cabecalho">
            <div className="containerApp">
                <div className="flexCentralizado containerFlexCentralizado">
                    <img src={logo} alt="" className="logo" />
                </div>
            </div>      
        </div>

        <div id="home">
            <div className="containerApp">
                <div className="col">
                    <div className="col col-2-perfil">
                        <div className="allItemHome">
                            <img className="fotoPerfil" src={perfil} alt="" />
                            <div className="itemConteudoTituloPerfil">
                                <h1 className="tituloPerfil"> Deivid Breda </h1>
                                <p className="subtituloPerfil"> deividbreda </p>
                            </div>
                            <p className="descricaoPerfil"> Aplicação desenvolvida em ReactJs utilizando Github API </p>
                            <a 
                            href="https://github.com/deividbreda/reactjs-github-api-repositories" 
                            target="_blank" className="followPerfil"> Show this Repository </a>
                        </div>
                    </div>

                    <div className="col col-2-repositorios">
                        <div className="allItemHome">
                            <div className="itemConteudoMargin">
                                <div className="itemConteudoInput">                               
                                    <input className="inputPesquisa" placeholder="Pesquisar repositório..."
                                    type="text" value={pesquisa} onChange={(e)=> setPesquisa(e.target.value)}/>                            
                                </div>

                                <h1 className="tituloRespositorios">Lista de Repositórios</h1>
                            </div>
                            
                            <div className="col">
                                {filtroRepositorios.map(repositorio => {
                                    return <ReposItem key={repositorio.name} repositorio={repositorio} />
                                })}
                            </div>                          
                        </div>
                    </div>
                </div>              
            </div>
        </div>
        </>
    );
}