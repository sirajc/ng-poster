import { Component, OnInit } from '@angular/core';
import { MovieCardListComponent } from '../shared/movie-card-list';
import { Movie } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'pstr-search-result',
  templateUrl: 'search-result.component.html',
  styleUrls: ['search-result.component.scss'],
  directives: [ MovieCardListComponent ]
})
export class SearchResultComponent implements OnInit {

  movies: Array<Movie> = [];
  constructor() {}

  ngOnInit() {
    searchResult.map(movie => this.movies.push(movie));
  }

}

const searchResult = [
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//kHXEpyfl6zqn8a6YuozZUujufXf.jpg",
        "small": "https://image.tmdb.org/t/p/w185//kHXEpyfl6zqn8a6YuozZUujufXf.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//kHXEpyfl6zqn8a6YuozZUujufXf.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//kHXEpyfl6zqn8a6YuozZUujufXf.jpg"
      },
      "adult": false,
      "overview": "84 years later, a 101-year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.",
      "release_date": "1997-11-18",
      "genre_ids": [
        18,
        10749,
        53
      ],
      "id": 597,
      "original_title": "Titanic",
      "original_language": "en",
      "title": "Titanic",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//2Te2YJoLtT2cHME7i5kDuEwJWZc.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//2Te2YJoLtT2cHME7i5kDuEwJWZc.jpg",
        "original": "https://image.tmdb.org/t/p/original//2Te2YJoLtT2cHME7i5kDuEwJWZc.jpg"
      },
      "popularity": 5.943408,
      "vote_count": 4079,
      "video": false,
      "vote_average": 7.23
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//8DMS4zPRF3uH4BZ8OC4GtZ8ewD9.jpg",
        "small": "https://image.tmdb.org/t/p/w185//8DMS4zPRF3uH4BZ8OC4GtZ8ewD9.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//8DMS4zPRF3uH4BZ8OC4GtZ8ewD9.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//8DMS4zPRF3uH4BZ8OC4GtZ8ewD9.jpg"
      },
      "adult": false,
      "overview": "Unhappily married, Julia Sturges decides to go to America with her two children on the unsinkable Titanic. Her husband, Richard also arranges passage on the luxury liner so as to have custody of their two children. All this fades to insignificance once the ship hits an iceberg.",
      "release_date": "1953-04-11",
      "genre_ids": [
        18,
        28,
        10749
      ],
      "id": 16535,
      "original_title": "Titanic",
      "original_language": "en",
      "title": "Titanic",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//4MlLN6nPOZ6RDFhPcfj4OM1meyY.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//4MlLN6nPOZ6RDFhPcfj4OM1meyY.jpg",
        "original": "https://image.tmdb.org/t/p/original//4MlLN6nPOZ6RDFhPcfj4OM1meyY.jpg"
      },
      "popularity": 1.21956,
      "vote_count": 11,
      "video": false,
      "vote_average": 6.05
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//AosgVsKPbLctVQ8hd8shEj7LJrZ.jpg",
        "small": "https://image.tmdb.org/t/p/w185//AosgVsKPbLctVQ8hd8shEj7LJrZ.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//AosgVsKPbLctVQ8hd8shEj7LJrZ.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//AosgVsKPbLctVQ8hd8shEj7LJrZ.jpg"
      },
      "adult": false,
      "overview": "A story of the romances of two couples upon the doomed ship. Isabella Paradine (Catherine Zeta Jones) is a wealthy woman mourning the loss of her aunt, who reignites a romance with old flame, Wynn Park (Peter Gallagher). Meanwhile, a charming ne'er do well named Jamie Perse (Mike Doyle) steals a ticket for the ship, and falls for a sweet innocent Irish girl on board. But their romance is threatened by the villainous Simon Doonan (Tim Curry), who has discovered about the ticket and makes Jamie his unwilling accomplice, as well as having sinister plans for the girl.",
      "release_date": "1996-11-17",
      "genre_ids": [
        28,
        18,
        10749
      ],
      "id": 2699,
      "original_title": "Titanic",
      "original_language": "en",
      "title": "Titanic",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//udi11sz1GzpVLTX2XavAWuqB9MW.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//udi11sz1GzpVLTX2XavAWuqB9MW.jpg",
        "original": "https://image.tmdb.org/t/p/original//udi11sz1GzpVLTX2XavAWuqB9MW.jpg"
      },
      "popularity": 1.144476,
      "vote_count": 21,
      "video": false,
      "vote_average": 6.1
    },
    {
      "poster_path": {
        "smaller": null,
        "small": null,
        "medium": null,
        "orignal": null
      },
      "adult": false,
      "overview": "The world's largest ship, the Titanic, meets with disaster when it strikes an iceberg on its maiden voyage.",
      "release_date": "2012-01-01",
      "genre_ids": [],
      "id": 124712,
      "original_title": "Titanic",
      "original_language": "en",
      "title": "Titanic",
      "backdrop_path": {
        "small": null,
        "medium": null,
        "original": null
      },
      "popularity": 1.006732,
      "vote_count": 3,
      "video": false,
      "vote_average": 5.67,
      "backdrop_color": "#fce4a6"
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//h0vUPTmuxzX6ZFHlV2gNXb18TbH.jpg",
        "small": "https://image.tmdb.org/t/p/w185//h0vUPTmuxzX6ZFHlV2gNXb18TbH.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//h0vUPTmuxzX6ZFHlV2gNXb18TbH.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//h0vUPTmuxzX6ZFHlV2gNXb18TbH.jpg"
      },
      "adult": false,
      "overview": "This little-known German film retells the true story of the British ocean liner that met a tragic fate. Ernst Fritz Fürbringer plays the president of the White Star Line, who unwisely pressed the Titanic's captain (Otto Wernicke) to make the swiftest possible crossing to New York. Interestingly, director Herbert Selpin was arrested by the Gestapo during this film's production, and German censors banned the film for its scenes of panic and terror.",
      "release_date": "1943-11-10",
      "genre_ids": [
        36,
        18
      ],
      "id": 11021,
      "original_title": "Titanic",
      "original_language": "de",
      "title": "Titanic",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//nZo554S2DtQiZhK59TSzrJItD6X.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//nZo554S2DtQiZhK59TSzrJItD6X.jpg",
        "original": "https://image.tmdb.org/t/p/original//nZo554S2DtQiZhK59TSzrJItD6X.jpg"
      },
      "popularity": 1.000915,
      "vote_count": 5,
      "video": false,
      "vote_average": 5.4
    },
    {
      "poster_path": {
        "smaller": null,
        "small": null,
        "medium": null,
        "orignal": null
      },
      "adult": false,
      "overview": "",
      "release_date": "1984-01-01",
      "genre_ids": [
        18
      ],
      "id": 357517,
      "original_title": "Titanic",
      "original_language": "de",
      "title": "Titanic",
      "backdrop_path": {
        "small": null,
        "medium": null,
        "original": null
      },
      "popularity": 1,
      "vote_count": 0,
      "video": false,
      "vote_average": 0,
      "backdrop_color": "#bf9ff2"
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//fiEKal45vMDeGcxKXHBA4rNSWRy.jpg",
        "small": "https://image.tmdb.org/t/p/w185//fiEKal45vMDeGcxKXHBA4rNSWRy.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//fiEKal45vMDeGcxKXHBA4rNSWRy.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//fiEKal45vMDeGcxKXHBA4rNSWRy.jpg"
      },
      "adult": false,
      "overview": "The luxury liner Titanic 2000 has set sail on its maiden voyage, and one of the passengers is the vampire Vladamina. Vladamina is searching for a woman she can turn into a vampire queen, and frustrated rock groupie Shari looks to be a perfect target. As various people get seduced and/or killed as the liner continues on its doomed voyage, Shari must chose between eternity as a living dead sex slave or a frigid grave at the bottom of the ocean.",
      "release_date": "1999-01-01",
      "genre_ids": [
        35,
        27
      ],
      "id": 4240,
      "original_title": "Titanic 2000",
      "original_language": "en",
      "title": "Titanic 2000",
      "backdrop_path": {
        "small": null,
        "medium": null,
        "original": null
      },
      "popularity": 1.256746,
      "vote_count": 4,
      "video": false,
      "vote_average": 7.63,
      "backdrop_color": "#f495b3"
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//tUSMxX60DGkTIoiDnUNNrJLtP3t.jpg",
        "small": "https://image.tmdb.org/t/p/w185//tUSMxX60DGkTIoiDnUNNrJLtP3t.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//tUSMxX60DGkTIoiDnUNNrJLtP3t.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//tUSMxX60DGkTIoiDnUNNrJLtP3t.jpg"
      },
      "adult": false,
      "overview": "On the 100th anniversary of the original voyage, a modern luxury liner christened \"Titanic 2,\" follows the path of its namesake. But when a tsunami hurls an ice berg into the new ship's path, the passengers and crew must fight to avoid a similar fate.",
      "release_date": "2010-08-07",
      "genre_ids": [
        28,
        12,
        53
      ],
      "id": 44918,
      "original_title": "Titanic II",
      "original_language": "en",
      "title": "Titanic 2",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//9nost5nL1EaqgcGpOpC550M0x9A.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//9nost5nL1EaqgcGpOpC550M0x9A.jpg",
        "original": "https://image.tmdb.org/t/p/original//9nost5nL1EaqgcGpOpC550M0x9A.jpg"
      },
      "popularity": 1.164589,
      "vote_count": 29,
      "video": false,
      "vote_average": 2.66
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//1QuOIIkxbNAGKvHAP11Hw2k5w0p.jpg",
        "small": "https://image.tmdb.org/t/p/w185//1QuOIIkxbNAGKvHAP11Hw2k5w0p.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//1QuOIIkxbNAGKvHAP11Hw2k5w0p.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//1QuOIIkxbNAGKvHAP11Hw2k5w0p.jpg"
      },
      "adult": false,
      "overview": "",
      "release_date": "1998-04-22",
      "genre_ids": [
        99,
        36
      ],
      "id": 285652,
      "original_title": "Titanic : L'incroyable tragédie",
      "original_language": "fr",
      "title": "Titanic : L'incroyable tragédie",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//1BZnGBQsF3hgwL6vnR2reeYeshm.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//1BZnGBQsF3hgwL6vnR2reeYeshm.jpg",
        "original": "https://image.tmdb.org/t/p/original//1BZnGBQsF3hgwL6vnR2reeYeshm.jpg"
      },
      "popularity": 1.00021,
      "vote_count": 1,
      "video": false,
      "vote_average": 0.5
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//7zJv3FBCmjCwrA6jOLOdC6tbnvz.jpg",
        "small": "https://image.tmdb.org/t/p/w185//7zJv3FBCmjCwrA6jOLOdC6tbnvz.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//7zJv3FBCmjCwrA6jOLOdC6tbnvz.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//7zJv3FBCmjCwrA6jOLOdC6tbnvz.jpg"
      },
      "adult": false,
      "overview": "The passenger ship Doña Paz collided with an oil tanker in the Philippines. 4,000 passengers died in the tragedy.  Just five days before Christmas in 1987, the passenger ship Doña Paz collided with an oil tanker off Mindoro Island in the Philippines. 4,000 passengers died in the tragedy. It was the world's worst peacetime maritime disaster. Through dramatic first hand accounts from survivors and rescuers, transcripts from the Philippine congressional inquiry into the tragedy, archival footage and photos and a re-enactment of the collision, dissect the unfolding tragedy of Doña Paz.",
      "release_date": "",
      "genre_ids": [],
      "id": 180352,
      "original_title": "Asia's Titanic",
      "original_language": "en",
      "title": "Asia's Titanic",
      "backdrop_path": {
        "small": null,
        "medium": null,
        "original": null
      },
      "popularity": 1.002874,
      "vote_count": 0,
      "video": false,
      "vote_average": 0,
      "backdrop_color": "#a7c8f2"
    },
    {
      "poster_path": {
        "smaller": null,
        "small": null,
        "medium": null,
        "orignal": null
      },
      "adult": false,
      "overview": "A survey of 86 years of Titanicana in popular culture, with the emphasis on movies about (or inspired by) the disaster.",
      "release_date": "",
      "genre_ids": [],
      "id": 368074,
      "original_title": "Beyond Titanic",
      "original_language": "en",
      "title": "Beyond Titanic",
      "backdrop_path": {
        "small": null,
        "medium": null,
        "original": null
      },
      "popularity": 1.0225,
      "vote_count": 0,
      "video": false,
      "vote_average": 0,
      "backdrop_color": "#af71ed"
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//5Ooqlobcoy0feQeMNBnZBxKKiUR.jpg",
        "small": "https://image.tmdb.org/t/p/w185//5Ooqlobcoy0feQeMNBnZBxKKiUR.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//5Ooqlobcoy0feQeMNBnZBxKKiUR.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//5Ooqlobcoy0feQeMNBnZBxKKiUR.jpg"
      },
      "adult": false,
      "overview": "One hundred years ago the Titanic was launched. We bring you a new and never broadcast HD doc revealing the litany of human error, from the building process, to the tragic events that led her to be rammed into the iceberg that sank her.",
      "release_date": "2011-06-02",
      "genre_ids": [
        99,
        36
      ],
      "id": 305003,
      "original_title": "Titanic Arrogance",
      "original_language": "en",
      "title": "Titanic Arrogance",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//pyYGg2TTdOAymOBVMCdiYVoAOUE.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//pyYGg2TTdOAymOBVMCdiYVoAOUE.jpg",
        "original": "https://image.tmdb.org/t/p/original//pyYGg2TTdOAymOBVMCdiYVoAOUE.jpg"
      },
      "popularity": 1.001632,
      "vote_count": 1,
      "video": false,
      "vote_average": 6
    },
    {
      "poster_path": {
        "smaller": null,
        "small": null,
        "medium": null,
        "orignal": null
      },
      "adult": false,
      "overview": "For decades the wreck of the liner RMS Titanic had eluded those seeking to locate her grave site. Many failed until Dr. Robert Ballard turned a dream into reality in 1985 when he found her remains over 12000' beneath the North Atlantic Ocean. Dr. Ballard tells how his missions to two lost submarines from the Cold War helped him find the debris trail of the Titanic that she left across the sea bed. Interspersed with this intriguing once-Top Secret mission is the story of Ballard's 2004 trip back to Titanic to document the ensuing effects of visitors and salvagers since his last trip in 1986. Understanding that the Titanic and her remains belong to everyone, Dr. Ballard returns with the National Oceanic and Atmospheric Administration (NOAA) to help make his vision of a museum - a museum available to all - become a reality. A companion to Return to Titanic.\r - Written by Glenn C. Reimer",
      "release_date": "2004-12-01",
      "genre_ids": [],
      "id": 264378,
      "original_title": "Titanic Revealed",
      "original_language": "en",
      "title": "Titanic Revealed",
      "backdrop_path": {
        "small": null,
        "medium": null,
        "original": null
      },
      "popularity": 1.000314,
      "vote_count": 0,
      "video": false,
      "vote_average": 0,
      "backdrop_color": "#7b72f9"
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//zfx8YMEG3sR9t4rKYgOD3O0FoPN.jpg",
        "small": "https://image.tmdb.org/t/p/w185//zfx8YMEG3sR9t4rKYgOD3O0FoPN.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//zfx8YMEG3sR9t4rKYgOD3O0FoPN.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//zfx8YMEG3sR9t4rKYgOD3O0FoPN.jpg"
      },
      "adult": false,
      "overview": "Belfast 1972: The politically naive Bernie is trying to bring up a normal family in less than normal surroundings. Her best friend is accidentally shot dead by the IRA, and her neighbours are constantly raided by the army. In this climate of fear she stands up and condemns the murders. Criticising both factions, her call for a ceasefire is interpreted as an attack against the IRA, and as her peace movement takes momentum, she and her family are placed in the frontline.",
      "release_date": "1998-08-08",
      "genre_ids": [
        18
      ],
      "id": 83036,
      "original_title": "Titanic Town",
      "original_language": "en",
      "title": "Titanic Town",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//2fSn9K6Z22ngxQe3iyNyevZxdB2.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//2fSn9K6Z22ngxQe3iyNyevZxdB2.jpg",
        "original": "https://image.tmdb.org/t/p/original//2fSn9K6Z22ngxQe3iyNyevZxdB2.jpg"
      },
      "popularity": 1.000281,
      "vote_count": 0,
      "video": false,
      "vote_average": 0
    },
    {
      "poster_path": {
        "smaller": null,
        "small": null,
        "medium": null,
        "orignal": null
      },
      "adult": false,
      "overview": "Documentary about the sinking of the Titanic",
      "release_date": "",
      "genre_ids": [],
      "id": 293631,
      "original_title": "The Titanic",
      "original_language": "en",
      "title": "The Titanic",
      "backdrop_path": {
        "small": null,
        "medium": null,
        "original": null
      },
      "popularity": 1.000002,
      "vote_count": 0,
      "video": false,
      "vote_average": 0,
      "backdrop_color": "#ebf98e"
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//t7L71MjX37chaV1uVEMtoden5mA.jpg",
        "small": "https://image.tmdb.org/t/p/w185//t7L71MjX37chaV1uVEMtoden5mA.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//t7L71MjX37chaV1uVEMtoden5mA.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//t7L71MjX37chaV1uVEMtoden5mA.jpg"
      },
      "adult": false,
      "overview": "Based on a short story of Ivo Andrić, famous Yugoslav Nobel Prize winner, this film is set in Sarajevo during WW2. Mento is a humble, poor Jew who runs a caffe. Stjepan is a man of unknown background, with no social or psychological dimension, who joined Nazis to leave any sort of trace behind himself.",
      "release_date": "1979-01-01",
      "genre_ids": [
        18
      ],
      "id": 49129,
      "original_title": "Bife 'Titanik'",
      "original_language": "en",
      "title": "Buffet Titanic",
      "backdrop_path": {
        "small": null,
        "medium": null,
        "original": null
      },
      "popularity": 1.010983,
      "vote_count": 2,
      "video": false,
      "vote_average": 3.75,
      "backdrop_color": "#96fc74"
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//sAVXxt25jEHILAI3s9EGXWmY889.jpg",
        "small": "https://image.tmdb.org/t/p/w185//sAVXxt25jEHILAI3s9EGXWmY889.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//sAVXxt25jEHILAI3s9EGXWmY889.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//sAVXxt25jEHILAI3s9EGXWmY889.jpg"
      },
      "adult": false,
      "overview": "In the hours after the Titanic struck an iceberg 100 years ago, a team of shipbuilders and engineers raced against time to save the stricken vessel.  Based on eye-witness accounts, this film reveals what went on below decks in the hours before the Titanic sank, telling the previously relatively unheralded stories of engineers who fought courageously to hold back the power of the sea and keep the power systems running, even when they learned that all was lost.  Most of these men died but their actions bought enough time to save many lives.  This drama-documentary tells a poignant story of self-sacrifice by the Titanic's engineers, stokers and firemen in the face of impending death.",
      "release_date": "2012-04-15",
      "genre_ids": [
        99,
        18
      ],
      "id": 102370,
      "original_title": "Saving the Titanic",
      "original_language": "en",
      "title": "Saving the Titanic",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//2m6NspBEu2DyuF8M3qm2dSPNz1j.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//2m6NspBEu2DyuF8M3qm2dSPNz1j.jpg",
        "original": "https://image.tmdb.org/t/p/original//2m6NspBEu2DyuF8M3qm2dSPNz1j.jpg"
      },
      "popularity": 1.005265,
      "vote_count": 0,
      "video": false,
      "vote_average": 0
    },
    {
      "poster_path": {
        "smaller": null,
        "small": null,
        "medium": null,
        "orignal": null
      },
      "adult": false,
      "overview": "",
      "release_date": "2014-07-05",
      "genre_ids": [
        99
      ],
      "id": 344076,
      "original_title": "Drenar el titanic",
      "original_language": "es",
      "title": "Drenar el titanic",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//9AjTRDv3uNPxg4mJo0CX7FHjNwY.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//9AjTRDv3uNPxg4mJo0CX7FHjNwY.jpg",
        "original": "https://image.tmdb.org/t/p/original//9AjTRDv3uNPxg4mJo0CX7FHjNwY.jpg"
      },
      "popularity": 1.003,
      "vote_count": 1,
      "video": false,
      "vote_average": 8
    },
    {
      "poster_path": {
        "smaller": null,
        "small": null,
        "medium": null,
        "orignal": null
      },
      "adult": false,
      "overview": "Readings from the diaries, accounts and letters of its passengers and crew tell the story of the Titanic, which sank 100 years ago today on its maiden voyage. The cast includes Richard E Grant, Roger Allam, Anna Madeley, James Wilby and Claudie Blakley, alongside relatives of those who were on board. Charles Dance narrates.",
      "release_date": "2012-04-15",
      "genre_ids": [
        99
      ],
      "id": 303710,
      "original_title": "Words of the Titanic",
      "original_language": "en",
      "title": "Words of the Titanic",
      "backdrop_path": {
        "small": null,
        "medium": null,
        "original": null
      },
      "popularity": 1.002548,
      "vote_count": 0,
      "video": false,
      "vote_average": 0,
      "backdrop_color": "#a67bed"
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//2brvEHzZpDrNqmzsAPzlA2YfQfA.jpg",
        "small": "https://image.tmdb.org/t/p/w185//2brvEHzZpDrNqmzsAPzlA2YfQfA.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//2brvEHzZpDrNqmzsAPzlA2YfQfA.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//2brvEHzZpDrNqmzsAPzlA2YfQfA.jpg"
      },
      "adult": false,
      "overview": "Robert Ballard has been living and breathing the Titanic since he was part of the team that discovered it in 1985. In Save the Titanic With Bob Ballard, he revisits the iconic ship in an entirely different way—from the perspective of those who set sail on it some 100 years ago. Ballard travels to the shipyards of Northern Ireland to retrace the path of the doomed ship from its very incarnation. Throughout his journey, Ballard is driven by one personal question—will the Titanic survive another 100 years? As evidence mounts that the ship is under siege by natural forces, careless visitors, and even rogue salvage operators, the man who found it teams with the families of victims and survivors to protect the legacy of history’s most famous ship.",
      "release_date": "2012-04-08",
      "genre_ids": [
        99
      ],
      "id": 112079,
      "original_title": "Save the Titanic With Bob Ballard",
      "original_language": "en",
      "title": "Save the Titanic With Bob Ballard",
      "backdrop_path": {
        "small": null,
        "medium": null,
        "original": null
      },
      "popularity": 1.002518,
      "vote_count": 1,
      "video": false,
      "vote_average": 6,
      "backdrop_color": "#ff72d0"
    }
  ];