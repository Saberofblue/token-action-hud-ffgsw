/**
 * The system helpers this module needs, resolved from the RUNNING system's id rather than a
 * hard-coded "systems/starwarsffg/" path, so the module works under any id the Star Wars FFG
 * system is installed as (e.g. a parallel sandbox build). Loaded once before Token Action HUD
 * Core builds the handlers; the exports are live bindings.
 */
export let get_dice_pool = null
export let skillsList = null

export async function loadSystemBridge() {
    const base = `/systems/${game.system.id}/modules`
    const [dice, skills] = await Promise.all([
        import(`${base}/helpers/dice-helpers.js`),
        import(`${base}/config/ffg-skills.js`)
    ])
    get_dice_pool = dice.get_dice_pool
    skillsList = skills.skills
}
