export function domInjector (seletor: string ) {
    return function(target: any, propertyKey: string) {
        //cacheando o elemento html para não precisar pega-lo todas as vezes que acessa alguma propriedade
        let elemento: HTMLInputElement | null = null;
        const getter = function() {
            if(!elemento)
                elemento = <HTMLInputElement>document.querySelector(seletor);
            return elemento
        }
        //redefinir a propriedade propertyKey para ter um getter e poder pegar a instancia do obj e alterar o valor nessa propriedade
        Object.defineProperty(target, propertyKey, { get: getter });
    }
}

/**
 * Esse decorator não tem descriptor porque é um decorator de atributo!!
 */