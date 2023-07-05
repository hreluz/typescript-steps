"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'No last name'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
//# sourceMappingURL=03-args-optional.js.map