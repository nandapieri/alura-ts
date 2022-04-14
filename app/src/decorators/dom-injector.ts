export function domInjector (seletor: string ) {
    return function(target: any, propertyKey: string) {
        //redefinir a propriedade propertyKey para ter um getter e poder pegar a instancia do obj e alterar o valor nessa propriedade
        const getter = function() {
            return document.querySelector(seletor);
        }
        Object.defineProperty(target, propertyKey, { get: getter });
    }
}

/**
 * Esse decorator não tem descriptor porque é um decorator de atributo!!
 */