import { useEffect } from "react";

interface FunctionProps{
    func: () => void
}

export default function Function({func}: FunctionProps) {
    useEffect(() => {func()})   
    return <></>
}