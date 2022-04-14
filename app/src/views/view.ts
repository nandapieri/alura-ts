import { inspecionar } from "../decorators/inspecionar.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
    }
    /*os decorators são executados na ordem de cima para baixo. eles são aplicados de dentro para fora.
    nesse caso: logarTempoDeExecucao(inspecionar(update))
    logarTempoDeExecucao recebe update já decorado com inspecionar */
    @logarTempoDeExecucao(true)
    @inspecionar
    public update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}