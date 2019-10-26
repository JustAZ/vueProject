import { clearTimeout, setTimeout } from "timers";

function debounce(fn, delay) {
    let delay = delay ? delay : 200
    let timeOut = null;
    return function () {
        let that = this;
        let args = arguments;
        if (tiemOut) {
            clearTimeout(timeOut)
        }
        timeOut = setTimeout(() => {
            fn.apply(that,args)
        }, delay)
    }
}

export default debounce