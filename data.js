// ============================================================
//  Abby & Jacob Wedding App — DATA
//  All people, events, and day-by-day schedules
// ============================================================

const WEDDING = {
  meta: {
    couple: "Abby & Jacob",
    weddingDate: "2026-06-13",          // Saturday
    ceremonyTime: "2026-06-13T17:00:00", // 5:00 PM
    venue: "The Ranch at Silver Creek",
    venueCity: "San Jose, CA",
    colors: { lilac: "#8B7DD8", navy: "#2A3257", white: "#FFFFFF" }
  },

  locations: [
    { name: "Hayward Home", address: "28817 Bailey Ranch Rd, Hayward, CA" },
    { name: "Union City AirBNB (Abby's parents)", address: "32223 Allison Dr, Union City, CA" },
    { name: "Milpitas Women's AirBNB", address: "99 Carnegie Dr, Milpitas, CA" },
    { name: "Wedding Venue — The Ranch at Silver Creek", address: "4601 Hill Top View Lane, San Jose, CA" },
    { name: "Hotel (Sat night)", address: "656 America Center Ct, San Jose, CA 95002" },
    { name: "Airports", address: "SFO, OAK, SJC" }
  ],

  vehicles: [
    { name: "Ford Transit Van", capacity: "14 seats (people only, no luggage)", driver: "Jacob → Jeff (hand-off Sat)" },
    { name: "GLS 450", capacity: "5 seats (no bags)", driver: "Robin Edwin" },
    { name: "BMW", capacity: "4 seats", driver: "Preethy Edwin" },
    { name: "Volvo", capacity: "Bags only", driver: "Renu Asirvatham" },
    { name: "Model X", capacity: "Mix of people + bags", driver: "Sean Asir" },
    { name: "Rented SUV (Saturday)", capacity: "7 seats", driver: "Jacob" },
    { name: "Celeste's car", capacity: "—", driver: "Celeste Tori" }
  ],

  // ---- GROUPS for filtering ----
  // groomsmen | bridesmaids | family
  groups: ["The Couple", "Groomsmen", "Bridesmaids", "Family"],

  // ============================================================
  //  CONTACTS — key people only (parents, leads, drivers, vendors)
  //  Shown on the Info page. phone = digits only for tel: links.
  // ============================================================
  contacts: [
    { section: "Parents" },
    { name: "Robin Edwin", role: "Father of Groom · GLS 450 driver", phone: "4085823354" },
    { name: "Preethy Edwin", role: "Mother of Groom · Departure contact", phone: "5105746659" },
    { name: "Jeff Tori", role: "Father of Bride · Transit Van", phone: "9703713588" },
    { name: "Celeste Tori", role: "Mother of Bride · Catering", phone: "9703713566" },

    { section: "Bridal party leads" },
    { name: "Jaden Edwin", role: "Best Man", phone: "5107389904" },
    { name: "Adriana Tori", role: "Maid of Honor", phone: "9704089296" },

    { section: "Drivers & coordinators" },
    { name: "Sean Asir", role: "Model X · MC · Honeymoon driver", phone: "5108628428" },
    { name: "Kevin Asir", role: "AV · Keyboard", phone: "5103869651" },
    { name: "Renu Asirvatham", role: "Volvo driver", phone: "5108628423" },
    { name: "Jey Asirvatham", role: "Sat night driver", phone: "5106766739" },

    { section: "Groomsmen" },
    { name: "Grant Shrable", role: "Groomsman", phone: "8709558592" },
    { name: "Johann Rajadurai", role: "Groomsman", phone: "4696458063" },
    { name: "Andrew Kondratieff", role: "Groomsman", phone: "9705766199" },
    { name: "Liam Monaghan", role: "Groomsman", phone: "8037296125" },

    { section: "Bridesmaids" },
    { name: "Grace Basile", role: "Bridesmaid", phone: "7203831833" },
    { name: "Kelsey Selva", role: "Bridesmaid", phone: "2108274247" },
    { name: "Abigail Reed", role: "Bridesmaid", phone: "2812223373" },
    { name: "Emily McGrail", role: "Bridesmaid", phone: "8455885264" },
    { name: "Kate Goodrich", role: "Bridesmaid", phone: "3144883838" },

    { section: "Family friends" },
    { name: "Avery Shrable", role: "Family friend", phone: "4172807307" },
    { name: "Sofie Cortez", role: "Family friend", phone: "5123485305" },

    { section: "Officiant & vendors" },
    { name: "Pastor Derrick Wright", role: "Officiant", phone: "6082138520" },
    { name: "Sienna's Sweets", role: "Cake & dessert", phone: "9169490253" }
  ],

  // ============================================================
  //  PEOPLE
  //  group is used for filter chips.
  //  events[] = { day, time, text } — sorted in display
  // ============================================================
  people: [
    // ---------- THE COUPLE ----------
    {
      name: "Jacob Edwin", role: "Groom", group: "The Couple", initials: "JE",
      events: [
        { day: "Fri", time: "12:45 AM", text: "Pick up Grant from SFO (BMW)" },
        { day: "Fri", time: "9:30 AM", text: "Pick up Transit Van with Robin, then SFO for India family" },
        { day: "Fri", time: "12:30 PM", text: "Drive Transit Van: Hayward → Union City → Venue" },
        { day: "Fri", time: "2:00 PM", text: "Rehearsal at venue" },
        { day: "Fri", time: "6:00 PM", text: "Host rehearsal dinner" },
        { day: "Sat", time: "2:15 PM", text: "Drive Rented SUV with groomsmen to venue" },
        { day: "Sat", time: "5:00 PM", text: "CEREMONY" },
        { day: "Sat", time: "8:30 PM", text: "Piano performance + singing (1 song)" },
        { day: "Sat", time: "11:00 PM", text: "Drive Abby to hotel" },
        { day: "Sun", time: "Morning", text: "With Abby to Union City AirBNB for brunch, then Hayward by 1:30 PM" },
        { day: "Sun", time: "8:45 PM", text: "Depart Hayward → SFO with Kate + Kyle (Model X, Sean driving); honeymoon 10:54 PM" }
      ]
    },
    {
      name: "Abby Tori", role: "Bride", group: "The Couple", initials: "AT",
      events: [
        { day: "Fri", time: "Morning", text: "At Union City AirBNB with parents" },
        { day: "Fri", time: "2:00 PM", text: "Rehearsal at venue" },
        { day: "Fri", time: "6:00 PM", text: "Rehearsal dinner" },
        { day: "Fri", time: "10:00 PM", text: "Back to Milpitas with bridesmaids" },
        { day: "Sat", time: "2:30 PM", text: "Depart Milpitas → Venue (Transit Van)" },
        { day: "Sat", time: "5:00 PM", text: "CEREMONY" },
        { day: "Sat", time: "11:00 PM", text: "To hotel with Jacob" },
        { day: "Sun", time: "Morning", text: "Brunch at mom's Union City AirBNB → Hayward by 1:30 PM" },
        { day: "Sun", time: "8:45 PM", text: "Depart Hayward → SFO for honeymoon (Model X with Sean, Kate + Kyle)" }
      ]
    },

    // ---------- FAMILY: PARENTS ----------
    {
      name: "Robin Edwin", role: "Father of Groom", group: "Family", initials: "RE",
      events: [
        { day: "Fri", time: "9:30 AM", text: "Drive GLS 450 with Jacob to pick up Transit Van" },
        { day: "Fri", time: "9:50 AM", text: "At SFO for India family pickup" },
        { day: "Fri", time: "12:30 PM", text: "Drive GLS 450 (with decor) → Union City → Venue" },
        { day: "Fri", time: "2:00 PM", text: "Attend rehearsal" },
        { day: "Fri", time: "3:15 PM", text: "Drive groomsmen back to Hayward" },
        { day: "Sat", time: "2:15 PM", text: "Drive GLS 450 to venue (same time as groomsmen)" },
        { day: "Sat", time: "11:00 PM", text: "Drive caravan venue → Hayward" },
        { day: "Sun", time: "4:00 PM", text: "Host Indian Thali ceremony" }
      ]
    },
    {
      name: "Preethy Edwin", role: "Mother of Groom — Departure Contact", group: "Family", initials: "PE",
      events: [
        { day: "Fri", time: "12:30 PM", text: "Drive BMW (with decor): Hayward → SJC (pick up Emily) → Venue" },
        { day: "Fri", time: "2:00 PM", text: "Attend rehearsal" },
        { day: "Fri", time: "3:15 PM", text: "Drive groomsmen back to Hayward" },
        { day: "Fri", time: "6:00 PM", text: "Welcome remarks with Celeste at rehearsal dinner" },
        { day: "Sat", time: "7:00 AM", text: "Lay out breakfast at Hayward" },
        { day: "Sat", time: "8:00 AM", text: "Trader Joe's flower run" },
        { day: "Sat", time: "10:00 AM", text: "Hair appointment (10 AM–12 PM)" },
        { day: "Sat", time: "2:15 PM", text: "Drive BMW with Sofie + Avery to venue" },
        { day: "Sat", time: "8:40 PM", text: "Mother/Son dance" },
        { day: "Sat", time: "11:00 PM", text: "DEPARTURE CONTACT: Banquet Captain hands all items to her; drive caravan venue → Hayward" },
        { day: "Sun", time: "9:00 AM", text: "Sunday setup: gifts outside box (9–11:30 AM)" },
        { day: "Sun", time: "1:30 PM", text: "Help bridesmaids with sarees, with Karun (1:30–2:30 PM)" },
        { day: "Sun", time: "2:30 PM", text: "Getting ready" },
        { day: "Sun", time: "3:00 PM", text: "Help Abby getting ready" },
        { day: "Sun", time: "4:00 PM", text: "Host Indian Thali ceremony" }
      ],
      notes: "Owns: Furniture rentals + non-alcoholic drink station (rehearsal dinner). Departure contact phone: 510-574-6659"
    },
    {
      name: "Jeff Tori", role: "Father of Bride", group: "Family", initials: "JT",
      events: [
        { day: "Fri", time: "2:00 PM", text: "Attend rehearsal at venue" },
        { day: "Fri", time: "3:15 PM", text: "Drive Transit Van: Venue → Milpitas (drop bridesmaids) → Union City" },
        { day: "Fri", time: "4:15 PM", text: "Back to Milpitas to pick up bridesmaids → Hayward" },
        { day: "Fri", time: "10:00 PM", text: "Drive bridesmaids back to Milpitas, then Union City" },
        { day: "Sat", time: "2:30 PM", text: "Drive Transit Van Milpitas → Venue" },
        { day: "Sat", time: "5:00 PM", text: "Walk Abby down aisle" },
        { day: "Sat", time: "8:45 PM", text: "Father/Daughter dance" },
        { day: "Sat", time: "11:00 PM", text: "Drive bridesmaids → Milpitas" },
        { day: "Sun", time: "9:30 AM", text: "Return Transit Van" }
      ],
      notes: "Owner of Transit Van Fri–Sun"
    },
    {
      name: "Celeste Tori", role: "Mother of Bride", group: "Family", initials: "CT",
      events: [
        { day: "Fri", time: "2:00 PM", text: "Attend rehearsal at venue (drives own car)" },
        { day: "Fri", time: "3:15 PM", text: "Drive with DJ → Buca pickup → Hayward" },
        { day: "Fri", time: "6:00 PM", text: "Welcome remarks with Preethy at rehearsal dinner" },
        { day: "Sun", time: "Morning", text: "Drive Grace + Milpitas group to airport / Hayward" },
        { day: "Sun", time: "4:00 PM", text: "Indian reception" }
      ],
      notes: "Owns: Food & catering coordination (with Aunt Sue)"
    },

    // ---------- OFFICIANT ----------
    {
      name: "Pastor Derrick Wright", role: "Officiant", group: "Family", initials: "DW",
      events: [
        { day: "Fri", time: "2:00 PM", text: "Rehearsal at venue (drives self)" },
        { day: "Sat", time: "5:00 PM", text: "Officiate ceremony" }
      ],
      notes: "Phone: 608-213-8520"
    },

    // ---------- GROOMSMEN ----------
    {
      name: "Jaden Edwin", role: "Best Man (Jacob's brother)", group: "Groomsmen", initials: "JE",
      events: [
        { day: "Fri", time: "12:30 PM", text: "Ride with Robin/Preethy: Hayward → Union City → Venue" },
        { day: "Fri", time: "2:00 PM", text: "Rehearsal" },
        { day: "Fri", time: "6:00 PM", text: "Rehearsal dinner" },
        { day: "Sat", time: "9:00 AM", text: "Deliver flowers to Athai" },
        { day: "Sat", time: "10:00 AM", text: "Pick up Amma (10 AM–12 PM)" },
        { day: "Sat", time: "2:15 PM", text: "To venue with groomsmen in Rented SUV" },
        { day: "Sat", time: "7:50 PM", text: "Best Man speech" },
        { day: "Sun", time: "9:00 AM", text: "Sunday setup: gifts table with Soumya + groomsmen tables/chairs (9–11:30 AM)" }
      ]
    },
    {
      name: "Grant Shrable", role: "Groomsman", group: "Groomsmen", initials: "GS",
      events: [
        { day: "Fri", time: "12:45 AM", text: "Arrives SFO (DL656), Jacob picks up" },
        { day: "Fri", time: "2:00 PM", text: "Rehearsal" },
        { day: "Fri", time: "6:00 PM", text: "Rehearsal dinner — gives toast" },
        { day: "Sat", time: "2:15 PM", text: "To venue with groomsmen" },
        { day: "Sun", time: "9:00 AM", text: "Sunday setup with groomsmen (tables, chairs, B&G sofa) (9–11:30 AM)" },
        { day: "Sun", time: "12:45 PM", text: "Departs SFO via Uber with Avery (WN3641 at 2:25 PM)" }
      ]
    },
    {
      name: "Johann Rajadurai", role: "Groomsman", group: "Groomsmen", initials: "JR",
      events: [
        { day: "Fri", time: "All day", text: "At Hayward home" },
        { day: "Fri", time: "2:00 PM", text: "Rehearsal" },
        { day: "Fri", time: "6:00 PM", text: "Rehearsal dinner — gives toast" },
        { day: "Sat", time: "2:15 PM", text: "To venue with groomsmen" },
        { day: "Sun", time: "9:00 AM", text: "Sunday setup with groomsmen (9–11:30 AM)" }
      ]
    },
    {
      name: "Andrew Kondratieff", role: "Groomsman", group: "Groomsmen", initials: "AK",
      events: [
        { day: "Fri", time: "9:20 PM", text: "Arrives OAK (WN4270), Uber to Hayward — misses rehearsal + most of dinner" },
        { day: "Sat", time: "2:15 PM", text: "To venue with groomsmen" },
        { day: "Sun", time: "9:00 AM", text: "Sunday setup with groomsmen (9–11:30 AM)" },
        { day: "Mon", time: "9:00 AM", text: "Depart Hayward → OAK (driver TBD)" }
      ]
    },
    {
      name: "Liam Monaghan", role: "Groomsman", group: "Groomsmen", initials: "LM",
      events: [
        { day: "Wed", time: "8:57 AM", text: "Arrives SFO (AA1949), already at Hayward" },
        { day: "Fri", time: "2:00 PM", text: "Rehearsal" },
        { day: "Fri", time: "6:00 PM", text: "Rehearsal dinner" },
        { day: "Sat", time: "2:15 PM", text: "To venue with groomsmen" },
        { day: "Sun", time: "9:00 AM", text: "Sunday setup with groomsmen (9–11:30 AM)" },
        { day: "Mon", time: "11:30 AM", text: "Depart Hayward → SFO with Sofie (driver TBD)" }
      ]
    },

    // ---------- BRIDESMAIDS ----------
    {
      name: "Adriana Tori", role: "Maid of Honor (Abby's sister)", group: "Bridesmaids", initials: "AT",
      events: [
        { day: "Fri", time: "2:00 PM", text: "Rehearsal (already at Union City)" },
        { day: "Fri", time: "6:00 PM", text: "Rehearsal dinner" },
        { day: "Fri", time: "10:00 PM", text: "Back to Milpitas" },
        { day: "Sat", time: "Morning", text: "HMU at Milpitas" },
        { day: "Sat", time: "2:30 PM", text: "Transit Van to venue" },
        { day: "Sat", time: "7:50 PM", text: "MOH speech" }
      ],
      notes: "Owns: Hair & makeup for bridesmaids + Abby"
    },
    {
      name: "Grace Basile", role: "Bridesmaid", group: "Bridesmaids", initials: "GB",
      events: [
        { day: "Fri", time: "7:38 AM", text: "Arrives SFO (UA694), Sean picks up" },
        { day: "Fri", time: "Morning", text: "At Union City with Kate" },
        { day: "Fri", time: "2:00 PM", text: "Rehearsal" },
        { day: "Fri", time: "6:00 PM", text: "Rehearsal dinner — gives toast" },
        { day: "Sat", time: "2:30 PM", text: "Transit Van to venue" },
        { day: "Mon", time: "6:15 AM", text: "Depart SFO (UA 2019) with Abby's parents" }
      ]
    },
    {
      name: "Kelsey Selva", role: "Bridesmaid", group: "Bridesmaids", initials: "KS",
      events: [
        { day: "Wed", time: "9:45 AM", text: "Arrives SFO with Brock" },
        { day: "Fri", time: "Afternoon", text: "Joins bridesmaids at Union City" },
        { day: "Fri", time: "2:00 PM", text: "Rehearsal" },
        { day: "Fri", time: "6:00 PM", text: "Rehearsal dinner" },
        { day: "Sat", time: "2:30 PM", text: "Transit Van to venue" },
        { day: "Mon", time: "3:10 PM", text: "Departs with Brock" }
      ],
      notes: "Stays with Brock through Thursday"
    },
    {
      name: "Abigail Reed", role: "Bridesmaid", group: "Bridesmaids", initials: "AR",
      events: [
        { day: "Fri", time: "11:43 AM", text: "Arrives SFO (F91229) with DJ; pick up own car → drive to Union City" },
        { day: "Fri", time: "2:00 PM", text: "Rehearsal" },
        { day: "Fri", time: "6:00 PM", text: "Rehearsal dinner" },
        { day: "Sat", time: "2:30 PM", text: "Transit Van to venue" },
        { day: "Sun", time: "4:00 PM", text: "Reception at Hayward" },
        { day: "Sun", time: "8:00 PM", text: "Depart Hayward → SFO (F93440 at 9:43 PM) with DJ (own car)" }
      ]
    },
    {
      name: "Emily McGrail", role: "Bridesmaid", group: "Bridesmaids", initials: "EM",
      events: [
        { day: "Fri", time: "11:00 AM", text: "Arrives SJC (WN234), waits at SJC" },
        { day: "Fri", time: "1:00 PM", text: "Preethy picks up in BMW → directly to Venue" },
        { day: "Fri", time: "2:00 PM", text: "Rehearsal" },
        { day: "Fri", time: "6:00 PM", text: "Rehearsal dinner" },
        { day: "Sat", time: "2:30 PM", text: "Transit Van to venue" },
        { day: "Sun", time: "9:05 AM", text: "Depart Milpitas → SJC (WN3666) via Uber" }
      ]
    },
    {
      name: "Kate Goodrich", role: "Bridesmaid", group: "Bridesmaids", initials: "KG",
      events: [
        { day: "Fri", time: "9:17 AM", text: "Arrives SFO (UA540), Sean picks up" },
        { day: "Fri", time: "Morning", text: "Stays at Union City with Grace" },
        { day: "Fri", time: "2:00 PM", text: "Rehearsal" },
        { day: "Fri", time: "6:00 PM", text: "Rehearsal dinner — gives toast" },
        { day: "Sat", time: "2:30 PM", text: "Transit Van to venue" },
        { day: "Sun", time: "8:45 PM", text: "Depart Hayward → SFO with Jacob + Abby + Kyle (Model X, Sean driving); 11:59 PM flight" }
      ]
    },

    // ---------- FAMILY HELPERS ----------
    {
      name: "Sean Asir", role: "Cousin (Jacob's side)", group: "Family", initials: "SA",
      events: [
        { day: "Fri", time: "7:30 AM", text: "At SFO with Model X, picks up Grace, Sofie, Kate" },
        { day: "Fri", time: "9:50 AM", text: "Helps with India family bag overflow" },
        { day: "Fri", time: "6:00 PM", text: "MC the rehearsal dinner" },
        { day: "Sat", time: "11:00 PM", text: "Drives one of 5 cars venue → Hayward" },
        { day: "Sun", time: "11:30 AM", text: "Pizza pickup for Sunday lunch" },
        { day: "Sun", time: "8:45 PM", text: "Drives Jacob + Abby + Kate + Kyle to SFO for honeymoon flight" }
      ]
    },
    {
      name: "Kevin Asir", role: "Cousin (Jacob's side)", group: "Family", initials: "KA",
      events: [
        { day: "Fri", time: "4:00 PM", text: "Set up mic + speaker for rehearsal dinner" },
        { day: "Sat", time: "5:30 PM", text: "Set up piano at venue during cocktail hour" },
        { day: "Sun", time: "3:00 PM", text: "Set up mic + speaker for Thali ceremony" }
      ],
      notes: "Owns: Keyboard for Jacob's piano performance + all AV (audio, projector, music, slideshow). Phone: 510-386-9651"
    },
    {
      name: "Morgan Asir", role: "Kevin's wife", group: "Family", initials: "MA",
      events: [
        { day: "Fri", time: "Afternoon", text: "Possibly drives Friday women's shuttle with Jeff" }
      ],
      notes: "Owns: Candles, string lights, ambiance for rehearsal dinner"
    },
    {
      name: "Soumya Asir", role: "Sean's wife", group: "Family", initials: "SA",
      events: [
        { day: "Sun", time: "9:00 AM", text: "Gifts table setup with Jaden (9–11:30 AM)" }
      ],
      notes: "Owns: Floral centerpieces, name cards, place settings for rehearsal dinner"
    },
    {
      name: "Renu Asirvatham", role: "Aunt", group: "Family", initials: "RA",
      events: [
        { day: "Fri", time: "9:50 AM", text: "Drive Volvo to SFO for India family bag overflow" },
        { day: "Sat", time: "11:00 PM", text: "Drives one of 5 cars venue → Hayward" }
      ]
    },
    {
      name: "Jey Asirvatham", role: "Uncle", group: "Family", initials: "JA",
      events: [
        { day: "Sat", time: "11:00 PM", text: "Drives one of 5 cars venue → Hayward" }
      ]
    },
    {
      name: "Navin (Mama)", role: "Uncle", group: "Family", initials: "NM",
      events: [
        { day: "Fri", time: "3:30 PM", text: "Ice run for rehearsal dinner; load igloo with ciders + water bottles" },
        { day: "Sun", time: "10:00 AM", text: "Cake + ice pickup" },
        { day: "Sun", time: "3:00 PM", text: "Water / lemonade + soda + water trough setup (with Melwyn)" }
      ]
    },
    {
      name: "Melwyn", role: "Family helper", group: "Family", initials: "ML",
      events: [
        { day: "Sat", time: "11:00 AM", text: "Paradise Biryani pickup for Saturday lunch" },
        { day: "Sun", time: "3:00 PM", text: "Water / lemonade + soda + water trough setup (with Navin)" }
      ]
    },
    {
      name: "Steffy", role: "Family helper", group: "Family", initials: "ST",
      events: [
        { day: "Sun", time: "9:00 AM", text: "Return gift table, guest book table, fans, order of service setup (9–11:30 AM, with Asha)" }
      ]
    },
    {
      name: "Asha", role: "Family helper", group: "Family", initials: "AS",
      events: [
        { day: "Sun", time: "9:00 AM", text: "Return gift table, guest book table, fans, order of service setup (9–11:30 AM, with Steffy)" }
      ]
    },
    {
      name: "Karun", role: "Family helper", group: "Family", initials: "KR",
      events: [
        { day: "Sun", time: "1:30 PM", text: "Help bridesmaids dress in saree (1:30–2:30 PM, with Preethy)" }
      ]
    },
    {
      name: "Aunt Sue", role: "Abby's family", group: "Family", initials: "AS",
      events: [],
      notes: "Owns: Help Celeste with food / Buca di Beppo pickup for rehearsal dinner"
    },

    // ---------- FAMILY FRIENDS / PARTNERS ----------
    {
      name: "Sofie Cortez", role: "Family friend (stays at Hayward)", group: "Family", initials: "SC",
      events: [
        { day: "Fri", time: "8:55 AM", text: "Arrives SFO (UA2177), joins morning convoy" },
        { day: "Fri", time: "2:00 PM", text: "Attends rehearsal" },
        { day: "Fri", time: "6:00 PM", text: "Rehearsal dinner" },
        { day: "Sat", time: "2:15 PM", text: "To venue with Avery + Preethy in BMW" },
        { day: "Mon", time: "11:30 AM", text: "Departs SFO with Liam (driver TBD)" }
      ]
    },
    {
      name: "Avery Shrable", role: "Family friend (stays at Hayward)", group: "Family", initials: "AS",
      events: [
        { day: "Fri", time: "6:00 PM", text: "Arrives SFO (AA2810), Uber to Hayward, joins rehearsal dinner" },
        { day: "Sat", time: "2:15 PM", text: "To venue with Sofie + Preethy in BMW" },
        { day: "Sun", time: "12:45 PM", text: "Departs SFO via Uber with Grant (WN3641 at 2:25 PM)" }
      ]
    },
    {
      name: "DJ (Abigail's boyfriend)", role: "Joining the weekend", group: "Family", initials: "DJ",
      events: [
        { day: "Fri", time: "11:43 AM", text: "Arrives SFO with Abigail; pick up own car → Union City" },
        { day: "Fri", time: "Afternoon", text: "Rides with Celeste from venue → Buca → Hayward" },
        { day: "Fri", time: "6:00 PM", text: "Rehearsal dinner" },
        { day: "Sun", time: "8:00 PM", text: "Departs Hayward → SFO with Abigail (own car; F93440 at 9:43 PM)" }
      ]
    },
    {
      name: "Brock Carey", role: "Kelsey's boyfriend", group: "Family", initials: "BC",
      events: [
        { day: "Mon", time: "3:10 PM", text: "Drives Kelsey to airport" }
      ],
      notes: "Has Kelsey from Wed arrival through Fri afternoon"
    },
    {
      name: "Kyle Goodrich", role: "Kate's guest", group: "Family", initials: "KG",
      events: [
        { day: "Sun", time: "8:45 PM", text: "Depart Hayward → SFO with Jacob + Abby + Kate (Model X, Sean driving); 11:59 PM flight" }
      ]
    },
    {
      name: "India Family (9)", role: "Jacob's family from Singapore", group: "Family", initials: "IF",
      events: [
        { day: "Fri", time: "9:50 AM", text: "Arrives SFO (SQ32), Jacob + team pick up" },
        { day: "Sun", time: "After reception", text: "Self-organized transport back to Hayward" }
      ],
      notes: "Stays at Hayward home through the weekend"
    }
  ],

  // ============================================================
  //  DAY-BY-DAY SCHEDULES
  //  Each row: { time, event, who, vehicle, notes, highlight }
  // ============================================================
  days: {
    "Wed": {
      label: "Wednesday, June 10",
      sub: "Early arrivals",
      rows: [
        { time: "8:57 AM", event: "Liam Monaghan arrives SFO (AA1949)", who: "Liam", vehicle: "—", notes: "Already at Hayward" },
        { time: "9:45 AM", event: "Kelsey Selva arrives SFO", who: "Kelsey + Brock", vehicle: "Brock's car", notes: "Stays with Brock through Thursday" }
      ]
    },
    "Thu": {
      label: "Thursday, June 11",
      sub: "Calm before the storm",
      rows: [
        { time: "All day", event: "No scheduled events", who: "—", vehicle: "—", notes: "Last chance for errands, packing, rest" }
      ]
    },
    "Fri": {
      label: "Friday, June 12",
      sub: "Arrivals · Rehearsal 2 PM · Rehearsal dinner 6 PM",
      rows: [
        { time: "12:45 AM", event: "Grant Shrable arrives SFO (DL656)", who: "Grant", vehicle: "Jacob — BMW", notes: "Overnight pickup → Hayward" },
        { time: "7:38 AM", event: "Grace Basile arrives SFO (UA694)", who: "Grace", vehicle: "Sean — Model X", notes: "Sean waits at SFO for all 3 morning arrivals" },
        { time: "8:55 AM", event: "Sofie Cortez arrives SFO (UA2177)", who: "Sofie", vehicle: "Distributed across convoy", notes: "" },
        { time: "9:17 AM", event: "Kate Goodrich arrives SFO (UA540)", who: "Kate", vehicle: "Sean — Model X", notes: "Joins Grace in Sean's car" },
        { time: "9:30 AM", event: "Pick up Ford Transit Van", who: "Jacob + Robin", vehicle: "GLS 450 → Transit Van", notes: "20 min from SFO; Jacob takes Transit, Robin takes GLS" },
        { time: "9:50 AM", event: "India Family arrives SFO (SQ32, 9 people)", who: "Jacob, Robin, Sean, Renu", vehicle: "Transit + GLS + Model X + Volvo", notes: "Distribute people + bags across 4 vehicles", highlight: true },
        { time: "10:00 AM", event: "All 4 cars depart SFO → Union City AirBNB", who: "Morning convoy", vehicle: "4-car convoy", notes: "Everyone goes to Abby's parents' first" },
        { time: "11:00 AM", event: "Emily McGrail arrives SJC (WN234)", who: "Emily", vehicle: "Uber", notes: "Waits at SJC for ~1 PM pickup by BMW" },
        { time: "11:43 AM", event: "Abigail Reed + DJ arrive SFO (F91229)", who: "Abigail + DJ", vehicle: "Own car → Union City", notes: "Picking up their own rental car" },
        { time: "12:30 PM", event: "Depart Hayward → Union City → Venue", who: "Jacob, Grant, Liam, Johann, Sofie", vehicle: "Transit Van (Jacob)", notes: "" },
        { time: "12:30 PM", event: "Depart Hayward → Union City → Venue", who: "Robin, Jaden", vehicle: "GLS 450 (Robin)", notes: "Decor in trunk" },
        { time: "12:30 PM", event: "Depart Hayward → SJC → Venue", who: "Preethy → picks up Emily", vehicle: "BMW (Preethy)", notes: "Skip Union City — direct to SJC" },
        { time: "1:10 PM", event: "Convoy departs Union City → Venue", who: "All bridesmaids + Abby + Jeff + Celeste", vehicle: "Transit + GLS + Celeste's car", notes: "Decor handed off to WW coordinator" },
        { time: "2:00 PM", event: "REHEARSAL begins", who: "Wedding party + Pastor Derrick", vehicle: "—", notes: "1 hour", highlight: true },
        { time: "3:15 PM", event: "Heading to Milpitas Women's AirBNB", who: "All bridesmaids + Abby (7)", vehicle: "Transit Van (Jeff)", notes: "" },
        { time: "3:15 PM", event: "Buca pickup, then Hayward", who: "Celeste + DJ", vehicle: "Celeste's car", notes: "Food run with Aunt Sue" },
        { time: "3:15 PM", event: "Heading to Hayward home", who: "Jacob, Jaden, Grant, Liam, Johann, Sofie", vehicle: "GLS 450 + BMW", notes: "Drop decor at venue first" },
        { time: "3:30 PM", event: "Ice run for rehearsal dinner", who: "Navin (Mama)", vehicle: "—", notes: "Load igloo with ciders + water" },
        { time: "4:00 PM", event: "Kevin sets up mic + speaker", who: "Kevin Asir", vehicle: "—", notes: "Rehearsal dinner audio" },
        { time: "4:15 PM", event: "Jeff picks up bridesmaids in Milpitas → Hayward", who: "Jeff + 7 women", vehicle: "Transit Van", notes: "After getting ready in Union City" },
        { time: "6:00 PM", event: "REHEARSAL DINNER begins at Hayward backyard", who: "79 guests", vehicle: "—", notes: "MC: Sean Asir. Buca di Beppo catered.", highlight: true },
        { time: "6:00 PM", event: "Avery Shrable arrives SFO (AA2810)", who: "Avery", vehicle: "Uber → Hayward", notes: "Joins dinner in progress" },
        { time: "9:20 PM", event: "Andrew Kondratieff arrives OAK (WN4270)", who: "Andrew", vehicle: "Uber → Hayward", notes: "Joins late, stays at Hayward" },
        { time: "10:00 PM", event: "Bridesmaids + Abby return to Milpitas", who: "7 women + Jeff", vehicle: "Transit Van (Jeff)", notes: "Jeff drives to Union City after" }
      ]
    },
    "Sat": {
      label: "Saturday, June 13",
      sub: "WEDDING DAY · Ceremony 5 PM",
      rows: [
        { time: "7:00 AM", event: "Breakfast laid out at Hayward", who: "Preethy", vehicle: "—", notes: "For overnight guests" },
        { time: "8:00 AM", event: "Trader Joe's flower run", who: "Preethy", vehicle: "—", notes: "Flowers for Sunday Thali" },
        { time: "9:00 AM", event: "Deliver flowers to Athai", who: "Jaden", vehicle: "—", notes: "" },
        { time: "10:00 AM", event: "Preethy hair appointment (–12 PM)", who: "Preethy", vehicle: "—", notes: "" },
        { time: "10:00 AM", event: "Pick up Amma (–12 PM)", who: "Jaden", vehicle: "—", notes: "" },
        { time: "Morning", event: "Bridesmaid getting-ready at Milpitas", who: "Bridesmaids + Adriana (HMU)", vehicle: "—", notes: "Adriana handles hair & makeup" },
        { time: "11:00 AM", event: "Paradise Biryani pickup", who: "Melwyn", vehicle: "—", notes: "Saturday lunch" },
        { time: "11:30 AM", event: "Lunch in Hayward backyard (–12:30 PM)", who: "Hayward crew", vehicle: "—", notes: "World Cup game 12:00–1:30 PM in parallel" },
        { time: "12:30 PM", event: "Getting ready at Hayward (–2:15 PM)", who: "Jacob + groomsmen + Sofie + Avery + parents", vehicle: "—", notes: "" },
        { time: "2:15 PM", event: "Depart Hayward → Venue", who: "Jacob + Jaden + Liam + Grant + Johann + Andrew", vehicle: "Rented SUV (Jacob)", notes: "" },
        { time: "2:15 PM", event: "Depart Hayward → Venue", who: "Robin", vehicle: "GLS 450", notes: "" },
        { time: "2:15 PM", event: "Depart Hayward → Venue", who: "Preethy + Sofie + Avery", vehicle: "BMW (Preethy)", notes: "" },
        { time: "2:30 PM", event: "Bridesmaids depart Milpitas → Venue", who: "All bridesmaids + Abby", vehicle: "Transit Van (Jeff)", notes: "" },
        { time: "3:00 PM", event: "Bridal suites open; Abby arrives", who: "Abby", vehicle: "—", notes: "Banquet Captain introduced" },
        { time: "3:15 PM", event: "Hayward group arrives venue", who: "Jacob + family", vehicle: "—", notes: "Both suites stocked" },
        { time: "3:45 PM", event: "First touch — Downstairs Stone Arches; pre-ceremony photos", who: "Jacob + Abby + bridal parties", vehicle: "—", notes: "First touch only — no first look", highlight: true },
        { time: "4:30 PM", event: "Sienna's Sweets cake & dessert drop-off", who: "Sienna's Sweets", vehicle: "—", notes: "Phone: 916-949-0253" },
        { time: "4:30 PM", event: "Guests arrive; Coffee cart serving", who: "Guests", vehicle: "—", notes: "Sunny Cups Coffee — Courtyard 4:30–6:30 PM" },
        { time: "5:00 PM", event: "CEREMONY BEGINS (10 rows × 8 across)", who: "All", vehicle: "—", notes: "Hill Top Garden. Pastor Derrick officiating. Fans at each seat.", highlight: true },
        { time: "5:30 PM", event: "Cocktail Hour begins", who: "Guests", vehicle: "—", notes: "Choice of Six Appetizers; specialty drinks (His/Hers/Ours)" },
        { time: "5:30 PM", event: "Kevin sets up piano for Jacob", who: "Kevin Asir", vehicle: "—", notes: "During cocktail hour" },
        { time: "6:30 PM", event: "Doors open for reception", who: "Guests seated", vehicle: "—", notes: "Abby bustling dress with bridesmaids" },
        { time: "6:45 PM", event: "Grand Entrance", who: "Groomsmen, Bridesmaids, B&G", vehicle: "—", notes: "" },
        { time: "6:55 PM", event: "Welcome / Blessing", who: "FOB + FOG", vehicle: "—", notes: "" },
        { time: "7:00 PM", event: "Trivia game announced + Meal service", who: "DJ announces", vehicle: "—", notes: "Buffet release: tables 2, 4, then numerical", highlight: true },
        { time: "7:40 PM", event: "Trivia winners announced + Prizes", who: "DJ + winning table", vehicle: "—", notes: "Prizes behind DJ booth" },
        { time: "7:50 PM", event: "Cake cutting + Bouquet dedication + Thank-you speech", who: "Jacob + Abby", vehicle: "—", notes: "" },
        { time: "8:00 PM", event: "Speeches", who: "Adriana (MOH), Jaden (BM)", vehicle: "—", notes: "" },
        { time: "8:15 PM", event: "Sunset photos + Dessert table opens", who: "Jacob + Abby + photographer", vehicle: "—", notes: "Guests at dessert table", highlight: true },
        { time: "8:30 PM", event: "Jacob piano performance (1 song)", who: "Jacob (playing + singing)", vehicle: "—", notes: "Keyboard via Kevin Asir", highlight: true },
        { time: "8:35 PM", event: "First Dance", who: "Jacob + Abby", vehicle: "—", notes: "" },
        { time: "8:40 PM", event: "Mother/Son Dance", who: "Jacob + Preethy", vehicle: "—", notes: "" },
        { time: "8:45 PM", event: "Father/Daughter Dance", who: "Abby + Jeff", vehicle: "—", notes: "" },
        { time: "8:50 PM", event: "Open dancing begins", who: "All", vehicle: "—", notes: "Glowsticks in basket; flipflops on bar top" },
        { time: "10:30 PM", event: "Bar last call", who: "All", vehicle: "—", notes: "" },
        { time: "10:55 PM", event: "Grand Exit", who: "Jacob + Abby", vehicle: "—", notes: "Private last dance, then grand exit with glow sticks", highlight: true },
        { time: "11:00 PM", event: "Event ends — Departures", who: "Multiple groups", vehicle: "Multiple cars", notes: "Bar closes" },
        { time: "11:00 PM", event: "Heading to Milpitas Women's AirBNB", who: "6 bridesmaids", vehicle: "Transit Van (Jeff)", notes: "Abby leaves with Jacob" },
        { time: "11:00 PM", event: "Heading to Hayward home", who: "Groomsmen + Girls (7)", vehicle: "5-car caravan: Robin, Preethy, Sean, Renu, Jey", notes: "" },
        { time: "11:00 PM", event: "Heading to Hotel", who: "Jacob + Abby alone", vehicle: "Jacob's SUV", notes: "656 America Center Ct, San Jose" },
        { time: "11:00 PM+", event: "Preethy (departure contact) handles pack-up", who: "Preethy + Robin + Edwin family", vehicle: "—", notes: "Pick up: fans, glow sticks + basket, welcome sign, guest book sign, knot tying cross, card box, table numbers, picture frames, guest book, cake, slippers, candles, flowers. Until midnight." }
      ]
    },
    "Sun": {
      label: "Sunday, June 14",
      sub: "Indian Thali ceremony 4 PM · Honeymoon departure",
      rows: [
        { time: "8:00 AM", event: "Breakfast laid out at Hayward", who: "Edwin family", vehicle: "—", notes: "For overnight guests" },
        { time: "8:00 AM", event: "Move furniture inside the house (–9 AM)", who: "Groomsmen + family", vehicle: "—", notes: "Clear backyard for setup" },
        { time: "9:00 AM", event: "Backyard setup for Thali ceremony (–11:30 AM)", who: "Multiple — all-hands", vehicle: "—", notes: "Tables + chairs + sofa, gifts table, return gifts, guest book, fans, card box, caterer table", highlight: true },
        { time: "9:05 AM", event: "Emily McGrail departs Milpitas → SJC (WN3666)", who: "Emily", vehicle: "Uber", notes: "" },
        { time: "9:30 AM", event: "Jeff returns Ford Transit Van", who: "Jeff Tori", vehicle: "Transit Van", notes: "Drop-off at rental location" },
        { time: "10:00 AM", event: "Cake + Ice pickup", who: "Navin (Mama)", vehicle: "—", notes: "" },
        { time: "Morning", event: "Jacob + Abby: brunch at Union City AirBNB → Hayward", who: "Jacob + Abby", vehicle: "—", notes: "Arrive Hayward by 1:30 PM" },
        { time: "11:30 AM", event: "Pizza pickup", who: "Sean Asir", vehicle: "Model X", notes: "Sunday lunch" },
        { time: "Throughout AM", event: "Milpitas group → Hayward", who: "Kate, Grace, Kelsey, Abigail + DJ", vehicle: "Abby's parents + family", notes: "Self-coordinated" },
        { time: "12:00 PM", event: "Lunch in backyard (pizza)", who: "All in-town guests", vehicle: "—", notes: "" },
        { time: "12:45 PM", event: "Grant + Avery Uber → SFO (WN3641 at 2:25 PM)", who: "Grant + Avery", vehicle: "Uber", notes: "Will miss reception" },
        { time: "1:30 PM", event: "Bridesmaids getting ready in saree (–2:30 PM)", who: "Bridesmaids + Preethy + Karun", vehicle: "—", notes: "Saree wrapping help" },
        { time: "2:30 PM", event: "Preethy getting ready", who: "Preethy", vehicle: "—", notes: "" },
        { time: "3:00 PM", event: "Abby getting ready", who: "Abby + Preethy", vehicle: "—", notes: "" },
        { time: "3:00 PM", event: "Caterer arrives + drinks setup", who: "Caterer + Melwyn + Navin", vehicle: "—", notes: "Appetizer table, tea/sarbath, water/lemonade, soda + trough" },
        { time: "3:00 PM", event: "Mic + speaker setup", who: "Kevin Asir", vehicle: "—", notes: "" },
        { time: "4:00 PM", event: "INDIAN THALI CEREMONY begins at Hayward", who: "All in-town family + bridal party", vehicle: "—", notes: "No fixed end time", highlight: true },
        { time: "8:00 PM", event: "Abigail Reed + DJ depart Hayward → SFO (F93440 9:43 PM)", who: "Abigail + DJ", vehicle: "Own car", notes: "Self-coordinated" },
        { time: "8:45 PM", event: "Jacob + Abby depart Hayward → SFO (honeymoon 10:54 PM)", who: "Jacob + Abby + Kate + Kyle", vehicle: "Model X (Sean driving)", notes: "Honeymoon flight; Kate + Kyle on 11:59 PM flight", highlight: true }
      ]
    },
    "Mon": {
      label: "Monday, June 15",
      sub: "Final departures",
      rows: [
        { time: "6:15 AM", event: "Grace Basile departs → SFO (UA 2019)", who: "Grace", vehicle: "Abby's parents", notes: "Pre-dawn run" },
        { time: "9:00 AM", event: "Andrew Kondratieff departs Hayward → OAK", who: "Andrew", vehicle: "Driver TBD", notes: "Arrive 9:30 AM" },
        { time: "11:30 AM", event: "Liam + Sofie depart Hayward → SFO", who: "Liam + Sofie", vehicle: "Driver TBD", notes: "" },
        { time: "3:10 PM", event: "Kelsey Selva departs", who: "Kelsey + Brock", vehicle: "Self (with Brock)", notes: "" }
      ]
    }
  }
};
