// `pg` (node-postgres) doesn't currently ship TypeScript types in a way that
// Next.js/TS can always resolve under `moduleResolution: "bundler"`.
// A minimal module declaration keeps builds unblocked.
declare module "pg" {
    export class Pool {
        constructor(config?: unknown)
    }
}


