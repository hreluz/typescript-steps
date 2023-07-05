"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let Force;
    (function (Force) {
        Force[Force["flash"] = 5] = "flash";
        Force[Force["superman"] = 100] = "superman";
        Force[Force["batman"] = 1] = "batman";
        Force[Force["acuaman"] = 0] = "acuaman";
    })(Force || (Force = {}));
    const fuerzaFlash = Force.flash;
    const fuerzaSuperman = Force.superman;
    const fuerzaBatman = Force.batman;
    const fuerzaAcuaman = Force.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app.js.map