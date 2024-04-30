export function Demo() {
    function calculate(price, vat) {
        return price * vat;
    }
    const mwst = 1.19;
    const myPrice = calculate(100, mwst);
}
