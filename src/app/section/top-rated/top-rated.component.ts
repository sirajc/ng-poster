import { Component, OnInit } from '@angular/core';
import { MovieCardListComponent } from '../shared/movie-card-list';
import { Movie } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'pstr-top-rated',
  templateUrl: 'top-rated.component.html',
  styleUrls: ['top-rated.component.scss'],
  directives: [ MovieCardListComponent ]
})
export class TopRatedComponent implements OnInit {

  movies: Array<Movie> = [];
  constructor() {}

  ngOnInit() {
    movieList.map(movie => this.movies.push(movie));
  }

}

const movieList = [
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
        "small": "https://image.tmdb.org/t/p/w185//9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg"
      },
      "adult": false,
      "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
      "release_date": "1994-09-10",
      "genre_ids": [
        18,
        80
      ],
      "id": 278,
      "original_title": "The Shawshank Redemption",
      "original_language": "en",
      "title": "The Shawshank Redemption",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//xBKGJQsAIeweesB79KC89FpBrVr.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//xBKGJQsAIeweesB79KC89FpBrVr.jpg",
        "original": "https://image.tmdb.org/t/p/original//xBKGJQsAIeweesB79KC89FpBrVr.jpg"
      },
      "popularity": 6.781438,
      "vote_count": 5087,
      "video": false,
      "vote_average": 8.32
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
        "small": "https://image.tmdb.org/t/p/w185//lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg"
      },
      "adult": false,
      "overview": "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
      "release_date": "2014-10-10",
      "genre_ids": [
        18,
        10402
      ],
      "id": 244786,
      "original_title": "Whiplash",
      "original_language": "en",
      "title": "Whiplash",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg",
        "original": "https://image.tmdb.org/t/p/original//6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg"
      },
      "popularity": 7.590015,
      "vote_count": 1980,
      "video": false,
      "vote_average": 8.3
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//d4KNaTrltq6bpkFS01pYtyXa09m.jpg",
        "small": "https://image.tmdb.org/t/p/w185//d4KNaTrltq6bpkFS01pYtyXa09m.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//d4KNaTrltq6bpkFS01pYtyXa09m.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//d4KNaTrltq6bpkFS01pYtyXa09m.jpg"
      },
      "adult": false,
      "overview": "The story spans the years from 1945 to 1955 and chronicles the fictional Italian-American Corleone crime family. When organized crime family patriarch Vito Corleone barely survives an attempt on his life, his youngest son, Michael, steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      "release_date": "1972-03-15",
      "genre_ids": [
        18,
        80
      ],
      "id": 238,
      "original_title": "The Godfather",
      "original_language": "en",
      "title": "The Godfather",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//6xKCYgH16UuwEGAyroLU6p8HLIn.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//6xKCYgH16UuwEGAyroLU6p8HLIn.jpg",
        "original": "https://image.tmdb.org/t/p/original//6xKCYgH16UuwEGAyroLU6p8HLIn.jpg"
      },
      "popularity": 4.403284,
      "vote_count": 3487,
      "video": false,
      "vote_average": 8.25
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//ynXoOxmDHNQ4UAy0oU6avW71HVW.jpg",
        "small": "https://image.tmdb.org/t/p/w185//ynXoOxmDHNQ4UAy0oU6avW71HVW.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//ynXoOxmDHNQ4UAy0oU6avW71HVW.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//ynXoOxmDHNQ4UAy0oU6avW71HVW.jpg"
      },
      "adult": false,
      "overview": "Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?",
      "release_date": "2001-07-20",
      "genre_ids": [
        14,
        12,
        16,
        10751
      ],
      "id": 129,
      "original_title": "千と千尋の神隠し",
      "original_language": "ja",
      "title": "Spirited Away",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//djgM2d3e42p9GFQObg6lwK2SVw2.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//djgM2d3e42p9GFQObg6lwK2SVw2.jpg",
        "original": "https://image.tmdb.org/t/p/original//djgM2d3e42p9GFQObg6lwK2SVw2.jpg"
      },
      "popularity": 4.712227,
      "vote_count": 1929,
      "video": false,
      "vote_average": 8.14
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
        "small": "https://image.tmdb.org/t/p/w185//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg"
      },
      "adult": false,
      "overview": "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
      "release_date": "2014-11-05",
      "genre_ids": [
        12,
        18,
        878
      ],
      "id": 157336,
      "original_title": "Interstellar",
      "original_language": "en",
      "title": "Interstellar",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
        "original": "https://image.tmdb.org/t/p/original//xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg"
      },
      "popularity": 14.282359,
      "vote_count": 5409,
      "video": false,
      "vote_average": 8.14
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//4mFsNQwbD0F237Tx7gAPotd0nbJ.jpg",
        "small": "https://image.tmdb.org/t/p/w185//4mFsNQwbD0F237Tx7gAPotd0nbJ.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//4mFsNQwbD0F237Tx7gAPotd0nbJ.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//4mFsNQwbD0F237Tx7gAPotd0nbJ.jpg"
      },
      "adult": false,
      "overview": "A true story of two men who should never have met - a quadriplegic aristocrat who was injured in a paragliding accident and a young man from the projects.",
      "release_date": "2011-11-02",
      "genre_ids": [
        18,
        35
      ],
      "id": 77338,
      "original_title": "Intouchables",
      "original_language": "fr",
      "title": "The Intouchables",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//ihWaJZCUIon2dXcosjQG2JHJAPN.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//ihWaJZCUIon2dXcosjQG2JHJAPN.jpg",
        "original": "https://image.tmdb.org/t/p/original//ihWaJZCUIon2dXcosjQG2JHJAPN.jpg"
      },
      "popularity": 4.211797,
      "vote_count": 2644,
      "video": false,
      "vote_average": 8.1
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//tHbMIIF51rguMNSastqoQwR0sBs.jpg",
        "small": "https://image.tmdb.org/t/p/w185//tHbMIIF51rguMNSastqoQwR0sBs.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//tHbMIIF51rguMNSastqoQwR0sBs.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//tHbMIIF51rguMNSastqoQwR0sBs.jpg"
      },
      "adult": false,
      "overview": "The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba",
      "release_date": "1974-12-20",
      "genre_ids": [
        18,
        80
      ],
      "id": 240,
      "original_title": "The Godfather: Part II",
      "original_language": "en",
      "title": "The Godfather: Part II",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//gLbBRyS7MBrmVUNce91Hmx9vzqI.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//gLbBRyS7MBrmVUNce91Hmx9vzqI.jpg",
        "original": "https://image.tmdb.org/t/p/original//gLbBRyS7MBrmVUNce91Hmx9vzqI.jpg"
      },
      "popularity": 4.540399,
      "vote_count": 1848,
      "video": false,
      "vote_average": 8.09
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//eqFckcHuFCT1FrzLOAvXBb4jHwq.jpg",
        "small": "https://image.tmdb.org/t/p/w185//eqFckcHuFCT1FrzLOAvXBb4jHwq.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//eqFckcHuFCT1FrzLOAvXBb4jHwq.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//eqFckcHuFCT1FrzLOAvXBb4jHwq.jpg"
      },
      "adult": false,
      "overview": "Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it are the only real things in the world. But what will happen when his Ma suddenly tells him that there are other things outside of Room?",
      "release_date": "2015-10-16",
      "genre_ids": [
        18,
        53
      ],
      "id": 264644,
      "original_title": "Room",
      "original_language": "en",
      "title": "Room",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//tBhp8MGaiL3BXpPCSl5xY397sGH.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//tBhp8MGaiL3BXpPCSl5xY397sGH.jpg",
        "original": "https://image.tmdb.org/t/p/original//tBhp8MGaiL3BXpPCSl5xY397sGH.jpg"
      },
      "popularity": 5.234436,
      "vote_count": 1065,
      "video": false,
      "vote_average": 8.08
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//bwVhmPpydv8P7mWfrmL3XVw0MV5.jpg",
        "small": "https://image.tmdb.org/t/p/w185//bwVhmPpydv8P7mWfrmL3XVw0MV5.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//bwVhmPpydv8P7mWfrmL3XVw0MV5.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//bwVhmPpydv8P7mWfrmL3XVw0MV5.jpg"
      },
      "adult": false,
      "overview": "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
      "release_date": "1988-04-16",
      "genre_ids": [
        16,
        18,
        10751,
        10752
      ],
      "id": 12477,
      "original_title": "火垂るの墓",
      "original_language": "ja",
      "title": "Grave of the Fireflies",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//fCUIuG7y4YKC3hofZ8wsj7zhCpR.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//fCUIuG7y4YKC3hofZ8wsj7zhCpR.jpg",
        "original": "https://image.tmdb.org/t/p/original//fCUIuG7y4YKC3hofZ8wsj7zhCpR.jpg"
      },
      "popularity": 1.001501,
      "vote_count": 406,
      "video": false,
      "vote_average": 8.07
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//f7DImXDebOs148U4uPjI61iDvaK.jpg",
        "small": "https://image.tmdb.org/t/p/w185//f7DImXDebOs148U4uPjI61iDvaK.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//f7DImXDebOs148U4uPjI61iDvaK.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//f7DImXDebOs148U4uPjI61iDvaK.jpg"
      },
      "adult": false,
      "overview": "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
      "release_date": "1997-12-20",
      "genre_ids": [
        35,
        18
      ],
      "id": 637,
      "original_title": "La vita è bella",
      "original_language": "it",
      "title": "Life Is Beautiful",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//bORe0eI72D874TMawOOFvqWS6Xe.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//bORe0eI72D874TMawOOFvqWS6Xe.jpg",
        "original": "https://image.tmdb.org/t/p/original//bORe0eI72D874TMawOOFvqWS6Xe.jpg"
      },
      "popularity": 2.971434,
      "vote_count": 1525,
      "video": false,
      "vote_average": 8.07
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//3TpMBcAYH4cxCw5WoRacWodMTCG.jpg",
        "small": "https://image.tmdb.org/t/p/w185//3TpMBcAYH4cxCw5WoRacWodMTCG.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//3TpMBcAYH4cxCw5WoRacWodMTCG.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//3TpMBcAYH4cxCw5WoRacWodMTCG.jpg"
      },
      "adult": false,
      "overview": "An urban office worker finds that paper airplanes are instrumental in meeting a girl in ways he never expected.",
      "release_date": "2012-11-02",
      "genre_ids": [
        16,
        10751,
        10749
      ],
      "id": 140420,
      "original_title": "Paperman",
      "original_language": "en",
      "title": "Paperman",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//cqn1ynw78Wan37jzs1Ckm7va97G.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//cqn1ynw78Wan37jzs1Ckm7va97G.jpg",
        "original": "https://image.tmdb.org/t/p/original//cqn1ynw78Wan37jzs1Ckm7va97G.jpg"
      },
      "popularity": 3.132613,
      "vote_count": 432,
      "video": false,
      "vote_average": 8.06
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//yPisjyLweCl1tbgwgtzBCNCBle.jpg",
        "small": "https://image.tmdb.org/t/p/w185//yPisjyLweCl1tbgwgtzBCNCBle.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//yPisjyLweCl1tbgwgtzBCNCBle.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//yPisjyLweCl1tbgwgtzBCNCBle.jpg"
      },
      "adult": false,
      "overview": "Told from the perspective of businessman Oskar Schindler who saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory. Schindler’s List is based on a true story, illustrated in black and white and controversially filmed in many original locations.",
      "release_date": "1993-11-29",
      "genre_ids": [
        18,
        36,
        10752
      ],
      "id": 424,
      "original_title": "Schindler's List",
      "original_language": "en",
      "title": "Schindler's List",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//rIpSszng8P0DL0TimSzZbpfnvh1.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//rIpSszng8P0DL0TimSzZbpfnvh1.jpg",
        "original": "https://image.tmdb.org/t/p/original//rIpSszng8P0DL0TimSzZbpfnvh1.jpg"
      },
      "popularity": 5.390926,
      "vote_count": 2234,
      "video": false,
      "vote_average": 8.05
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//811DjJTon9gD6hZ8nCjSitaIXFQ.jpg",
        "small": "https://image.tmdb.org/t/p/w185//811DjJTon9gD6hZ8nCjSitaIXFQ.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//811DjJTon9gD6hZ8nCjSitaIXFQ.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//811DjJTon9gD6hZ8nCjSitaIXFQ.jpg"
      },
      "adult": false,
      "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
      "release_date": "1999-10-14",
      "genre_ids": [
        18
      ],
      "id": 550,
      "original_title": "Fight Club",
      "original_language": "en",
      "title": "Fight Club",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg",
        "original": "https://image.tmdb.org/t/p/original//8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg"
      },
      "popularity": 4.321356,
      "vote_count": 5068,
      "video": false,
      "vote_average": 8.05
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
        "small": "https://image.tmdb.org/t/p/w185//1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg"
      },
      "adult": false,
      "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
      "release_date": "2008-07-16",
      "genre_ids": [
        18,
        28,
        80,
        53
      ],
      "id": 155,
      "original_title": "The Dark Knight",
      "original_language": "en",
      "title": "The Dark Knight",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//nnMC0BM6XbjIIrT4miYmMtPGcQV.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//nnMC0BM6XbjIIrT4miYmMtPGcQV.jpg",
        "original": "https://image.tmdb.org/t/p/original//nnMC0BM6XbjIIrT4miYmMtPGcQV.jpg"
      },
      "popularity": 7.033165,
      "vote_count": 7568,
      "video": false,
      "vote_average": 8.04
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//gzlJkVfWV5VEG5xK25cvFGJgkDz.jpg",
        "small": "https://image.tmdb.org/t/p/w185//gzlJkVfWV5VEG5xK25cvFGJgkDz.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//gzlJkVfWV5VEG5xK25cvFGJgkDz.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//gzlJkVfWV5VEG5xK25cvFGJgkDz.jpg"
      },
      "adult": false,
      "overview": "Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.",
      "release_date": "1997-07-12",
      "genre_ids": [
        12,
        14,
        16
      ],
      "id": 128,
      "original_title": "もののけ姫",
      "original_language": "ja",
      "title": "Princess Mononoke",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//dB2rATwfCbsPGfRLIoluBnKdVHb.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//dB2rATwfCbsPGfRLIoluBnKdVHb.jpg",
        "original": "https://image.tmdb.org/t/p/original//dB2rATwfCbsPGfRLIoluBnKdVHb.jpg"
      },
      "popularity": 2.637942,
      "vote_count": 889,
      "video": false,
      "vote_average": 8.04
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//rDMxjCYEVnvLC4nsBpB6wjL0LDy.jpg",
        "small": "https://image.tmdb.org/t/p/w185//rDMxjCYEVnvLC4nsBpB6wjL0LDy.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//rDMxjCYEVnvLC4nsBpB6wjL0LDy.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//rDMxjCYEVnvLC4nsBpB6wjL0LDy.jpg"
      },
      "adult": false,
      "overview": "Hana, a nineteen-year-old college student, falls in love with a man only for him to reveal his secret; he is a Wolf Man. Eventually the couple bear two children together; a son and daughter they name Ame and Yuki who both inherit the ability to transform into wolves from their father. When the man Hana fell in love with suddenly dies, she makes the decision to move to a rural town isolated from society to continue raising the children in protection.",
      "release_date": "2012-07-21",
      "genre_ids": [
        16,
        18,
        10751,
        14
      ],
      "id": 110420,
      "original_title": "おおかみこどもの雨と雪",
      "original_language": "ja",
      "title": "Wolf Children",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//404XqOQeSMmofX1sxMxezmaSjJt.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//404XqOQeSMmofX1sxMxezmaSjJt.jpg",
        "original": "https://image.tmdb.org/t/p/original//404XqOQeSMmofX1sxMxezmaSjJt.jpg"
      },
      "popularity": 2.688269,
      "vote_count": 220,
      "video": false,
      "vote_average": 8.04
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//yRXTVpDRBA3983C3HjoY0SO4dV6.jpg",
        "small": "https://image.tmdb.org/t/p/w185//yRXTVpDRBA3983C3HjoY0SO4dV6.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//yRXTVpDRBA3983C3HjoY0SO4dV6.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//yRXTVpDRBA3983C3HjoY0SO4dV6.jpg"
      },
      "adult": false,
      "overview": "Drawn from interviews with survivors of Easy Company, as well as their journals and letters, Band of Brothers chronicles the experiences of these men from paratrooper training in Georgia through the end of the war. As an elite rifle company parachuting into Normandy early on D-Day morning, participants in the Battle of the Bulge, and witness to the horrors of war, the men of Easy knew extraordinary bravery and extraordinary fear - and became the stuff of legend. Based on Stephen E. Ambrose's acclaimed book of the same name.",
      "release_date": "2001-09-09",
      "genre_ids": [
        28,
        18,
        10752
      ],
      "id": 331214,
      "original_title": "Band of Brothers",
      "original_language": "en",
      "title": "Band of Brothers",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//x4cycTgAtBIy4TP0DBD2RhtKpol.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//x4cycTgAtBIy4TP0DBD2RhtKpol.jpg",
        "original": "https://image.tmdb.org/t/p/original//x4cycTgAtBIy4TP0DBD2RhtKpol.jpg"
      },
      "popularity": 1.875931,
      "vote_count": 232,
      "video": false,
      "vote_average": 8.03
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//qcL1YfkCxfhsdO6sDDJ0PpzMF9n.jpg",
        "small": "https://image.tmdb.org/t/p/w185//qcL1YfkCxfhsdO6sDDJ0PpzMF9n.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//qcL1YfkCxfhsdO6sDDJ0PpzMF9n.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//qcL1YfkCxfhsdO6sDDJ0PpzMF9n.jpg"
      },
      "adult": false,
      "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
      "release_date": "1957-03-25",
      "genre_ids": [
        18
      ],
      "id": 389,
      "original_title": "12 Angry Men",
      "original_language": "en",
      "title": "12 Angry Men",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//lH2Ga8OzjU1XlxJ73shOlPx6cRw.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//lH2Ga8OzjU1XlxJ73shOlPx6cRw.jpg",
        "original": "https://image.tmdb.org/t/p/original//lH2Ga8OzjU1XlxJ73shOlPx6cRw.jpg"
      },
      "popularity": 3.064546,
      "vote_count": 1083,
      "video": false,
      "vote_average": 8.03
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//pwpGfTImTGifEGgLb3s6LRPd4I6.jpg",
        "small": "https://image.tmdb.org/t/p/w185//pwpGfTImTGifEGgLb3s6LRPd4I6.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//pwpGfTImTGifEGgLb3s6LRPd4I6.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//pwpGfTImTGifEGgLb3s6LRPd4I6.jpg"
      },
      "adult": false,
      "overview": "Henry Hill is a small time gangster, who takes part in a robbery with Jimmy Conway and Tommy De Vito, two other gangsters who have set their sights a bit higher. His two partners kill off everyone else involved in the robbery, and slowly start to climb up through the hierarchy of the Mob. Henry, however, is badly affected by his partners success, but will he stoop low enough to bring about the downfall of Jimmy and Tommy?",
      "release_date": "1990-09-12",
      "genre_ids": [
        18,
        80
      ],
      "id": 769,
      "original_title": "Goodfellas",
      "original_language": "en",
      "title": "Goodfellas",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//xDEOxA01480uLTWuvQCw61VmDBt.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//xDEOxA01480uLTWuvQCw61VmDBt.jpg",
        "original": "https://image.tmdb.org/t/p/original//xDEOxA01480uLTWuvQCw61VmDBt.jpg"
      },
      "popularity": 4.949006,
      "vote_count": 1457,
      "video": false,
      "vote_average": 8.03
    },
    {
      "poster_path": {
        "smaller": "https://image.tmdb.org/t/p/w150//dM2w364MScsjFf8pfMbaWUcWrR.jpg",
        "small": "https://image.tmdb.org/t/p/w185//dM2w364MScsjFf8pfMbaWUcWrR.jpg",
        "medium": "https://image.tmdb.org/t/p/w396//dM2w364MScsjFf8pfMbaWUcWrR.jpg",
        "orignal": "https://image.tmdb.org/t/p/original//dM2w364MScsjFf8pfMbaWUcWrR.jpg"
      },
      "adult": false,
      "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
      "release_date": "1994-10-14",
      "genre_ids": [
        53,
        80
      ],
      "id": 680,
      "original_title": "Pulp Fiction",
      "original_language": "en",
      "title": "Pulp Fiction",
      "backdrop_path": {
        "small": "https://image.tmdb.org/t/p/w396//mte63qJaVnoxkkXbHkdFujBnBgd.jpg",
        "medium": "https://image.tmdb.org/t/p/w780//mte63qJaVnoxkkXbHkdFujBnBgd.jpg",
        "original": "https://image.tmdb.org/t/p/original//mte63qJaVnoxkkXbHkdFujBnBgd.jpg"
      },
      "popularity": 5.10686,
      "vote_count": 4582,
      "video": false,
      "vote_average": 8.03
    }
  ];