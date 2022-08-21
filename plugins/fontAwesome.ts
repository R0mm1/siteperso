import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faCaretRight, faCaretLeft, faXmark } from '@fortawesome/free-solid-svg-icons'
import {faFlickr, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

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
// @ts-ignore
library.add(faLinkedin)
// @ts-ignore
library.add(faFlickr)

export default defineNuxtPlugin((nuxtApp) => {
    // @ts-ignore
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
