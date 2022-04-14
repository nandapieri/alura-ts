export function inspecionar(
    target: any, 
    propertyKey: string,
    descriptor: PropertyDescriptor 
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`--- Metodo ${propertyKey}`);
        console.log(`------ Parametros ${JSON.stringify(args)}`);
        const retorno = metodoOriginal.apply(this, args);
        console.log(`------ Retorno ${JSON.stringify(retorno)}`);
        return retorno;
    }
    return descriptor;
}

/**
 * quando o decorator nao tem parametros nao precisa do wrapper.
 * na chamada nao precisa dos parenteses pq já é a funcao que queremos executar
 * boa pratica é manter o wrapper para ter um padrao de decorator com parenteses 
 * e nao confundir se precisa ou nao usar parenteses
 */