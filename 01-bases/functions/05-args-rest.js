"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent', 'a.k.a Kal-EL');
    console.log({ superman });
})();
//# sourceMappingURL=05-args-rest.js.map