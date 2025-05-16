import {onMounted, ref, type Ref, watch} from "vue";

export function enhanced(elementPage: string){
    const route = useRoute()

    let isEnhanced: Ref<Boolean> = ref(false)

    const updateEnhanced = function () {
        const route = useRoute()
        isEnhanced.value = route.fullPath === elementPage
    }

    watch(
        () => route.fullPath,
        updateEnhanced
    )

    onMounted(updateEnhanced)

    return {isEnhanced}
}
