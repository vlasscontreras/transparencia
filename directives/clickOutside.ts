import { DirectiveOptions } from 'vue'

let clickOutside: (event: Event) => void

const directive: DirectiveOptions = {
  bind (el, binding, vnode) {
    clickOutside = function (event: Event) {
      if (el === event.target) {
        return
      }

      if (el.contains(event.target as HTMLElement)) {
        return
      }

      if (vnode.context) {
        // @ts-ignore: TS didnd't like my string being used as index 🙁
        vnode.context[binding.expression]()
      }
    }

    document.body.addEventListener('click', clickOutside)
  },
  unbind () {
    document.body.removeEventListener('click', clickOutside)
  }
}

export default directive
