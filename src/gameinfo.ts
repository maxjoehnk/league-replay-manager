

export interface IGameInfo {
    gameLength: number;
    gameVersion: string;
    lastGameChunkId: number;
    lastKeyFrameid: number;
    statsJson: IGameCharacter[];
}

export interface IGameCharacter {
    assists: number;
    barracks_killed: number;
    bounty_level: number;
    champions_killed: number;
    consumables_purchased: number;
    double_kills: number;
    exp: number;
    friendly_dampen_lost: number;
    friendly_hq_lost: number;
    friendly_turret_lost: number;
    game_ended_in_early_surrender: boolean;
    game_ended_in_surrender: boolean;
    gold_earned: number;
    gold_spent: number;
    hq_killed: number;
    id: number;
    items: IGameItem[];
    items_purchased: number;
    kesystone_id: number;
    killing_sprees: number;
    largest_critical_strike: number;
    largest_multi_kill: number;
    level: number;
    longest_time_spent_living: number;
    magic_damage_dealt_player: number;
    magic_damage_dealt_to_champions: number;
    magic_damage_taken: number;
    minions_killed: number;
    muted_all: boolean;
    name: string;
    neutral_minions_killed: number;
    neutral_minions_killed_enemy_jungle: number;
    neutral_minions_killed_your_jungle: number;
    num_deaths: number;
    penta_kills: number;
    physical_damage_dealt_player: number;
    physical_damage_dealt_to_champions: number;
    physical_damage_taken: number;
    ping: number;
    players_i_muted: number;
    players_that_muted_me: number;
    player_position: number;
    player_role: number;
    player_score_0: number;
    quadra_kills: number;
    sight_wards_bought_in_game: number;
    skin: string;
    spell1_cast: number;
    spell2_cast: number;
    spell3_cast: number;
    spell4_cast: number;
    summon_spell1_cast: number;
    summon_spell2_cast: number;
    super_monster_killed: number;
    team: number;
    team_early_surrendered: boolean;
    time_of_from_last_disconnect: number;
    time_played: number;
    time_spent_disconnected: number;
    total_damage_dealt: number;
    total_damage_dealt_to_buildings: number;
    total_damage_dealt_to_champions: number;
    total_damage_taken: number;
    total_head: number;
    total_time_crowd_control_dealt: number;
    total_time_spent_dead: number;
    total_units_healed: number;
    triple_kills: number;
    true_damage_dealt_player: number;
    true_damage_dealt_to_champions: number;
    true_damage_taken: number;
    turrets_killed: number;
    unreal_kills: number;
    vision_wards_bought_in_game: number;
    ward_killed: number;
    ward_placed: number;
    ward_placed_detector: number;
    was_afk: boolean;
    was_afk_after_failed_surrender: boolean;
    was_early_surrender_accomplice: boolean;
    win: string;
}

export interface IGameItem {
    (): number;
}
