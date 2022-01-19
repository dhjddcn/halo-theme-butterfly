/**
 * @Description: 工具
 * @author: 小红
 * @date: 2022/1/16
 * @fileName: by.utils
 */

class ByUtils {
    static debounce( func, wait, immediate ) {
        let timeout
        return function () {
            const context = this
            const args = arguments
            const later = function () {
                timeout = null
                if ( !immediate ) func.apply( context, args )
            }
            const callNow = immediate && !timeout
            clearTimeout( timeout )
            timeout = setTimeout( later, wait )
            if ( callNow ) func.apply( context, args )
        }
    }

    static throttle( func, wait, options ) {
        let timeout, context, args
        let previous = 0
        if ( !options ) options = {}

        const later = function () {
            previous = options.leading === false ? 0 : new Date().getTime()
            timeout = null
            func.apply( context, args )
            if ( !timeout ) context = args = null
        }

        const throttled = function () {
            const now = new Date().getTime()
            if ( !previous && options.leading === false ) previous = now
            const remaining = wait - (now - previous)
            context = this
            args = arguments
            if ( remaining <= 0 || remaining > wait ) {
                if ( timeout ) {
                    clearTimeout( timeout )
                    timeout = null
                }
                previous = now
                func.apply( context, args )
                if ( !timeout ) context = args = null
            } else if ( !timeout && options.trailing !== false ) {
                timeout = setTimeout( later, remaining )
            }
        }

        return throttled
    }

    static getRandomColor(){
        return '#'+Math.floor(Math.random()*0xffffff).toString(16);
    }



}
