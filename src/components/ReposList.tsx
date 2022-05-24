import { useEffect, useState } from "react";
import { ReposItem } from "./ReposItem";

export interface Repositorio {
    name: string,
    description: string,
}

export function ReposList(){
    const [repositorios, setRepositorios]= useState<Repositorio[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/deividbreda/repos')
            .then(response => response.json())
            .then(data => setRepositorios(data))
    }, [repositorios])

    return(
        <>
        <h1>Lista de Repositórios</h1>
        {repositorios.map(repositorio => {
            return <ReposItem key={repositorio.name} repositorio={repositorio} />
        })}
        </>
    );
}