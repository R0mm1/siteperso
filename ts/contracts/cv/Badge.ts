export type TechnoOther = 'other'
export type TechnoLanguage = 'php' | 'js' | 'ts' | 'html' | 'css' | 'scss' | TechnoOther
export type TechnoFramework = 'symfony' | 'vuejs' | 'angularjs' | 'angular' | 'nuxt' | TechnoOther
export type TechnoOs = 'windows' | 'debian' | 'ubuntu' | 'fedora' | TechnoOther
export type TechnoTemplating = 'twig' | 'smarty' | TechnoOther
export type TechnoCi = 'ansible' | 'gitlab' | 'jenkins' | 'docker' | 'kubernetes' | 'k3d' | TechnoOther
export type TechnoLibraries = 'jquery' | TechnoOther
export type TechnoDb = 'mysql' | 'postgresql' | 'mongodb' | TechnoOther
export type TechnoVersioning = 'git' | TechnoOther
export type TechnoRouting = 'nginx' | 'traefik' | TechnoOther
export type TechnoAuthentication = 'keycloak' | 'oauth2' | TechnoOther

export interface Badge {
    techno: string,
    label?: string,
    versions?: string[]
}

export interface BadgeLanguage extends Badge{
    techno: TechnoLanguage
}

export interface BadgeFramework extends Badge{
    techno: TechnoFramework
}

export interface BadgeOs extends Badge{
    techno: TechnoOs
}

export interface BadgeTemplating extends Badge{
    techno: TechnoTemplating
}

export interface BadgeCi extends Badge{
    techno: TechnoCi
}

export interface BadgeLibraries extends Badge{
    techno: TechnoLibraries
}

export interface BadgeDb extends Badge{
    techno: TechnoDb
}

export interface BadgeVersioning extends Badge{
    techno: TechnoVersioning
}

export interface BadgeRouting extends Badge{
    techno: TechnoRouting
}

export interface BadgeAuthentication extends Badge{
    techno: TechnoAuthentication
}
