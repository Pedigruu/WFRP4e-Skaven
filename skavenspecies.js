Hooks.once("init", () => {
  const config = {
    species: {},
    speciesCharacteristics: {},
    speciesSkills: {},
    speciesTalents: {},
    speciesTraits: {},
    speciesRandomTalents: {},
    speciesTalentReplacement: {},
    speciesMovement: {},
    speciesFate: {},
    speciesRes: {},
    speciesExtra: {},
    speciesAge: {},
    speciesHeight: {}
  };

  // skaven1 is for the Clanrat subspecies
  config.species.skaven1 = "Skaven (Clanrat)";

  config.speciesCharacteristics.skaven1 = {
    ws: "2d10+20",
    bs: "2d10+20",
    s: "2d10+20",
    t: "2d10+20",
    i: "2d10+30",
    ag: "2d10+25",
    dex: "2d10+20",
    int: "2d10+20",
    wp: "2d10+15",
    fel: "2d10+10"
  };

  config.speciesSkills.skaven1 = [
    "Athletics",
    "Bribery",
    "Charm",
    "Climb",
    "Dodge",
    "Haggle",
    "Intuition",
    "Language (Queekish)",
    "Lore (Skaven)",
    "Melee (Basic)",
    "Perception",
    "Stealth",
    "Swim",
    "Track"
  ];

  config.speciesTalents.skaven1 = [
    "Acute Sense (Smell)",
    "Enclosed Fighter",
    "Flee!",
    "Lightning Reflexes, Warrior Born",
    "Night Vision"    
  ];

  config.speciesTraits.skaven1 = [
    "Tail Attack"
  ];

    config.speciesRandomTalents.skaven1 = {
    talents: 2,
  };

  config.speciesTalentReplacement.skaven1 = {
    "Artistic": "Beneath Notice",
    "Doomed": "Drilled",
    "Lip Reading": "Magical Sense",
    "Mimic": "Nose for Trouble"
  };

  config.speciesMovement.skaven1 = 5;
  config.speciesFate.skaven1 = 0;
  config.speciesRes.skaven1 = 1;
  config.speciesExtra.skaven1 = 2;
  config.speciesExtra.skaven1 = "1d10+5";
  config.speciesHeight.skaven1 = {
    die: "1d10",
    feet: 4,
    inches: 4
  };

  // skaven2 is for the Black Fur subspecies
  config.species.skaven2 = "Skaven (Black Fur)";

  config.speciesCharacteristics.skaven2 = {
    ws: "2d10+30",
    bs: "2d10+25",
    s: "2d10+25",
    t: "2d10+25",
    i: "2d10+40",
    ag: "2d10+40",
    dex: "2d10+20",
    int: "2d10+20",
    wp: "2d10+20",
    fel: "2d10+10"
  };

  config.speciesSkills.skaven2 = [
    "Athletics",
    "Bribery",
    "Cool",
    "Endurance",
    "Evaluate",
    "Intimidate",
    "Leadership",
    "Melee (Two-Handed", 
    "Stealth",
    "Swim",
    "Track"
  ];

  config.speciesTalents.skaven2 = [
    "Acute Sense (Smell)",
    "Careful Strike, Strike Mighty Blow",
    "Combat Reflexes",
    "Night Vision",
    "Resolute"
  ];

  config.speciesTraits.skaven2 = [
    "Tail Attack"
  ];

    config.speciesRandomTalents.skaven2 = {
    talents: 1,
  };

  config.speciesTalentReplacement.skaven2 = {
    "Artistic": "Beneath Notice",
    "Doomed": "Drilled",
    "Lip Reading": "Magical Sense",
    "Mimic": "Nose for Trouble"
  };

  config.speciesMovement.skaven2 = 5;
  config.speciesFate.skaven2 = 1;
  config.speciesRes.skaven2 = 1;
  config.speciesExtra.skaven2 = 1;
  config.speciesExtra.skaven2 = "1d10+5";
  config.speciesHeight.skaven2 = {
    die: "1d10",
    feet: 4,
    inches: 4
  };

  
  // skaven3 is for the Grey Seer subspecies
  config.species.skaven3 = "Skaven (Grey Seer)";

  config.speciesCharacteristics.skaven3 = {
    ws: "2d10+10",
    bs: "2d10+10",
    s: "2d10+20",
    t: "2d10+20",
    i: "2d10+30",
    ag: "2d10+35",
    dex: "2d10+20",
    int: "2d10+35",
    wp: "2d10+25",
    fel: "2d10+20"
  };

  config.speciesSkills.skaven3 = [
    "Bribery",
    "Channelling",
    "Charm",
    "Cool",
    "Intimidate",
    "Intuition",
    "Language (Magick)",
    "Leadership",
    "Melee (Brawling)",
    "Research",
    "Ride (Rat Ogre)",
    "Stealth"
  ];

  config.speciesTalents.skaven3 = [
    "Petty Magic",
    "Savvy, Coolheaded",
    "Night Vision",
    "Read/Write",
    "Schemer"
  ];

  config.speciesTraits.skaven3 = [
    "Tail Attack"
  ];

    config.speciesRandomTalents.skaven3 = {
    talents: 3,
  };

  config.speciesTalentReplacement.skaven3 = {
    "Artistic": "Beneath Notice",
    "Doomed": "Drilled",
    "Lip Reading": "Magical Sense",
    "Mimic": "Nose for Trouble"
  };

  config.speciesMovement.skaven3 = 5;
  config.speciesFate.skaven3 = 2;
  config.speciesRes.skaven3 = 1;
  config.speciesExtra.skaven3 = 1;
  config.speciesExtra.skaven3 = "1d10+5";
  config.speciesHeight.skaven3 = {
    die: "1d10",
    feet: 4,
    inches: 4
  };

    // skaven4 is for the Rat Ogre subspecies
  config.species.skaven4 = "Skaven (Rat Ogre)";

  config.speciesCharacteristics.skaven4 = {
    ws: "2d10+25",
    bs: "2d10+0",
    s: "2d10+45",
    t: "2d10+35",
    i: "2d10+25",
    ag: "2d10+35",
    dex: "2d10+10",
    int: "2d10+0",
    wp: "2d10+15",
    fel: "2d10+5"
  };

  config.speciesSkills.skaven4 = [
    "Athletics",
    "Climb",
    "Cool",
    "Endurance",
    "Intimidate",
    "Melee (Basic)",
    "Melee (Brawling)",
    "Swim"
  ];

  config.speciesTalents.skaven4 = [
    "Hardy, Frenzy",
    "Robust, Iron Jaw",
    "Night Vision"
  ];

  config.speciesTraits.skaven4 = [
    "Stupid",
    "Size (Large)"
  ];

    config.speciesRandomTalents.skaven4 = {
    talents: 1,
  };

  config.speciesTalentReplacement.skaven4 = {
    "Artistic": "Beneath Notice",
    "Doomed": "Drilled",
    "Lip Reading": "Magical Sense",
    "Mimic": "Nose for Trouble"
  };

  config.speciesMovement.skaven4 = 5;
  config.speciesFate.skaven4 = 0;
  config.speciesRes.skaven4 = 2;
  config.speciesExtra.skaven4 = 1;
  config.speciesExtra.skaven4 = "1d10+5";
  config.speciesHeight.skaven4 = {
    die: "1d10",
    feet: 6,
    inches: 4
  };
  
  foundry.utils.mergeObject(game.wfrp4e.config, config);
  game.wfrp4e.config.extraSpecies.push("skaven1");
  game.wfrp4e.config.extraSpecies.push("skaven2");
  game.wfrp4e.config.extraSpecies.push("skaven3");
  game.wfrp4e.config.extraSpecies.push("skaven4");
});