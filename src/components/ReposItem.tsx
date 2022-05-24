import { Repositorio } from "./ReposList";

interface RepositorioItem {
    repositorio: Repositorio
}

export function ReposItem(props: RepositorioItem){
    return(
        <>
        <h1>{props.repositorio.name}</h1>
        <p>{props.repositorio.description}</p>
        </>
    );
}