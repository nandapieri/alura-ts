export function logarTempoDeExecucao(emSegundos: boolean = false) { //verificar tempo de execução da funcao decorada
    return function(
        target: any, //metodo estatico = constructor | metodo não estatico = prototype
        propertyKey: string, //metodo que foi decorado
        descriptor: PropertyDescriptor //referencia para o metodo original
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: Array<any>) {
            let divisor = emSegundos? 1000: 1;
            let unidade = emSegundos? "segundos" : "milisegundos";
            const t1 = performance.now();
            //chamar o metodo original
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2-t1)/divisor} ${unidade}`);
            retorno;
        }
        return descriptor;
    }
}