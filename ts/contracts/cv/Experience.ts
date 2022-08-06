import LeftMenuItem from "~/ts/contracts/components/leftMenu/LeftMenuItem";

export default interface Experience extends LeftMenuItem{
    title: string,
    startDate: Date,
    endDate: Date | null,
    children?: Experience[]
}
