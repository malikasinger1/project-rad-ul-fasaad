(function(){
  'use strict';

  angular
    .module('radUlFasaadApp')
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['$rootScope', '$speechRecognition', '$speechSynthetis', '$speechCorrection', 'toastr',
                      '$window', 'ERROR_MSG'];

  function HomeCtrl($rootScope, $speechRecognition, $speechSynthetis, $speechCorrection, toastr,
                    $window, ERROR_MSG) {
    /* jshint validthis: true */
    var vm = this;

    var db = firebase.firestore();

    var background = ['red', 'green', 'blue', 'purple', 'grey', 'orange', 'yellow', 'brown', 'golden', 'deepskyblue'];
    var task = [
      {
        'regex': /(.+ )?change( .+)?/gi,
        'lang': 'en-US',
        'call': function(e){
          console.info('changing the background ..................');
          angular.element('body').css('background', background[Math.floor(Math.random() * 9) + 1]);
        }
      }, {
        'regex': /(.+ )?start( .+)?/gi,
        'lang': 'en-US',
        'call': function(e){
          console.info('loading started ..................');
          $rootScope.startLoading(true);
        }
      }, {
        'regex': /(.+ )?stop( .+)?/gi,
        'lang': 'en-US',
        'call': function(e){
          console.info('loading finished ..................');
          $rootScope.startLoading(false);
        }
      }, {
        'regex': /(.+ )?turn off( .+)?/gi,
        'lang': 'en-US',
        'call': function(e){
          console.info('turning off the light ..................');
          angular.element('.home-wrapper').css('background-image', 'none');
          angular.element('body').css('background', 'black');
        }
      }, {
        'regex': /(.+ )?remove( .+)?/gi,
        'lang': 'en-US',
        'call': function(e){
          console.info('ok, removing ..........................');
          angular.element('.home-wrapper').css('background-image', 'none');
        }
      }, {
        'regex': /(.+ )?call( .+)?/gi,
        'lang': 'en-US',
        'call': function(e){
          console.info('calling, please wait ................... ');
          toastr.success('Calling please wait.......');
        }
      }, {
        'regex': /(.+ )?open( .+)?/gi,
        'lang': 'en-US',
        'call': function(e){
          console.info('opening ................... ');
          $window.open("https://www.firebase.com", "", "width=1500,height=400");
        }
      }
    ];


    vm.timeline = [{
      content: 'hi there.',
      from: 'me',
      date: new Date(),
      react: ''
    }, {
      content: 'see time after a while.',
      from: 'me',
      date: new Date().getTime()+200000,
      react: ''
    }, {
      content: 'i am just testing its wonderful.',
      from: '',
      date: new Date().getTime()-100000,
      react: ''
    }, {
      content: 'this is text speech testing.',
      from: 'me',
      date: new Date().getTime()-1200000,
      react: ''
    }, {
      content: 'really awesome.',
      from: '',
      date: new Date().getTime()-700000,
      react: ''
    }, {
      content: 'keep rocking man.',
      from: 'me',
      date: new Date().getTime()-100000,
      react: ''
    }, {
      content: 'More awesome text.',
      from: 'me',
      date: new Date().getTime()-900000,
      react: ''
    }];
    vm.emogis = [{
      type: 'Smiley',
      names: [
        "em-smile",
        "em-laughing",
        "em-blush",
        "em-smiley",
        "em-relaxed",
        "em-smirk",
        "em-heart_eyes",
        "em-kissing_heart",
        "em-kissing_closed_eyes",
        "em-flushed",
        "em-relieved",
        "em-satisfied",
        "em-grin",
        "em-wink",
        "em-stuck_out_tongue_winking_eye",
        "em-stuck_out_tongue_closed_eyes",
        "em-grinning",
        "em-kissing",
        "em-kissing_smiling_eyes",
        "em-stuck_out_tongue",
        "em-sleeping",
        "em-worried",
        "em-frowning",
        "em-anguished",
        "em-open_mouth",
        "em-grimacing",
        "em-confused",
        "em-hushed",
        "em-expressionless",
        "em-unamused",
        "em-sweat_smile",
        "em-sweat",
        "em-disappointed_relieved",
        "em-weary",
        "em-pensive",
        "em-disappointed",
        "em-confounded",
        "em-fearful",
        "em-cold_sweat",
        "em-persevere",
        "em-cry",
        "em-sob",
        "em-joy",
        "em-astonished",
        "em-scream",
        "em-tired_face",
        "em-angry",
        "em-rage",
        "em-triumph",
        "em-sleepy",
        "em-yum",
        "em-mask",
        "em-sunglasses",
        "em-dizzy_face",
        "em-imp",
        "em-smiling_imp",
        "em-neutral_face",
        "em-no_mouth",
        "em-innocent",
        "em-alien",
        "em-yellow_heart",
        "em-blue_heart",
        "em-purple_heart",
        "em-heart",
        "em-green_heart",
        "em-broken_heart",
        "em-heartbeat",
        "em-heartpulse",
        "em-two_hearts",
        "em-revolving_hearts",
        "em-cupid",
        "em-sparkling_heart",
        "em-sparkles",
        "em-star",
        "em-star2",
        "em-dizzy",
        "em-collision",
        "em-anger",
        "em-exclamation",
        "em-question",
        "em-grey_exclamation",
        "em-grey_question",
        "em-zzz",
        "em-dash",
        "em-sweat_drops",
        "em-notes",
        "em-musical_note",
        "em-fire",
        "em-hankey",
        "em-poop",
        "em-shit",
        "em---1",
        "em-thumbsup",
        "em--1",
        "em-thumbsdown",
        "em-ok_hand",
        "em-punch",
        "em-facepunch",
        "em-fist",
        "em-v",
        "em-wave",
        "em-hand",
        "em-raised_hand",
        "em-open_hands",
        "em-point_up",
        "em-point_down",
        "em-point_left",
        "em-point_right",
        "em-raised_hands",
        "em-pray",
        "em-point_up_2",
        "em-clap",
        "em-muscle",
        "em-runner",
        "em-running",
        "em-couple",
        "em-family",
        "em-two_men_holding_hands",
        "em-two_women_holding_hands",
        "em-dancer",
        "em-dancers",
        "em-ok_woman",
        "em-no_good",
        "em-information_desk_person",
        "em-raising_hand",
        "em-bride_with_veil",
        "em-person_with_pouting_face",
        "em-person_frowning",
        "em-bow",
        "em-couplekiss",
        "em-couple_with_heart",
        "em-massage",
        "em-haircut",
        "em-nail_care",
        "em-boy",
        "em-girl",
        "em-woman",
        "em-man",
        "em-baby",
        "em-older_woman",
        "em-older_man",
        "em-person_with_blond_hair",
        "em-man_with_gua_pi_mao",
        "em-man_with_turban",
        "em-construction_worker",
        "em-cop",
        "em-angel",
        "em-princess",
        "em-smiley_cat",
        "em-smile_cat",
        "em-heart_eyes_cat",
        "em-kissing_cat",
        "em-smirk_cat",
        "em-scream_cat",
        "em-crying_cat_face",
        "em-joy_cat",
        "em-pouting_cat",
        "em-japanese_ogre",
        "em-japanese_goblin",
        "em-see_no_evil",
        "em-hear_no_evil",
        "em-speak_no_evil",
        "em-guardsman",
        "em-skull",
        "em-feet",
        "em-lips",
        "em-kiss",
        "em-droplet",
        "em-ear",
        "em-eyes",
        "em-nose",
        "em-tongue",
        "em-love_letter",
        "em-bust_in_silhouette",
        "em-busts_in_silhouette",
        "em-speech_balloon"
      ]
    },{
      type: 'Nature',
      names: [
        "em-sunny",
        "em-umbrella",
        "em-cloud",
        "em-snowflake",
        "em-snowman",
        "em-zap",
        "em-cyclone",
        "em-foggy",
        "em-ocean",
        "em-cat",
        "em-dog",
        "em-mouse",
        "em-hamster",
        "em-rabbit",
        "em-wolf",
        "em-frog",
        "em-tiger",
        "em-koala",
        "em-bear",
        "em-pig",
        "em-pig_nose",
        "em-cow",
        "em-boar",
        "em-monkey_face",
        "em-monkey",
        "em-horse",
        "em-racehorse",
        "em-camel",
        "em-sheep",
        "em-elephant",
        "em-panda_face",
        "em-snake",
        "em-bird",
        "em-baby_chick",
        "em-hatched_chick",
        "em-hatching_chick",
        "em-chicken",
        "em-penguin",
        "em-turtle",
        "em-bug",
        "em-honeybee",
        "em-ant",
        "em-beetle",
        "em-snail",
        "em-octopus",
        "em-tropical_fish",
        "em-fish",
        "em-whale",
        "em-whale2",
        "em-dolphin",
        "em-cow2",
        "em-ram",
        "em-rat",
        "em-water_buffalo",
        "em-tiger2",
        "em-rabbit2",
        "em-dragon",
        "em-goat",
        "em-rooster",
        "em-dog2",
        "em-pig2",
        "em-mouse2",
        "em-ox",
        "em-dragon_face",
        "em-blowfish",
        "em-crocodile",
        "em-dromedary_camel",
        "em-leopard",
        "em-cat2",
        "em-poodle",
        "em-paw_prints",
        "em-bouquet",
        "em-cherry_blossom",
        "em-tulip",
        "em-four_leaf_clover",
        "em-rose",
        "em-sunflower",
        "em-hibiscus",
        "em-maple_leaf",
        "em-leaves",
        "em-fallen_leaf",
        "em-herb",
        "em-mushroom",
        "em-cactus",
        "em-palm_tree",
        "em-evergreen_tree",
        "em-deciduous_tree",
        "em-chestnut",
        "em-seedling",
        "em-blossom",
        "em-ear_of_rice",
        "em-shell",
        "em-globe_with_meridians",
        "em-sun_with_face",
        "em-full_moon_with_face",
        "em-new_moon_with_face",
        "em-new_moon",
        "em-waxing_crescent_moon",
        "em-first_quarter_moon",
        "em-waxing_gibbous_moon",
        "em-full_moon",
        "em-waning_gibbous_moon",
        "em-last_quarter_moon",
        "em-waning_crescent_moon",
        "em-last_quarter_moon_with_face",
        "em-first_quarter_moon_with_face",
        "em-crescent_moon",
        "em-earth_africa",
        "em-earth_americas",
        "em-earth_asia",
        "em-volcano",
        "em-milky_way",
        "em-partly_sunny"
      ]
    },{
      type: 'Object',
      names: [
        "em-watch",
        "em-radio",
        "em-satellite",
        "em-satellite_antenna",
        "em-loop",
        "em-mag",
        "em-mag_right",
        "em-unlock",
        "em-lock",
        "em-lock_with_ink_pen",
        "em-closed_lock_with_key",
        "em-key",
        "em-bulb",
        "em-flashlight",
        "em-high_brightness",
        "em-low_brightness",
        "em-electric_plug",
        "em-battery",
        "em-calling",
        "em-email",
        "em-mailbox",
        "em-postbox",
        "em-bathtub",
        "em-shower",
        "em-toilet",
        "em-wrench",
        "em-nut_and_bolt",
        "em-hammer",
        "em-seat",
        "em-moneybag",
        "em-yen",
        "em-dollar",
        "em-pound",
        "em-euro",
        "em-credit_card",
        "em-money_with_wings",
        "em-e-mail",
        "em-inbox_tray",
        "em-outbox_tray",
        "em-incoming_envelope",
        "em-postal_horn",
        "em-mailbox_closed",
        "em-mailbox_with_mail",
        "em-mailbox_with_no_mail",
        "em-package",
        "em-door",
        "em-smoking",
        "em-bomb",
        "em-gun",
        "em-hocho",
        "em-pill",
        "em-syringe",
        "em-page_facing_up",
        "em-page_with_curl",
        "em-bookmark_tabs",
        "em-bar_chart",
        "em-chart_with_upwards_trend",
        "em-chart_with_downwards_trend",
        "em-scroll",
        "em-clipboard",
        "em-calendar",
        "em-date",
        "em-card_index",
        "em-file_folder",
        "em-open_file_folder",
        "em-scissors",
        "em-pushpin",
        "em-paperclip",
        "em-black_nib",
        "em-pencil2",
        "em-straight_ruler",
        "em-triangular_ruler",
        "em-closed_book",
        "em-green_book",
        "em-blue_book",
        "em-orange_book",
        "em-notebook",
        "em-notebook_with_decorative_cover",
        "em-ledger",
        "em-books",
        "em-bookmark",
        "em-name_badge",
        "em-microscope",
        "em-telescope",
        "em-newspaper",
        "em-spades",
        "em-hearts",
        "em-clubs",
        "em-diamonds",
        "em-gem",
        "em-ring",
        "em-trophy",
        "em-musical_score",
        "em-space_invader",
        "em-video_game",
        "em-black_joker",
        "em-flower_playing_cards",
        "em-memo",
        "em-pencil",
        "em-book",
        "em-art",
        "em-shoe",
        "em-sandal",
        "em-high_heel",
        "em-lipstick",
        "em-boot",
        "em-shirt",
        "em-tshirt",
        "em-necktie",
        "em-womans_clothes",
        "em-dress",
        "em-running_shirt_with_sash",
        "em-jeans",
        "em-kimono",
        "em-bikini",
        "em-ribbon",
        "em-tophat",
        "em-crown",
        "em-womans_hat",
        "em-mans_shoe",
        "em-closed_umbrella",
        "em-briefcase",
        "em-handbag",
        "em-pouch",
        "em-purse",
        "em-eyeglasses",
        "em-fishing_pole_and_fish",
        "em-bamboo",
        "em-gift_heart",
        "em-dolls",
        "em-school_satchel",
        "em-mortar_board",
        "em-flags",
        "em-fireworks",
        "em-sparkler",
        "em-wind_chime",
        "em-rice_scene",
        "em-jack_o_lantern",
        "em-ghost",
        "em-santa",
        "em-christmas_tree",
        "em-gift",
        "em-bell",
        "em-no_bell",
        "em-tanabata_tree",
        "em-tada",
        "em-confetti_ball",
        "em-balloon",
        "em-crystal_ball",
        "em-cd",
        "em-dvd",
        "em-floppy_disk",
        "em-camera",
        "em-video_camera",
        "em-movie_camera",
        "em-computer",
        "em-tv",
        "em-iphone",
        "em-phone",
        "em-telephone",
        "em-telephone_receiver",
        "em-pager",
        "em-fax",
        "em-minidisc",
        "em-vhs",
        "em-sound",
        "em-speaker",
        "em-mute",
        "em-loudspeaker",
        "em-mega",
        "em-hourglass",
        "em-hourglass_flowing_sand",
        "em-alarm_clock"
      ]
    },{
      type: 'Food',
      names: [
        "em-apple",
        "em-green_apple",
        "em-tangerine",
        "em-lemon",
        "em-cherries",
        "em-grapes",
        "em-watermelon",
        "em-strawberry",
        "em-peach",
        "em-melon",
        "em-banana",
        "em-pear",
        "em-pineapple",
        "em-sweet_potato",
        "em-eggplant",
        "em-tomato",
        "em-corn",
        "em-coffee",
        "em-tea",
        "em-sake",
        "em-baby_bottle",
        "em-beer",
        "em-beers",
        "em-cocktail",
        "em-tropical_drink",
        "em-wine_glass",
        "em-fork_and_knife",
        "em-pizza",
        "em-hamburger",
        "em-fries",
        "em-poultry_leg",
        "em-meat_on_bone",
        "em-spaghetti",
        "em-curry",
        "em-fried_shrimp",
        "em-bento",
        "em-sushi",
        "em-fish_cake",
        "em-rice_ball",
        "em-rice_cracker",
        "em-rice",
        "em-ramen",
        "em-stew",
        "em-oden",
        "em-dango",
        "em-egg",
        "em-bread",
        "em-doughnut",
        "em-custard",
        "em-icecream",
        "em-ice_cream",
        "em-shaved_ice",
        "em-birthday",
        "em-cake",
        "em-cookie",
        "em-chocolate_bar",
        "em-candy",
        "em-lollipop",
        "em-honey_pot"
      ]
    },{
      type: 'Activity',
      names: [
        "em-football",
        "em-basketball",
        "em-soccer",
        "em-baseball",
        "em-tennis",
        "em-8ball",
        "em-rugby_football",
        "em-bowling",
        "em-golf",
        "em-mountain_bicyclist",
        "em-bicyclist",
        "em-horse_racing",
        "em-snowboarder",
        "em-swimmer",
        "em-surfer",
        "em-ski",
        "em-musical_keyboard",
        "em-violin",
        "em-microphone",
        "em-headphones",
        "em-trumpet",
        "em-saxophone",
        "em-guitar",
        "em-bath",
        "em-game_die",
        "em-dart",
        "em-mahjong",
        "em-clapper",
        "em-ticket",
        "em-slot_machine"
      ]
    },{
      type: 'Symbol',
      names: [
        "em-one",
        "em-two",
        "em-three",
        "em-four",
        "em-five",
        "em-six",
        "em-seven",
        "em-eight",
        "em-nine",
        "em-keycap_ten",
        "em-1234",
        "em-zero",
        "em-hash",
        "em-symbols",
        "em-arrow_backward",
        "em-arrow_down",
        "em-arrow_forward",
        "em-arrow_left",
        "em-capital_abcd",
        "em-abcd",
        "em-abc",
        "em-arrow_lower_left",
        "em-arrow_lower_right",
        "em-arrow_right",
        "em-arrow_up",
        "em-arrow_upper_left",
        "em-arrow_upper_right",
        "em-arrow_double_down",
        "em-arrow_double_up",
        "em-arrow_down_small",
        "em-arrow_heading_down",
        "em-arrow_heading_up",
        "em-leftwards_arrow_with_hook",
        "em-arrow_right_hook",
        "em-left_right_arrow",
        "em-arrow_up_down",
        "em-arrow_up_small",
        "em-arrows_clockwise",
        "em-arrows_counterclockwise",
        "em-rewind",
        "em-fast_forward",
        "em-information_source",
        "em-ok",
        "em-twisted_rightwards_arrows",
        "em-repeat",
        "em-repeat_one",
        "em-new",
        "em-top",
        "em-up",
        "em-cool",
        "em-free",
        "em-ng",
        "em-cinema",
        "em-koko",
        "em-signal_strength",
        "em-u5272",
        "em-u5408",
        "em-u55b6",
        "em-u6307",
        "em-u6708",
        "em-u6709",
        "em-u6e80",
        "em-u7121",
        "em-u7533",
        "em-u7a7a",
        "em-u7981",
        "em-sa",
        "em-restroom",
        "em-mens",
        "em-womens",
        "em-baby_symbol",
        "em-no_smoking",
        "em-parking",
        "em-wheelchair",
        "em-metro",
        "em-baggage_claim",
        "em-accept",
        "em-wc",
        "em-potable_water",
        "em-put_litter_in_its_place",
        "em-secret",
        "em-congratulations",
        "em-m",
        "em-passport_control",
        "em-left_luggage",
        "em-customs",
        "em-ideograph_advantage",
        "em-cl",
        "em-sos",
        "em-id",
        "em-no_entry_sign",
        "em-underage",
        "em-no_mobile_phones",
        "em-do_not_litter",
        "em-non-potable_water",
        "em-no_bicycles",
        "em-children_crossing",
        "em-no_entry",
        "em-eight_spoked_asterisk",
        "em-sparkle",
        "em-eight_pointed_black_star",
        "em-heart_decoration",
        "em-vs",
        "em-vibration_mode",
        "em-mobile_phone_off",
        "em-chart",
        "em-currency_exchange",
        "em-aries",
        "em-taurus",
        "em-gemini",
        "em-cancer",
        "em-leo",
        "em-virgo",
        "em-libra",
        "em-scorpius",
        "em-sagittarius",
        "em-capricorn",
        "em-aquarius",
        "em-pisces",
        "em-ophiuchus",
        "em-six_pointed_star",
        "em-negative_squared_cross_mark",
        "em-a",
        "em-b",
        "em-ab",
        "em-o2",
        "em-diamond_shape_with_a_dot_inside",
        "em-recycle",
        "em-end",
        "em-back",
        "em-on",
        "em-soon",
        "em-clock1",
        "em-clock130",
        "em-clock10",
        "em-clock1030",
        "em-clock11",
        "em-clock1130",
        "em-clock12",
        "em-clock1230",
        "em-clock2",
        "em-clock230",
        "em-clock3",
        "em-clock330",
        "em-clock4",
        "em-clock430",
        "em-clock5",
        "em-clock530",
        "em-clock6",
        "em-clock630",
        "em-clock7",
        "em-clock730",
        "em-clock8",
        "em-clock830",
        "em-clock9",
        "em-clock930",
        "em-heavy_dollar_sign",
        "em-copyright",
        "em-registered",
        "em-tm",
        "em-x",
        "em-heavy_exclamation_mark",
        "em-bangbang",
        "em-interrobang",
        "em-o",
        "em-heavy_multiplication_x",
        "em-heavy_plus_sign",
        "em-heavy_minus_sign",
        "em-heavy_division_sign",
        "em-white_flower",
        "em-100",
        "em-heavy_check_mark",
        "em-ballot_box_with_check",
        "em-radio_button",
        "em-link",
        "em-curly_loop",
        "em-wavy_dash",
        "em-part_alternation_mark",
        "em-trident",
        "em-black_small_square",
        "em-white_small_square",
        "em-black_medium_small_square",
        "em-white_medium_small_square",
        "em-black_medium_square",
        "em-white_medium_square",
        "em-black_large_square",
        "em-white_large_square",
        "em-white_check_mark",
        "em-black_square_button",
        "em-white_square_button",
        "em-black_circle",
        "em-white_circle",
        "em-red_circle",
        "em-large_blue_circle",
        "em-large_blue_diamond",
        "em-large_orange_diamond",
        "em-small_blue_diamond",
        "em-small_orange_diamond",
        "em-small_red_triangle",
        "em-small_red_triangle_down"
      ]
    },{
      type: 'Place',
      names: [
        "em-car",
        "em-taxi",
        "em-oncoming_taxi",
        "em-articulated_lorry",
        "em-bus",
        "em-oncoming_bus",
        "em-rotating_light",
        "em-police_car",
        "em-oncoming_police_car",
        "em-fire_engine",
        "em-ambulance",
        "em-minibus",
        "em-truck",
        "em-train",
        "em-station",
        "em-train2",
        "em-bullettrain_front",
        "em-bullettrain_side",
        "em-light_rail",
        "em-monorail",
        "em-railway_car",
        "em-trolleybus",
        "em-fuelpump",
        "em-vertical_traffic_light",
        "em-traffic_light",
        "em-house",
        "em-house_with_garden",
        "em-school",
        "em-office",
        "em-post_office",
        "em-hospital",
        "em-bank",
        "em-convenience_store",
        "em-love_hotel",
        "em-hotel",
        "em-wedding",
        "em-church",
        "em-department_store",
        "em-european_post_office",
        "em-city_sunrise",
        "em-city_sunset",
        "em-japanese_castle",
        "em-european_castle",
        "em-tent",
        "em-factory",
        "em-tokyo_tower",
        "em-japan",
        "em-mount_fuji",
        "em-sunrise_over_mountains",
        "em-sunrise",
        "em-stars",
        "em-statue_of_liberty",
        "em-bridge_at_night",
        "em-carousel_horse",
        "em-rainbow",
        "em-ferris_wheel",
        "em-fountain",
        "em-roller_coaster",
        "em-ship",
        "em-speedboat",
        "em-boat",
        "em-sailboat",
        "em-rowboat",
        "em-anchor",
        "em-rocket",
        "em-airplane",
        "em-helicopter",
        "em-steam_locomotive",
        "em-tram",
        "em-mountain_railway",
        "em-bike",
        "em-aerial_tramway",
        "em-suspension_railway",
        "em-mountain_cableway",
        "em-tractor",
        "em-blue_car",
        "em-oncoming_automobile",
        "em-red_car",
        "em-warning",
        "em-construction",
        "em-beginner",
        "em-atm",
        "em-busstop",
        "em-barber",
        "em-hotsprings",
        "em-checkered_flag",
        "em-crossed_flags",
        "em-izakaya_lantern",
        "em-moyai",
        "em-circus_tent",
        "em-performing_arts",
        "em-round_pushpin",
        "em-triangular_flag_on_post",
        "em-jp",
        "em-kr",
        "em-cn",
        "em-us",
        "em-fr",
        "em-es",
        "em-it",
        "em-ru",
        "em-gb",
        "em-uk",
        "em-de"
      ]
    }];

    /* init */

    getMessages();

      // when start
    $speechRecognition.onstart(function() {
      console.info('Activated!');
    });
      // when nothing detect
    $speechRecognition.onerror(function(e){
      console.info('No voice detected');
    });
      // when somebody speak
    $speechRecognition.onUtterance(function(utterance){
      console.log(utterance);
    });
      // watch also tasks commands
    $speechRecognition.listenUtterance(task);


    vm.animateElementIn = animateElementIn;
    vm.animateElementOut = animateElementOut;
    vm.listenSpeech = listenSpeech;
    vm.playVoice = playVoice;


    function animateElementIn($el) {
      $el.find(".timeline-panel-style").addClass('animated pulse');
    }
    function animateElementOut($el) {
      $el.find(".timeline-panel-style").removeClass('animated pulse');
    }
    function listenSpeech() {
      // start listening user voice
      $speechRecognition.listen();
    }
    function playVoice(ssml) {
      console.info(ssml);
    }
    function getMessages() {
      // get all messages collection from fire-store database
      db.collection("messages").get()
        .then(function(queryResult) {
          queryResult.forEach(function(doc) {
            console.log(doc.id, doc.data());
          });
        });
    }
    function setFirebaseCollection() {
      // set message collection into fire-store database
      db.collection("messages").add({
          content: "hi, this is a testing",
          from: 'me',
          date: new Date().getTime(),
          react: ''
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
          toastr.error(ERROR_MSG);
        });
    }
  }

})();
