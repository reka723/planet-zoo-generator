// Prompt pools used by the challenge generator.
export const OPTIONS = {
  theme: ['Rocky desert outpost', 'Overgrown rainforest ruins', 'Alpine research station', 'Rustic European countryside', 'Modern conservation centre', 'Ancient temple garden', 'Arctic expedition camp', 'Tropical river delta', 'Forgotten quarry', 'Woodland fairytale', 'Coastal boardwalk', 'Savannah sunset lodge', 'Industrial rewilding project', 'Japanese zen garden', 'Canyon oasis'],
  terrain: ['Layered rock shelves', 'Rolling hills and a shallow valley', 'A winding stream and pond', 'Stepped cliffs (keep guest areas safe)', 'Dense forest pockets', 'A sandy basin with scattered boulders', 'A raised central island', 'A naturalistic ravine', 'Mixed grass, mud and rock patches', 'A multi-level planted slope'],
  shelter: ['A big brick shelter', 'A half-buried stone den', 'A timber lodge with a green roof', 'A modern glass-fronted shelter', 'A ruined temple shelter', 'A cave built into the rockwork', 'A compact research building', 'A rustic barn with a covered yard', 'A sculpted concrete hide', 'A natural burrow network'],
  // Guest experience and viewing are chosen per animal type (Habitat / Aviary / Aquarium / Exhibit).
  guest: {
    Habitat: ['A one-way glass wall for stress-free viewing', 'A raised wooden boardwalk overlook', 'A path that hugs the barrier and loops back to it', 'A sunken viewing pit at animal eye level', 'A quiet, low-impact viewing area', 'A one-way guest path with a surprise reveal', 'A viewing platform above the habitat', 'An indoor viewing gallery', 'A keeper-talk viewing area with seating'],
    Aviary: ['A viewing spot looking up through the roof mesh', 'A low ground-level view and a canopy-level view', 'A "flight path" window where birds cross in front of guests', 'A winding path around the aviary edge', 'A raised treetop walkway beside the roof supports', 'A hidden hide-style viewing window', 'A covered gallery with an unobstructed sightline'],
    Aquarium: ['A path tunnel through the tank (needs an Aquarium Guest Gate)', 'A panoramic viewing wall', 'A sunken viewing area below the waterline', 'An above-water overlook plus one underwater window', 'A multi-level tank viewed from every floor', 'A dark, atmospheric gallery lit by the tank', 'A curved barrier wall that wraps around guests'],
    Exhibit: ['A single close-up window', 'A tabletop-style display at child height', 'A darkened indoor gallery with lit displays', 'A peek-through porthole', 'A one-way glass panel in a themed building', 'A small viewing alcove with an education board'],
  },
  viewing: {
    Habitat: ['2 viewing points, at least one one-way glass', '3 viewing points at different heights', '4 viewing points', 'A full viewing loop around the habitat', '1 panoramic window and 1 overlook'],
    Aviary: ['2 viewing points: 1 ground level, 1 elevated', '3 viewing points with an unobstructed sightline', '1 view through the roof mesh plus 1 side window'],
    Aquarium: ['1 path tunnel and 1 window', 'A panoramic underwater viewing wall', '2 underwater windows and 1 overlook', '1 tunnel and 1 above-water viewing spot'],
    Exhibit: ['1 close-up viewing moment', '2 close-up viewing moments', '1 window and 1 education board'],
  },
  // Type-specific replacements / additions. Habitat keeps the general lists above.
  terrainByType: {
    Aquarium: ['A sunken pit with stepped rock walls', 'A multi-level tank with an elevated section', 'A sandy seabed with rocky outcrops', 'A reef wall with deep drop-offs', 'A shallow lagoon grading into deep water', 'A river-style channel with a gentle current look'],
    Exhibit: ['A compact terrarium-style landscape', 'A forest-floor diorama with logs and leaf litter', 'A rocky crevice with a shallow water dish', 'A layered planted slope in miniature'],
  },
  shelterByType: {
    Aviary: ['A cluster of perches and a roosting tower', 'A timber nest-box wall', 'A sheltered roosting hut under the roof supports', 'A cliff-face ledge shelter', 'A reed-bed nesting area', 'A ruined tower with nesting holes'],
    Exhibit: ['A hollow log hide', 'A rock crevice retreat', 'A leaf-litter burrow', 'A cork-bark hide', 'A mossy planted hide'],
  },
  featureByType: {
    Aviary: ['A tall tree-like perching structure', 'A waterfall into a bathing pool', 'A feeding / enrichment station at flight height', 'Hanging planters and vine climbing frames', 'A bridge crossing under the roof', 'A mist and bathing area'],
    Aquarium: ['A diver-access point for keepers', 'A free-floating underwater feeder zone', 'A glass-bottom viewing section', 'A kelp forest or coral centrepiece', 'A sunken shipwreck or ruin', 'A cave swim-through'],
    Exhibit: ['A tiny waterfall or misting feature', 'A themed education board', 'A glowing UV or low-light display', 'A tiny bridge or log crossing'],
  },
  challengeByType: {
    Aviary: ['Place roof supports at two different heights for flying space', 'Keep every window and viewpoint free of obstructing scenery', 'Make the roof mesh feel like part of the landscape'],
    Aquarium: ['Fit a guest tunnel without shrinking the tank below welfare needs', 'Build a multi-level aquarium with at least two viewing depths', 'Make the tank look great from above and below'],
    Exhibit: ['Pack a convincing landscape into the smallest footprint', 'Make a single window the star of the build'],
  },
  feature: ['Tunnels and hidden routes', 'A waterfall feature', 'A large natural pool', 'Climbing frames disguised as trees', 'A dramatic rock arch', 'A feeding / enrichment station', 'A little island refuge', 'A bridge crossing the habitat', 'A burrow or den visitors can peek into', 'A planted roof or living wall', 'A misting area', 'A keeper-only service yard'],
  planting: ['Native grasses and wildflowers', 'Dense shrubs with sightline gaps', 'A lush tropical canopy', 'Pine trees and alpine flowers', 'Cacti, succulents and dry grasses', 'Reeds, ferns and wetland plants', 'A few statement trees with ground cover', 'Mossy rocks and fern pockets', 'Minimalist planting with sculptural trees', 'Seasonal colour in carefully framed beds'],
  challenge: ['Keep at least 70% of the habitat visually natural', 'Build a guest path that never dead-ends', 'Hide all staff facilities from the main view', 'Use at least three height levels', 'Create one perfect photo spot', 'Make the shelter a visual centrepiece', 'Use a limited palette of three main building materials', 'Include a quiet retreat with no direct guest view', 'Make the habitat look great from both sides', 'Blend every barrier into the scenery', 'Use one bold focal feature and keep the rest restrained', 'Build a clear view without making the habitat feel bare'],
  bonus: ['Add a small education board with a fun fact', 'Create a hidden animal-shaped detail', 'Use a custom entrance sign', 'Add benches and bins that fit the theme', 'Include a keeper access route', 'Create a night-time lighting moment', 'Build a tiny themed shop or snack kiosk nearby', 'Add a photo frame / selfie spot', 'Make a miniature landscape vignette', 'Add a second, subtle story to the scenery'],
  // Per-type overrides that replace (rather than extend) the general lists.
  countByType: {
    Habitat: ['1 spacious habitat', '1 compact habitat', '1 large naturalistic habitat'],
    Aviary: ['1 walk-through or flight habitat'],
    Aquarium: ['1 immersive aquarium'],
    Exhibit: ['1 detailed exhibit'],
  },
  aquariumShelter: ['A reef cave', 'A kelp forest', 'A sunken shipwreck', 'A rocky underwater arch', 'A coral garden'],
  aquariumPlanting: ['Aquatic plants and seagrass', 'Coral and anemone gardens', 'Kelp and tall water weed', 'Minimal planting with bold rockwork'],
};
