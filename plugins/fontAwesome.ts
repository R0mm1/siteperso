import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faCaretRight, faCaretLeft, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// @ts-ignore
library.add(faBars)
// @ts-ignore
library.add(faCaretRight)
// @ts-ignore
library.add(faCaretLeft)
// @ts-ignore
library.add(faXmark)
// @ts-ignore
library.add(faGithub)

export default defineNuxtPlugin((nuxtApp) => {
    // @ts-ignore
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
