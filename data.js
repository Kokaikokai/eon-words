// Field tables are joined by permanent card ID, never by row position.
const CARD_DATA_FILES = ["data/categories.js", "data/translations.js", "data/assets.js", "data/image-prompts.js", "data/sound-prompts.js", "data/category-definitions.js", "data/category-translations.js"];
const CHARACTERS = (() => {
  const tables = [CARD_CATEGORIES, CARD_TRANSLATIONS, CARD_ASSETS, CARD_IMAGE_PROMPTS, CARD_SOUND_PROMPTS];
  const cards = new Map();
  for (const row of CARD_CATEGORIES) {
    if (!/^[a-f0-9]{12}$/.test(row.id) || cards.has(row.id)) throw new Error('Invalid or duplicate card ID');
    cards.set(row.id, {...row});
  }
  for (const table of tables.slice(1)) {
    const seen = new Set();
    for (const row of table) {
      if (!cards.has(row.id) || seen.has(row.id)) throw new Error('Unknown or duplicate field-table ID');
      seen.add(row.id);
      const card = cards.get(row.id);
      for (const [key, value] of Object.entries(row)) {
        if (key === 'id') continue;
        if (Object.hasOwn(card, key)) throw new Error('Duplicate card field: ' + key);
        card[key] = value;
      }
    }
    if (seen.size !== cards.size) throw new Error('Missing field-table card ID');
  }
  return [...cards.values()];
})();
