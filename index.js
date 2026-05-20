"use strict";

const translations = {
  de: {
    brand_sub: "Restaurant · Nittenau",
    nav_about: "Über uns",
    nav_gallery: "Galerie",
    nav_menu: "Speisekarte",
    nav_hours: "Öffnungszeiten",
    nav_contact: "Kontakt",
    nav_reserve: "Reservieren",
    nav_impressum: "Impressum",
    nav_datenschutz: "Datenschutz",
    hero_eyebrow: "Griechisches Restaurant seit Jahren",
    hero_line1: "Authentische",
    hero_line2: "Griechische",
    hero_line3: "Küche",
    hero_sub:
      "Erleben Sie Griechenland in Nittenau — frisch, authentisch, mit Herz zubereitet.",
    hero_btn_menu: "Speisekarte",
    hero_btn_reserve: "Tisch reservieren",
    hero_scroll: "Entdecken",
    info_weekdays: "Mo–Sa",
    info_weekdays_time: "17:00 – 22:00",
    info_sunday: "Sonntag",
    info_sunday_time: "11:30 – 22:00",
    info_address_label: "Adresse",
    info_phone_label: "Telefon",
    about_badge: "Seit Jahren\nIhr Lieblingsgrieche",
    about_title: "Ein Stück\n<em>Griechenland</em>\nin Bayern",
    about_p1:
      "Willkommen im Restaurant Mykonos in Nittenau! Wir bringen die Wärme, die Aromen und die Herzlichkeit Griechenlands direkt zu Ihnen – in einem gemütlichen, familiären Ambiente mit rustikalem Charme.",
    about_p2:
      "Unser Küchenchef bereitet täglich frische, authentische Gerichte zu – vom klassischen Gyros über saftige Bifteki bis hin zu feinen Fischspezialitäten. Lassen Sie sich verwöhnen!",
    about_cta: "Tisch reservieren",
    pillar1: "Frische Zutaten täglich",
    pillar2: "Authentische Rezepte",
    pillar3: "Griechische Weine",
    feat1: "Frische Meeresfrüchte",
    feat2: "Griechische Salate",
    feat3: "Vom Holzkohlegrill",
    feat4: "Ouzo & Metaxa",
    feat5: "Familiäre Atmosphäre",
    gallery_title: "Unser Restaurant\n<em>in Bildern</em>",
    gal1: "Gemütlicher Gastraum",
    gal2: "Griechische Spezialitäten",
    gal3: "Kaminzimmer",
    gal4: "Für besondere Anlässe",
    gal5: "Frisch zubereitet",
    gal6: "Stimmungsvolles Ambiente",
    gal7: "Bar & Lounge",
    gal8: "Öffnungszeiten",
    menu_title: "Unsere\n<em>Spezialitäten</em>",
    menu_sub:
      "Täglich frisch zubereitet – vom Gyros-Teller bis zur Zanderfilet-Pfanne",
    tab_starter: "Vorspeise & Salat",
    tab_grill: "Vom Grill",
    tab_mix: "Mix-Teller",
    tab_gratin: "Überbacken",
    tab_fish: "Fisch",
    tab_kids: "Kinder",
    tab_dessert: "Dessert",
    tab_drinks: "Getränke",
    cat_starters: "Vorspeisen",
    cat_salads: "Salate",
    cat_sides: "Beilagen",
    cat_fish: "Fischgerichte",
    cat_kids: "Kinder-Teller",
    cat_coffee: "Kaffee",
    cat_beer: "Bier",
    cat_wine: "Wein",
    cat_spirits: "Aperitif & Spirituosen",
    cat_soft: "Alkoholfrei",
    m1_desc: "Joghurt mit Knoblauch und Gurke",
    m2_desc: "Gebratener Schafskäse",
    m3_name: "Peperoni vom Grill",
    m4_name: "Knoblauchbrot",
    m5_name: "Pita mit Knoblauch und Tzatziki",
    m6_name: "Pita ohne",
    m20_name: "Pommes",
    m21_name: "Reis",
    m22_name: "Kroketten",
    m30_name: "Kleiner Bauernsalat",
    m31_name: "Kleiner Thunfischsalat",
    m32_name: "Kleiner gemischter Salat",
    m33_name: "Großer Bauernsalat",
    m34_name: "Großer Thunfischsalat",
    m35_name: "Großer gemischter Salat",
    grill_side: "mit Pommes, Reis und Tzatziki",
    kids_side: "mit Pommes und Tzatziki",
    m52_name: "Schweinesteak-Teller",
    m52_desc: "mit Pommes, Reis und Kräutercreme",
    m53_desc: "Hackfleischröllchen – mit Pommes, Reis und Tzatziki",
    m54_name: "Bifteki ★",
    m54_desc:
      "Hackfleischsteak gefüllt mit Schafskäse, Pommes, Reis und Tzatziki",
    m55_name: "Hähnchenbrustfilet",
    m56_desc: "Gyros, Souvlaki, Zwiebeln – Pommes, Reis und Tzatziki",
    m57_name: "Grill-Teller ★",
    m57_desc: "Gyros, Soutzoukaki, Steak, Souvlaki – Pommes, Reis und Tzatziki",
    m58_desc: "Gyros, Kalamari, Zwiebeln – Pommes, Reis und Tzatziki",
    m59_desc:
      "Gyros, Soutzoukaki, Hähnchenbrustfilet, Souvlaki – Pommes, Reis und Tzatziki",
    m60_name: "Mykonos-Teller ★",
    m60_desc:
      "Gyros, Kalamari, Steak, Souvlaki, Zwiebeln – Pommes, Reis und Tzatziki",
    m80_name: "Gyros überbacken",
    m80_desc: "mit Metaxasauce, Käse und Pommes",
    m81_name: "Hähnchenbrustfilet überbacken",
    m82_name: "Steak überbacken",
    m83_name: "Hackfleischröllchen überbacken",
    m84_name: "Hackfleischsteak gefüllt überbacken",
    m84_desc: "mit Schafskäse, Metaxasauce, Käse und Pommes",
    m90_name: "Kalamari frittiert",
    m91_name: "Zanderfilet ★",
    m103_name: "Chicken Nuggets",
    m104_name: "Fischstäbchen",
    m400_name: "Kaffee Crema",
    m500_name: "Joghurt mit Honig und Walnüssen ★",
    m501_name: "Schokoladenmousse",
    m502_name: "Gemischtes Eis mit Sahne",
    m200_name: "Helles",
    m202_name: "Bier alkoholfrei",
    m300_name: "Weißwein trocken",
    m304_name: "Roséwein trocken",
    m306_name: "Rotwein trocken",
    m310_desc: "0,2 l · griechischer Harzwein",
    m162_name: "Wasser Sprudel 0,3 l / 0,5 l",
    m167_name: "Orangensaft 0,3 l / 0,5 l",
    hours_title: "Wann wir\n<em>für Sie da sind</em>",
    hours_note: "Jeden Sonntag & Feiertag gleiche Öffnungszeiten",
    day_mon: "Montag",
    day_tue: "Dienstag",
    day_wed: "Mittwoch",
    day_thu: "Donnerstag",
    day_fri: "Freitag",
    day_sat: "Samstag",
    day_sun: "Sonntag & Feiertag",
    closed: "Ruhetag",
    res_eyebrow: "Reservierung",
    res_title: "Tisch\n<em>reservieren</em>",
    res_desc:
      "Reservieren Sie Ihren Tisch direkt über das Formular oder rufen Sie uns an.",
    form_name: "Ihr Name *",
    form_phone: "Telefon *",
    form_date: "Datum *",
    form_time: "Uhrzeit *",
    form_guests: "Personen",
    form_notes: "Anmerkungen",
    form_notes_placeholder: "Besondere Wünsche, Allergien, Anlass …",
    form_submit: "Reservierung anfragen →",
    form_note: "Wir bestätigen Ihre Reservierung telefonisch oder per E-Mail.",
    guests_1: "1 Person",
    guests_2: "2 Personen",
    guests_3: "3 Personen",
    guests_4: "4 Personen",
    guests_5: "5 Personen",
    guests_6: "6 Personen",
    guests_7: "7+ Personen",
    success_title: "Vielen Dank!",
    success_msg: "Ihre Anfrage ist eingegangen. Wir melden uns bald bei Ihnen.",
    contact_eyebrow: "Kontakt & Anfahrt",
    contact_title: "So finden Sie\n<em>uns</em>",
    footer_tagline: "Griechisches Restaurant · Nittenau",
    footer_copy: "© 2025 Restaurant Mykonos Nittenau — Alle Rechte vorbehalten",
    footer_closed: "Dienstag Ruhetag",
  },
  en: {
    brand_sub: "Restaurant · Nittenau",
    nav_about: "About Us",
    nav_gallery: "Gallery",
    nav_menu: "Menu",
    nav_hours: "Opening Hours",
    nav_contact: "Contact",
    nav_reserve: "Reserve",
    nav_impressum: "Legal Notice",
    nav_datenschutz: "Privacy",
    hero_eyebrow: "Greek Restaurant since many years",
    hero_line1: "Authentic",
    hero_line2: "Greek",
    hero_line3: "Cuisine",
    hero_sub:
      "Experience Greece in Nittenau — fresh, authentic, made with heart.",
    hero_btn_menu: "Menu",
    hero_btn_reserve: "Reserve a Table",
    hero_scroll: "Discover",
    info_weekdays: "Mon–Sat",
    info_weekdays_time: "5:00 PM – 10:00 PM",
    info_sunday: "Sunday",
    info_sunday_time: "11:30 AM – 10:00 PM",
    info_address_label: "Address",
    info_phone_label: "Phone",
    about_badge: "Your favourite\nGreek restaurant",
    about_title: "A Piece of\n<em>Greece</em>\nin Bavaria",
    about_p1:
      "Welcome to Restaurant Mykonos in Nittenau! We bring the warmth, the aromas, and the hospitality of Greece right to your table — in a cosy, family atmosphere with rustic charm.",
    about_p2:
      "Our chef prepares fresh, authentic dishes daily — from classic gyros to juicy bifteki to fine fish specialities. Let yourself be spoiled!",
    about_cta: "Reserve a Table",
    pillar1: "Fresh ingredients daily",
    pillar2: "Authentic recipes",
    pillar3: "Greek wines",
    feat1: "Fresh seafood",
    feat2: "Greek salads",
    feat3: "Charcoal grilled",
    feat4: "Ouzo & Metaxa",
    feat5: "Family atmosphere",
    gallery_title: "Our Restaurant\n<em>in Pictures</em>",
    gal1: "Cosy dining room",
    gal2: "Greek specialities",
    gal3: "Fireplace room",
    gal4: "For special occasions",
    gal5: "Freshly prepared",
    gal6: "Atmospheric ambience",
    gal7: "Bar & Lounge",
    gal8: "Opening hours",
    menu_title: "Our\n<em>Specialities</em>",
    menu_sub: "Freshly prepared daily — from gyros plate to pike-perch fillet",
    tab_starter: "Starter & Salad",
    tab_grill: "From the Grill",
    tab_mix: "Mix Plates",
    tab_gratin: "Gratinated",
    tab_fish: "Fish",
    tab_kids: "Children",
    tab_dessert: "Dessert",
    tab_drinks: "Drinks",
    cat_starters: "Starters",
    cat_salads: "Salads",
    cat_sides: "Sides",
    cat_fish: "Fish Dishes",
    cat_kids: "Children's Plates",
    cat_coffee: "Coffee",
    cat_beer: "Beer",
    cat_wine: "Wine",
    cat_spirits: "Aperitif & Spirits",
    cat_soft: "Non-Alcoholic",
    m1_desc: "Yogurt with garlic and cucumber",
    m2_desc: "Fried sheep's cheese",
    m3_name: "Grilled peppers",
    m4_name: "Garlic bread",
    m5_name: "Pita with garlic and tzatziki",
    m6_name: "Plain pita",
    m20_name: "French fries",
    m21_name: "Rice",
    m22_name: "Croquettes",
    m30_name: "Small farmer's salad",
    m31_name: "Small tuna salad",
    m32_name: "Small mixed salad",
    m33_name: "Large farmer's salad",
    m34_name: "Large tuna salad",
    m35_name: "Large mixed salad",
    grill_side: "with fries, rice and tzatziki",
    kids_side: "with fries and tzatziki",
    m52_name: "Pork steak plate",
    m52_desc: "with fries, rice and herb cream",
    m53_desc: "Minced meat rolls – with fries, rice and tzatziki",
    m54_name: "Bifteki ★",
    m54_desc: "Minced meat steak filled with feta, fries, rice and tzatziki",
    m55_name: "Chicken breast fillet",
    m56_desc: "Gyros, souvlaki, onions – fries, rice and tzatziki",
    m57_name: "Grill plate ★",
    m57_desc: "Gyros, soutzoukaki, steak, souvlaki – fries, rice and tzatziki",
    m58_desc: "Gyros, calamari, onions – fries, rice and tzatziki",
    m59_desc:
      "Gyros, soutzoukaki, chicken breast, souvlaki – fries, rice and tzatziki",
    m60_name: "Mykonos plate ★",
    m60_desc:
      "Gyros, calamari, steak, souvlaki, onions – fries, rice and tzatziki",
    m80_name: "Gyros gratinated",
    m80_desc: "with Metaxa sauce, cheese and fries",
    m81_name: "Chicken breast gratinated",
    m82_name: "Steak gratinated",
    m83_name: "Minced meat rolls gratinated",
    m84_name: "Filled minced steak gratinated",
    m84_desc: "with feta, Metaxa sauce, cheese and fries",
    m90_name: "Fried calamari",
    m91_name: "Pike-perch fillet ★",
    m103_name: "Chicken nuggets",
    m104_name: "Fish fingers",
    m400_name: "Filter coffee",
    m500_name: "Yogurt with honey and walnuts ★",
    m501_name: "Chocolate mousse",
    m502_name: "Mixed ice cream with cream",
    m200_name: "Lager",
    m202_name: "Non-alcoholic beer",
    m300_name: "Dry white wine",
    m304_name: "Dry rosé wine",
    m306_name: "Dry red wine",
    m310_desc: "0.2 l · Greek resin wine",
    m162_name: "Sparkling water 0.3 l / 0.5 l",
    m167_name: "Orange juice 0.3 l / 0.5 l",
    hours_title: "When We Are\n<em>Here for You</em>",
    hours_note: "Same opening hours every Sunday & public holiday",
    day_mon: "Monday",
    day_tue: "Tuesday",
    day_wed: "Wednesday",
    day_thu: "Thursday",
    day_fri: "Friday",
    day_sat: "Saturday",
    day_sun: "Sunday & Public Holiday",
    closed: "Day off",
    res_eyebrow: "Reservation",
    res_title: "Reserve\n<em>a Table</em>",
    res_desc: "Reserve your table directly via the form or give us a call.",
    form_name: "Your Name *",
    form_phone: "Phone *",
    form_date: "Date *",
    form_time: "Time *",
    form_guests: "Guests",
    form_notes: "Notes",
    form_notes_placeholder: "Special requests, allergies, occasion …",
    form_submit: "Request Reservation →",
    form_note: "We will confirm your reservation by phone or email.",
    guests_1: "1 Person",
    guests_2: "2 People",
    guests_3: "3 People",
    guests_4: "4 People",
    guests_5: "5 People",
    guests_6: "6 People",
    guests_7: "7+ People",
    success_title: "Thank you!",
    success_msg:
      "Your request has been received. We will get back to you soon.",
    contact_eyebrow: "Contact & Directions",
    contact_title: "How to Find\n<em>Us</em>",
    footer_tagline: "Greek Restaurant · Nittenau",
    footer_copy: "© 2025 Restaurant Mykonos Nittenau — All rights reserved",
    footer_closed: "Tuesday closed",
  },
  el: {
    brand_sub: "Εστιατόριο · Nittenau",
    nav_about: "Σχετικά",
    nav_gallery: "Γκαλερί",
    nav_menu: "Μενού",
    nav_hours: "Ωράριο",
    nav_contact: "Επικοινωνία",
    nav_reserve: "Κράτηση",
    nav_impressum: "Νομικές",
    nav_datenschutz: "Απόρρητο",
    hero_eyebrow: "Ελληνικό Εστιατόριο εδώ και χρόνια",
    hero_line1: "Αυθεντική",
    hero_line2: "Ελληνική",
    hero_line3: "Κουζίνα",
    hero_sub: "Ζήστε την Ελλάδα στο Nittenau — φρέσκο, αυθεντικό, με καρδιά.",
    hero_btn_menu: "Μενού",
    hero_btn_reserve: "Κράτηση Τραπεζιού",
    hero_scroll: "Ανακαλύψτε",
    info_weekdays: "Δε–Σα",
    info_weekdays_time: "17:00 – 22:00",
    info_sunday: "Κυριακή",
    info_sunday_time: "11:30 – 22:00",
    info_address_label: "Διεύθυνση",
    info_phone_label: "Τηλέφωνο",
    about_badge: "Το αγαπημένο σας\nελληνικό εστιατόριο",
    about_title: "Μια γωνιά της\n<em>Ελλάδας</em>\nστη Βαυαρία",
    about_p1:
      "Καλωσήρθατε στο Εστιατόριο Mykonos στο Nittenau! Σας φέρνουμε τη ζεστασιά, τα αρώματα και τη φιλοξενία της Ελλάδας — σε ένα άνετο, οικογενειακό περιβάλλον με ρουστίκ γοητεία.",
    about_p2:
      "Ο σεφ μας ετοιμάζει φρέσκα, αυθεντικά πιάτα καθημερινά — από κλασικό γύρο και χυμάτο μπιφτέκι μέχρι εκλεκτά ψαρικά. Αφεθείτε!",
    about_cta: "Κράτηση Τραπεζιού",
    pillar1: "Φρέσκα υλικά καθημερινά",
    pillar2: "Αυθεντικές συνταγές",
    pillar3: "Ελληνικά κρασιά",
    feat1: "Φρέσκα θαλασσινά",
    feat2: "Ελληνικές σαλάτες",
    feat3: "Ψητά στα κάρβουνα",
    feat4: "Ούζο & Μεταξά",
    feat5: "Οικογενειακή ατμόσφαιρα",
    gallery_title: "Το εστιατόριό μας\n<em>σε εικόνες</em>",
    gal1: "Άνετη αίθουσα",
    gal2: "Ελληνικές σπεσιαλιτέ",
    gal3: "Δωμάτιο με τζάκι",
    gal4: "Για ξεχωριστές στιγμές",
    gal5: "Φρεσκομαγειρεμένο",
    gal6: "Μοναδική ατμόσφαιρα",
    gal7: "Μπαρ & Λάουντζ",
    gal8: "Ωράριο",
    menu_title: "Οι\n<em>Σπεσιαλιτέ</em> μας",
    menu_sub: "Φρεσκομαγειρεμένο καθημερινά — από γύρο έως φιλέτο πέρκας",
    tab_starter: "Ορεκτικά & Σαλάτα",
    tab_grill: "Από τη Σχάρα",
    tab_mix: "Mix Πιάτα",
    tab_gratin: "Γκρατέν",
    tab_fish: "Ψάρια",
    tab_kids: "Παιδικά",
    tab_dessert: "Επιδόρπιο",
    tab_drinks: "Ποτά",
    cat_starters: "Ορεκτικά",
    cat_salads: "Σαλάτες",
    cat_sides: "Γαρνιτούρες",
    cat_fish: "Ψαρικά",
    cat_kids: "Παιδικά Πιάτα",
    cat_coffee: "Καφές",
    cat_beer: "Μπύρα",
    cat_wine: "Κρασί",
    cat_spirits: "Απεριτίφ & Σπίρτα",
    cat_soft: "Αναψυκτικά",
    m1_desc: "Γιαούρτι με σκόρδο και αγγούρι",
    m2_desc: "Τηγανητό φέτα",
    m3_name: "Πιπεριές στη σχάρα",
    m4_name: "Ψωμί σκόρδου",
    m5_name: "Πίτα με σκόρδο και τζατζίκι",
    m6_name: "Πίτα σκέτη",
    m20_name: "Τηγανητές πατάτες",
    m21_name: "Ρύζι",
    m22_name: "Κροκέτες",
    m30_name: "Μικρή χωριάτικη σαλάτα",
    m31_name: "Μικρή σαλάτα τόνου",
    m32_name: "Μικτή σαλάτα",
    m33_name: "Μεγάλη χωριάτικη σαλάτα",
    m34_name: "Μεγάλη σαλάτα τόνου",
    m35_name: "Μεγάλη μικτή σαλάτα",
    grill_side: "με πατάτες, ρύζι και τζατζίκι",
    kids_side: "με πατάτες και τζατζίκι",
    m52_name: "Μπριζόλα χοιρινή",
    m52_desc: "με πατάτες, ρύζι και κρέμα βοτάνων",
    m53_desc: "Κεφτεδάκια – με πατάτες, ρύζι και τζατζίκι",
    m54_name: "Μπιφτέκι ★",
    m54_desc: "Μπιφτέκι γεμιστό με φέτα, πατάτες, ρύζι και τζατζίκι",
    m55_name: "Φιλέτο κοτόπουλου",
    m56_desc: "Γύρος, σουβλάκι, κρεμμύδια – πατάτες, ρύζι και τζατζίκι",
    m57_name: "Μικτή σχάρα ★",
    m57_desc:
      "Γύρος, σουτζουκάκια, μπριζόλα, σουβλάκι – πατάτες, ρύζι και τζατζίκι",
    m58_desc: "Γύρος, καλαμαράκια, κρεμμύδια – πατάτες, ρύζι και τζατζίκι",
    m59_desc:
      "Γύρος, σουτζουκάκια, κοτόπουλο, σουβλάκι – πατάτες, ρύζι και τζατζίκι",
    m60_name: "Πιάτο Μυκόνου ★",
    m60_desc:
      "Γύρος, καλαμαράκια, μπριζόλα, σουβλάκι, κρεμμύδια – πατάτες, ρύζι και τζατζίκι",
    m80_name: "Γύρος γκρατέν",
    m80_desc: "με σάλτσα Μεταξά, τυρί και πατάτες",
    m81_name: "Κοτόπουλο γκρατέν",
    m82_name: "Μπριζόλα γκρατέν",
    m83_name: "Σουτζουκάκια γκρατέν",
    m84_name: "Γεμιστό μπιφτέκι γκρατέν",
    m84_desc: "με φέτα, σάλτσα Μεταξά, τυρί και πατάτες",
    m90_name: "Καλαμαράκια τηγανητά",
    m91_name: "Φιλέτο πέρκας ★",
    m103_name: "Chicken nuggets",
    m104_name: "Ψαράκια παναρισμένα",
    m400_name: "Καφές φίλτρου",
    m500_name: "Γιαούρτι με μέλι και καρύδια ★",
    m501_name: "Μους σοκολάτας",
    m502_name: "Ανάμικτο παγωτό με σαντιγί",
    m200_name: "Λάγκερ μπύρα",
    m202_name: "Μπύρα χωρίς αλκοόλ",
    m300_name: "Λευκό κρασί ξηρό",
    m304_name: "Ροζέ κρασί ξηρό",
    m306_name: "Κόκκινο κρασί ξηρό",
    m310_desc: "0,2 l · ελληνικό ρετσίνα",
    m162_name: "Ανθρακούχο νερό 0,3 l / 0,5 l",
    m167_name: "Χυμός πορτοκαλιού 0,3 l / 0,5 l",
    hours_title: "Πότε είμαστε\n<em>εδώ για σας</em>",
    hours_note: "Κάθε Κυριακή & αργία ίδιο ωράριο",
    day_mon: "Δευτέρα",
    day_tue: "Τρίτη",
    day_wed: "Τετάρτη",
    day_thu: "Πέμπτη",
    day_fri: "Παρασκευή",
    day_sat: "Σάββατο",
    day_sun: "Κυριακή & Αργίες",
    closed: "Ρεπό",
    res_eyebrow: "Κράτηση",
    res_title: "Κράτηση\n<em>Τραπεζιού</em>",
    res_desc: "Κάντε κράτηση απευθείας μέσω φόρμας ή τηλεφωνικά.",
    form_name: "Ονοματεπώνυμο *",
    form_phone: "Τηλέφωνο *",
    form_date: "Ημερομηνία *",
    form_time: "Ώρα *",
    form_guests: "Άτομα",
    form_notes: "Σημειώσεις",
    form_notes_placeholder: "Ειδικές επιθυμίες, αλλεργίες, αφορμή …",
    form_submit: "Αίτηση κράτησης →",
    form_note: "Θα επιβεβαιώσουμε την κράτησή σας τηλεφωνικά ή μέσω email.",
    guests_1: "1 Άτομο",
    guests_2: "2 Άτομα",
    guests_3: "3 Άτομα",
    guests_4: "4 Άτομα",
    guests_5: "5 Άτομα",
    guests_6: "6 Άτομα",
    guests_7: "7+ Άτομα",
    success_title: "Ευχαριστούμε!",
    success_msg: "Το αίτημά σας ελήφθη. Θα επικοινωνήσουμε σύντομα μαζί σας.",
    contact_eyebrow: "Επικοινωνία & Οδηγίες",
    contact_title: "Πώς να μας\n<em>βρείτε</em>",
    footer_tagline: "Ελληνικό Εστιατόριο · Nittenau",
    footer_copy:
      "© 2025 Restaurant Mykonos Nittenau — Με επιφύλαξη παντός δικαιώματος",
    footer_closed: "Τρίτη κλειστά",
  },
};

let currentLang = "de";

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!t[key]) return;
    const val = t[key];
    if (el.tagName === "H2" || el.tagName === "H1") {
      el.innerHTML = val.replace(/\n/g, "<br/>");
    } else {
      el.textContent = val;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key]) el.placeholder = t[key];
  });

  const select = document.querySelector('select[name="guests"]');
  if (select) {
    const opts = select.querySelectorAll("option");
    const keys = [
      "guests_1",
      "guests_2",
      "guests_3",
      "guests_4",
      "guests_5",
      "guests_6",
      "guests_7",
    ];
    opts.forEach((opt, i) => {
      if (t[keys[i]]) opt.textContent = t[keys[i]];
    });
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  try {
    localStorage.setItem("mykonos-lang", lang);
  } catch (e) {}
}

(function initLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;
  document.body.style.overflow = "hidden";

  function done() {
    loader.classList.add("done");
    document.body.style.overflow = "";
  }

  if (document.readyState === "complete") {
    setTimeout(done, 1800);
  } else {
    window.addEventListener("load", () => setTimeout(done, 1800), {
      once: true,
    });
  }
})();

(function initLanguage() {
  let saved = "de";
  try {
    saved = localStorage.getItem("mykonos-lang") || "de";
  } catch (e) {}
  applyTranslations(saved);

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".lang-btn");
    if (btn && btn.dataset.lang) applyTranslations(btn.dataset.lang);
  });
})();

(function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  const navLinks = document.querySelectorAll(".nav-link");
  let ticking = false;

  function updateNav() {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(updateNav);
        ticking = true;
      }
    },
    { passive: true },
  );

  updateNav();

  const sections = document.querySelectorAll("section[id]");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === "#" + entry.target.id,
            );
          });
        }
      });
    },
    { threshold: 0.35 },
  );

  sections.forEach((s) => io.observe(s));
})();

(function initMobileMenu() {
  const burger = document.getElementById("burger");
  const overlay = document.getElementById("mobileOverlay");
  const closeBtn = document.getElementById("mobileClose");
  if (!burger || !overlay) return;

  function openMenu() {
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    burger.classList.add("open");
    burger.setAttribute("aria-expanded", "true");
    burger.setAttribute("aria-label", "Menü schließen");
    document.body.style.overflow = "hidden";
    setTimeout(() => closeBtn && closeBtn.focus(), 100);
  }

  function closeMenu() {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Menü öffnen");
    document.body.style.overflow = "";
    burger.focus();
  }

  burger.addEventListener("click", () => {
    if (overlay.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (closeBtn) closeBtn.addEventListener("click", closeMenu);

  overlay.querySelectorAll("[data-close]").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  const bg = overlay.querySelector(".mobile-overlay-bg");
  if (bg) bg.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720 && overlay.classList.contains("open")) {
      closeMenu();
    }
  });
})();

(function initHeroSlides() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".dot");
  if (!slides.length) return;

  let current = 0;
  let timer = null;

  function goTo(index) {
    slides[current].classList.remove("active");
    if (dots[current]) {
      dots[current].classList.remove("active");
      dots[current].setAttribute("aria-selected", "false");
    }
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("active");
    if (dots[current]) {
      dots[current].classList.add("active");
      dots[current].setAttribute("aria-selected", "true");
    }
  }

  function start() {
    timer = setInterval(() => goTo(current + 1), 5500);
  }
  function reset() {
    clearInterval(timer);
    start();
  }

  dots.forEach((dot, i) =>
    dot.addEventListener("click", () => {
      goTo(i);
      reset();
    }),
  );
  start();
})();

(function initScrollReveal() {
  const targets = document.querySelectorAll(
    "[data-reveal], [data-reveal-left], [data-reveal-right], .mitem, .ccard, .hrow, .feature, .pillar",
  );
  if (!targets.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const siblings = [
          ...(entry.target.parentElement?.children || []),
        ].filter(
          (el) =>
            el.hasAttribute("data-reveal") ||
            el.hasAttribute("data-reveal-left") ||
            el.hasAttribute("data-reveal-right") ||
            el.classList.contains("mitem") ||
            el.classList.contains("ccard") ||
            el.classList.contains("hrow") ||
            el.classList.contains("feature") ||
            el.classList.contains("pillar"),
        );

        const idx = siblings.indexOf(entry.target);
        const delay = idx * 80;

        setTimeout(() => {
          entry.target.classList.add("visible");
          entry.target.style.transitionDelay = "";
        }, delay);

        io.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
  );

  targets.forEach((t) => {
    t.style.transitionDelay = "0ms";
    io.observe(t);
  });
})();

(function initLightbox() {
  const items = document.querySelectorAll(".g-item");
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbCap = document.getElementById("lbCaption");
  const lbClose = document.getElementById("lbClose");
  const lbPrev = document.getElementById("lbPrev");
  const lbNext = document.getElementById("lbNext");
  if (!lb || !items.length) return;

  const images = [];
  items.forEach((item) => {
    const img = item.querySelector("img");
    const cap = item.querySelector(".g-caption");
    images.push({
      src: img?.src,
      alt: img?.alt || "",
      cap: cap?.textContent || "",
    });
  });

  let current = 0;
  let opener = null;

  function show() {
    lbImg.src = images[current].src;
    lbImg.alt = images[current].alt;
    lbCap.textContent = images[current].cap;
  }

  function open(index, el) {
    current = index;
    opener = el;
    show();
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    setTimeout(() => lbClose?.focus(), 50);
  }

  function close() {
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    opener?.focus();
  }

  function prev() {
    current = (current - 1 + images.length) % images.length;
    show();
  }
  function next() {
    current = (current + 1) % images.length;
    show();
  }

  items.forEach((item, i) =>
    item.addEventListener("click", () => open(i, item)),
  );
  lbClose?.addEventListener("click", close);
  lbPrev?.addEventListener("click", prev);
  lbNext?.addEventListener("click", next);
  lb.addEventListener("click", (e) => {
    if (e.target === lb) close();
  });

  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "ArrowLeft") prev();
    else if (e.key === "ArrowRight") next();
    else if (e.key === "Escape") close();
  });
})();

(function initMenuTabs() {
  const tabs = document.querySelectorAll(".mtab");
  const panels = document.querySelectorAll(".mpanel");
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      panels.forEach((p) => {
        p.classList.remove("active");
        p.hidden = true;
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      const panel = document.getElementById("tab-" + tab.dataset.tab);
      if (panel) {
        panel.classList.add("active");
        panel.hidden = false;
      }
    });
  });

  const active = document.querySelector(".mpanel.active");
  if (active) active.hidden = false;
})();

/* ── RESERVATION FORM ── */
(function initReservation() {
  const form = document.getElementById("resForm");
  const success = document.getElementById("resSuccess");
  const dateInput = document.getElementById("resDate");

  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
    dateInput.value = today;
  }

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const required = form.querySelectorAll("[required]");
    let valid = true;

    required.forEach((input) => {
      if (!input.value.trim()) {
        valid = false;
        input.classList.add("error");
        input.addEventListener("input", () => input.classList.remove("error"), {
          once: true,
        });
      }
    });

    if (!valid) {
      form.querySelector(".error")?.focus();
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.style.opacity = "0.6";

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.style.display = "none";
        if (success) {
          success.removeAttribute("hidden");
          success.style.display = "block";
        }
      } else {
        alert("Fehler beim Senden. Bitte rufen Sie uns an: 09436 3009333");
        btn.disabled = false;
        btn.style.opacity = "1";
      }
    } catch (err) {
      alert("Fehler beim Senden. Bitte rufen Sie uns an: 09436 3009333");
      btn.disabled = false;
      btn.style.opacity = "1";
    }
  });
})();

(function initBackToTop() {
  const btn = document.getElementById("backTop");
  if (!btn) return;
  let ticking = false;

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          btn.classList.toggle("visible", window.scrollY > 600);
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true },
  );

  btn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
})();

(function initSmoothScroll() {
  document.addEventListener("click", (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const href = anchor.getAttribute("href");
    if (href === "#") return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const navH = document.getElementById("navbar")?.offsetHeight || 70;
    const top = target.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top, behavior: "smooth" });
  });
})();

(function initParallax() {
  const img = document.querySelector(".hours-parallax-img");
  if (!img) return;
  let ticking = false;

  function update() {
    const rect = img.parentElement.getBoundingClientRect();
    const vh = window.innerHeight;
    if (rect.bottom < 0 || rect.top > vh) {
      ticking = false;
      return;
    }
    const progress = (vh - rect.top) / (vh + rect.height);
    const offset = (progress - 0.5) * 60;
    img.style.transform = `translateY(${offset}px)`;
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true },
  );
})();

(function initLazyImages() {
  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    img.style.opacity = "0";
    img.style.transition = "opacity 0.6s ease";
    if (img.complete && img.naturalWidth) {
      img.style.opacity = "1";
    } else {
      img.addEventListener(
        "load",
        () => {
          img.style.opacity = "1";
        },
        { once: true },
      );
    }
  });
})();

(function initHeroScrollFade() {
  const indicator = document.querySelector(".hero-scroll-indicator");
  if (!indicator) return;
  let ticking = false;

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          indicator.style.opacity = String(
            Math.max(0, 1 - window.scrollY / 200),
          );
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true },
  );
})();
